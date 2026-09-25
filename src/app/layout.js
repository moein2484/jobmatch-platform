import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { GlobalProvider } from "@/component/context/GlobalContext";

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="fa">
      <body>
        <GlobalProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
