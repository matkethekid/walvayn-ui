import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Walvayn Shop",
  description: "Walvayn Shop brachoaaaaaaaaaaaaaaaaaaaaaaaaa"
};

const gudlakExtraBold = localFont({
  src: "./fonts/GudlakExtraBold.woff2",
  display: 'swap'
});

export default async function RootLayout({ children }: any) {
  return (
    <html lang={'hr'}>
      <body className={`antialiased ${gudlakExtraBold.className}`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
