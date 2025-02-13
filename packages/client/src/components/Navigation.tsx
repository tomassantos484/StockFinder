'use client';

import { AuthButton } from "@/components/AuthButton";
import { NavLink } from "@/components/NavLink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (pathname === '/') {
      // If we're already on home page, smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If we're on another page, navigate to home
      router.push('/');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#F9FAFB]/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-[#34D399] text-xl font-montserrat font-bold">
          <Link href="/" onClick={handleLogoClick}>
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
        <div className="flex items-center gap-8 font-montserrat">
          <NavLink href="#why-stockfinder">Why StockFinder?</NavLink>
          <NavLink href="#features">Key Features</NavLink>
          <NavLink href="#demo">Demo</NavLink>
          <AuthButton className="px-4 py-2">
            Try StockFinder Now
          </AuthButton>
        </div>
      </div>
    </nav>
  );
} 