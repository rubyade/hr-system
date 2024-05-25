import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "./globals.css";
import { AppProvider } from "../components/context";
import Navbar from "@/components/Navbar";
import { SwrProviders } from "./providers";
import * as React from "react";
import { Providers } from "./providers";

export const metadata = {
  title: "HR-SYSTEM",
  description: "Simplifying HR services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-gradient-to-r py-6 min-h-full from-red-300 to-purple-500">
        <Providers>
          <Navbar />
          {/* <SwrProviders> */}
          <div>
            <AppProvider>{children}</AppProvider>
          </div>

          {/* </SwrProviders> */}
          <Navbar />
          <SwrProviders>
            <div className="w-screen h-screen  px-14 items-start justify-center">
              <AppProvider>{children}</AppProvider>
            </div>
          </SwrProviders>
        </Providers>
      </body>
    </html>
  );
}
