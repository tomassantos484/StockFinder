import { currentUser } from "@clerk/nextjs/server";
import DashboardNav from "@/components/DashboardNav";

export default async function DashboardPage() {
  const user = await currentUser();
  const firstName = user?.firstName || 'there';

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <DashboardNav />
      
      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-montserrat font-bold text-[#111827] mb-8">
          Welcome to StockFinder, {firstName}!
        </h1>
        
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-montserrat font-semibold text-[#111827] mb-4">
            Search for Products
          </h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter product name..."
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#34D399] text-gray-900 placeholder:text-gray-500"
            />
            <input
              type="text"
              placeholder="Enter ZIP code"
              className="w-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#34D399] text-gray-900 placeholder:text-gray-500"
            />
            <button className="bg-[#34D399] text-white px-6 py-2 rounded-md hover:bg-[#2EB37A] transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Results Section (placeholder) */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-montserrat font-semibold text-[#111827] mb-4">
            Search Results
          </h2>
          <p className="text-gray-500">
            Enter a product name and ZIP code to search for availability.
          </p>
        </div>
      </main>
    </div>
  );
} 