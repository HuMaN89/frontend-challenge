import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = {
        "Content-type": "application/json",
        "x-api-key": "api_key=457e7765-332c-4bf8-9994-c77393d11961",
      }
    ) => {
      setLoading(true);
      try {
        const response = await fetch(url, { method, body, headers });
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }
        const data = response.json();
        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );
  const clearError = useCallback(() => setError(null), []);

  return { loading, setLoading, request, error, clearError };
};
