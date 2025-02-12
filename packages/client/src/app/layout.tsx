import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import { SignedIn, UserButton } from '@clerk/nextjs';
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
          <div className="absolute top-4 right-4 z-50">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
