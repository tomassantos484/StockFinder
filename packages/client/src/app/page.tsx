import Image from "next/image";
import { AuthButton } from "@/components/AuthButton";
import Navigation from "@/components/Navigation";
import YouTubeVideo from '@/components/YouTubeVideo';
import { FadeIn } from "@/components/FadeIn";

export default function LandingPage() {
  return (
    <>
      <Navigation />
      {/* Hero Section */}
      <section id="try-now" className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-[#111827] mb-6">
              Find What You Need, When You Need It - Instantly.
            </h1>
            <p className="text-lg md:text-xl text-[#1F2937] mb-8 font-montserrat">
              StockFinder helps you locate real-time product availability from local stores, saving you time and frustration.
            </p>
            <AuthButton className="w-full md:w-auto px-8 py-4 text-lg">
              Try StockFinder Now
            </AuthButton>
          </div>
          
          <FadeIn delay={500} className="relative w-full md:w-[600px]">
            <div className="transform transition-transform hover:scale-105 duration-500">
              <Image 
                src="/StockFinder_laptop_cropped.png"
                alt="StockFinder App Preview"
                width={600}
                height={371}
                priority
                className="w-full h-auto"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section id="why-stockfinder" className="container mx-auto px-6 py-20 scroll-mt-20">
        <h2 className="text-4xl font-montserrat font-bold text-[#111827] mb-12">
          Why StockFinder?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={200}>
            {/* Problem Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-montserrat font-bold text-[#111827] mb-4">
                The Problem
              </h3>
              <p className="text-[#1F2937] text-lg">
                Checking store websites for product availability can be tedious and time-consuming. You often have to navigate through multiple pages and manually check each store's inventory.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            {/* Solution Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-montserrat font-bold text-[#111827] mb-4">
                The Solution
              </h3>
              <p className="text-[#1F2937] text-lg">
                StockFinder quickly searches store inventory systems and shows you exactly which nearby locations have your item in stock, complete with store locations and even the exact aisle numbers.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={600} className="md:col-span-2">
            {/* Benefits List */}
            <div className="bg-[#F0FDF4] rounded-lg p-8 mt-8">
              <h3 className="text-2xl font-montserrat font-bold text-[#111827] mb-6">
                Benefits
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Instantly check store inventory by product name',
                  'See exact in-store locations with aisle numbers',
                  'Search any store by ZIP code',
                  'Get detailed store information and addresses',
                  'Save time by checking availability before leaving home'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#1F2937]">
                    <svg className="w-5 h-5 text-[#34D399]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="container mx-auto px-6 py-20 pb-32 scroll-mt-20">
        <h2 className="text-4xl font-montserrat font-bold text-[#111827] mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={200}>
            {/* Real-Time Search */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="w-12 h-12 bg-[#F0FDF4] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#34D399]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-[#111827] mb-4">
                Quick Search
              </h3>
              <p className="text-[#1F2937]">
                Simply enter a product name and ZIP code to instantly check store inventory in your area.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            {/* Location Details */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="w-12 h-12 bg-[#F0FDF4] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#34D399]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-[#111827] mb-4">
                Precise Locations
              </h3>
              <p className="text-[#1F2937]">
                Get exact store addresses and in-store aisle locations for your products.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={600}>
            {/* Store Availability */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="w-12 h-12 bg-[#F0FDF4] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#34D399]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-[#111827] mb-4">
                Stock Status
              </h3>
              <p className="text-[#1F2937]">
                See real-time inventory status at stores near you, with clear in-stock indicators.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="container mx-auto px-6 py-20 scroll-mt-20">
        <h2 className="text-4xl font-montserrat font-bold text-[#111827] mb-8">
          See StockFinder In Action
        </h2>
        <div className="max-w-4xl mx-auto bg-black aspect-video rounded-lg overflow-hidden">
          <YouTubeVideo />
        </div>
      </section>

      {/* Final CTA Section */}
      <FadeIn>
        <section className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-montserrat font-bold text-[#111827] mb-4">
            Stop Searching. Start Finding with StockFinder.
          </h2>
          <p className="text-[#1F2937] mb-8">
            Your go-to app for finding what&apos;s in stock—when you need it most.
          </p>
          <AuthButton className="px-8 py-3">
            Try StockFinder Now
          </AuthButton>
        </section>
      </FadeIn>

      {/* Footer */}
      <footer className="bg-[#065F46] text-[#F9FAFB] py-8">
        <div className="container mx-auto px-6 text-center flex flex-col gap-4">
          <div className="flex items-center justify-center gap-4">
            <p className="font-montserrat">
              Built at{" "}
              <a 
                href="https://www.developerweek.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#34D399] hover:text-[#F9FAFB] transition-colors underline"
              >
                DeveloperWeek 2025
              </a>
              {" "}Hackathon
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
          <div className="text-sm text-[#F9FAFB]/80 font-montserrat">
            © {new Date().getFullYear()} StockFinder. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
