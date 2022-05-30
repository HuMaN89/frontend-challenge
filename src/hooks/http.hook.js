import { useCallback } from "react";

export const useHttp = () => {
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
      try {
        const response = await fetch(url, { method, body, headers });
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }
        const data = response.json();
        return data;
      } catch (e) {
        throw e;
      }
    },
    []
  );

  return { request };
};
