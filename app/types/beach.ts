export interface BeachImage {
  id: string;
  url: string;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    thumbnail?: { url: string };
  };
}

export interface Beach {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl?: string;
  image?: {
    data?: {
      id: string;
      attributes: BeachImage;
    };
  };
}

export interface BeachApiResponse {
  data: Beach[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface BeachError {
  message: string;
  status?: number;
  details?: string;
}
