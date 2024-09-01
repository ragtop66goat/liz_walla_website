import axios, { AxiosRequestConfig, Method } from "axios";
import { useCallback, useState } from "react";


interface UseAxiosResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  apiCall: () => Promise<void>;
}

interface UseAxiosProps {
  url: string;
  method?: Method; 
  headers?: Record<string, string>;
  body?: string;
}

export const useAxios = <T>({
  url,
  method = "GET",
  headers,
  body,
}: UseAxiosProps): UseAxiosResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiCall = useCallback(async () => {
    try {
      setLoading(true);

      const config: AxiosRequestConfig = {
        url,
        method,
        headers,
        data:body
      };

      const res = await axios.request<T>(config);
      setData(res.data);
      setError(null);
    } catch (err: any) {
      setError(err.message || "There was an error processing this request");
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [url, method, headers, body]);

  return { data, loading, error, apiCall };
};
