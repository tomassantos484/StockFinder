import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import { Providers } from "@/components/Providers";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: "StockFinder",
  description: "Find products in stock at local stores",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="min-h-screen bg-[#F9FAFB]">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
