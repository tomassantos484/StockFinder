import Image from "next/image";
import { Button } from "@/components/Button";
import { NavLink } from "@/components/NavLink";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Navigation - sticky header */}
      <nav className="sticky top-0 z-50 bg-[#F9FAFB]/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-[#34D399] text-xl font-montserrat font-bold">
            StockFinder
          </div>
          <div className="flex items-center gap-8 font-montserrat">
            <NavLink href="#why-stockfinder">Why StockFinder?</NavLink>
            <NavLink href="#features">Key Features</NavLink>
            <NavLink href="#demo">Demo</NavLink>
            <Button href="#try-now" className="px-4 py-2">
              Try StockFinder Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="try-now" className="container mx-auto px-6 py-24">
        <div className="flex items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-6xl font-montserrat font-bold text-[#111827] mb-6">
              Find What You Need, When You Need It – Instantly.
            </h1>
            <p className="text-xl text-[#1F2937] mb-8 font-montserrat">
              StockFinder helps you locate real-time product availability from local stores, saving you time and frustration.
            </p>
            <Button className="px-8 py-4 text-lg">
              Try StockFinder Now
            </Button>
          </div>
          
          <div className="relative w-[600px] transform transition-transform hover:scale-105 duration-500">
            <Image 
              src="/laptop_real_trans.png"
              alt="StockFinder App Preview"
              width={600}
              height={371}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Problem & Solution (Why StockFinder?) Section */}
      <section id="why-stockfinder" className="container mx-auto px-6 py-20 scroll-mt-20">
        <h2 className="text-4xl font-montserrat font-bold text-[#111827] mb-8">
          Why StockFinder?
        </h2>
        <div className="text-[#1F2937]">
          Coming soon..
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="container mx-auto px-6 py-20 scroll-mt-20">
        <h2 className="text-4xl font-montserrat font-bold text-[#111827] mb-8">
          Key Features
        </h2>
        <div className="text-[#1F2937]">
          Coming soon..
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="container mx-auto px-6 py-20 scroll-mt-20 text-center">
        <h2 className="text-4xl font-montserrat font-bold text-[#111827] mb-8">
          See StockFinder In Action:
        </h2>
        <div className="max-w-4xl mx-auto bg-black aspect-video rounded-lg">
          {/* Video placeholder */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white">Video Demo Coming Soon</div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-montserrat font-bold text-[#111827] mb-4">
          Stop Searching. Start Finding with StockFinder.
        </h2>
        <p className="text-[#1F2937] mb-8">
          Your go-to app for finding what&apos;s in stock—when you need it most.
        </p>
        <Button className="px-8 py-3">
          Try StockFinder Now
        </Button>
      </section>

      {/* Footer - Updated with GitHub icon */}
      <footer className="bg-[#065F46] text-[#F9FAFB] py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4">
            <p className="font-montserrat">
              Built at DeveloperWeek 2025 Hackathon
            </p>
            <a 
              href="https://github.com/tomassantos484/developer-week2025-hack" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#F9FAFB] hover:text-[#34D399] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
