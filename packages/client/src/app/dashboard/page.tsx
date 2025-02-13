import { currentUser } from "@clerk/nextjs/server";
import DashboardNav from "@/components/DashboardNav";
import SearchProducts from "@/components/SearchProducts";

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
        
        <SearchProducts />
      </main>
    </div>
  );
} 