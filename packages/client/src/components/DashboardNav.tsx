'use client';

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function DashboardNav() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-[#34D399] text-xl font-montserrat font-bold">
            <Link href="/dashboard" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              <Image 
                src="/StockFinder_logo_cropped.png"
                alt="StockFinder"
                width={400}
                height={106}
                priority
                className="h-auto w-[100px]"
              />
            </Link>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
} 