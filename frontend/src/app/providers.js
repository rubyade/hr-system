"use client";
import fetcher from "@/services/fetcher";
import { SWRConfig } from "swr";

export function SwrProviders({ children }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateIfStale: true,
        revalidateOnFocus: true,
      }}
    >
      {children}
    </SWRConfig>
  );
}
