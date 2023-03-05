import {useState,useEffect} from "react";
import webPCheck from "supports-webp";


export function useWebPSupportCheck() {
  const [{ webP: supportsWebP }, setWebPSupport] = useState({ webP: true });

  useEffect(() => {
    const checkForSupport = async () => {
      const browserSupportsWebP = await webPCheck;

      setWebPSupport({ webP: browserSupportsWebP });
    };

    checkForSupport();
  }, []);

  return supportsWebP;
}
