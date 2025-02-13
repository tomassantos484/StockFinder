'use client';

import { AuthButton } from "@/components/AuthButton";
import { NavLink } from "@/components/NavLink";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-[#F9FAFB]/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-[#34D399] text-xl font-montserrat font-bold">
          StockFinder
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