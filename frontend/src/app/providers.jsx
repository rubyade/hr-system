// app/providers.tsx
"use client";

import fetcher from "@/services/fetcher";
import { NextUIProvider } from "@nextui-org/react";
import { SWRConfig } from "swr";

export function Providers({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export function SwrProviders({ children }) {
  return (
    <SWRConfig value={{ fetcher, refreshInterval: 3000 }}>{children}</SWRConfig>
  );
}
