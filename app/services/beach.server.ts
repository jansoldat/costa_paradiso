import type { Beach, BeachApiResponse, BeachError } from "~/types/beach";
import qs from "qs";

interface FetchBeachesOptions {
  locale?: string;
  page?: number;
  pageSize?: number;
  retries?: number;
}

const DEFAULT_OPTIONS: Required<FetchBeachesOptions> = {
  locale: "cs-CZ",
  page: 1,
  pageSize: 10,
  retries: 3,
};

function createUserFriendlyError(error: unknown, context: string): BeachError {
  if (error instanceof Error) {
    // Network errors
    if (error.message.includes("fetch")) {
      return {
        message:
          "Unable to connect to the server. Please check your internet connection and try again.",
        details: error.message,
        status: 0,
      };
    }

    // Timeout errors
    if (error.message.includes("timeout")) {
      return {
        message: "The request took too long to complete. Please try again.",
        details: error.message,
        status: 408,
      };
    }

    return {
      message: `Failed to ${context}. Please try again later.`,
      details: error.message,
    };
  }

  return {
    message: `An unexpected error occurred while ${context}. Please try again later.`,
    details: String(error),
  };
}

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries: number
): Promise<Response> {
  let lastError: Error;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      if (attempt === retries) {
        throw lastError;
      }

      // Exponential backoff: wait 1s, 2s, 4s between retries
      const delay = Math.pow(2, attempt - 1) * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  throw lastError!;
}

export async function fetchBeaches(
  options: FetchBeachesOptions = {}
): Promise<BeachApiResponse> {
  const { locale, page, pageSize, retries } = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  try {
    // Validate environment
    if (!process.env.API_URL) {
      throw new Error("API_URL environment variable is not configured");
    }

    // Build query parameters
    const query = qs.stringify({
      populate: "deep",
      locale,
      "pagination[page]": page,
      "pagination[pageSize]": pageSize,
    });

    const url = `${process.env.API_URL}/api/beaches?${query}`;

    const response = await fetchWithRetry(
      url,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
      retries
    );

    const data = await response.json();

    // Validate response structure
    if (!data || typeof data !== "object") {
      throw new Error("Invalid response format from API");
    }

    // Handle Strapi response format
    const beaches: Beach[] = Array.isArray(data.data)
      ? data.data.map((item: any) => ({
          id: item.id || String(Math.random()),
          name: item.attributes?.name || "Unknown Beach",
          category: item.attributes?.category || "Beach",
          description: item.attributes?.description || "",
          imageUrl: item.attributes?.image?.data?.attributes?.url,
          image: item.attributes?.image,
        }))
      : [];

    return {
      data: beaches,
      meta: data.meta,
    };
  } catch (error) {
    console.error("Error fetching beaches:", error);
    throw createUserFriendlyError(error, "loading beach information");
  }
}

// Mock data for development/fallback
export function getMockBeaches(): BeachApiResponse {
  const mockBeaches: Beach[] = [
    {
      id: "1",
      name: "Costa Paradiso Beach",
      category: "Main Beach",
      description:
        "Beautiful main beach with crystal clear waters and stunning views.",
      imageUrl:
        "https://res.cloudinary.com/dsnfelexc/image/upload/v1682857704/gimg_1_jpg_e55c3feb5b.webp",
    },
    {
      id: "2",
      name: "Li Cossi Beach",
      category: "Hidden Gem",
      description: "A secluded beach perfect for peaceful relaxation.",
      imageUrl:
        "https://res.cloudinary.com/dsnfelexc/image/upload/v1682857704/gimg_2_jpg_e2f39af0e5.webp",
    },
    {
      id: "3",
      name: "Tinnari Beach",
      category: "Family Beach",
      description: "Family-friendly beach with shallow waters and amenities.",
      imageUrl:
        "https://res.cloudinary.com/dsnfelexc/image/upload/v1682857704/gimg_3_jpg_c77200d606.webp",
    },
  ];

  return {
    data: mockBeaches,
    meta: {
      pagination: {
        page: 1,
        pageSize: 10,
        pageCount: 1,
        total: mockBeaches.length,
      },
    },
  };
}
