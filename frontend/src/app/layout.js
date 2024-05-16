import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "./globals.css";
import { AppProvider } from "../components/context";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "HR-SYSTEM",
  description: "Simplifying HR services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-red-300 to-purple-500">
        <Navbar />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
