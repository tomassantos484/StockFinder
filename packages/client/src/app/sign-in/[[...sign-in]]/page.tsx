import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F9FAFB]">
      <div className="text-[#34D399] text-3xl font-montserrat font-bold mt-12 mb-8">
        StockFinder
      </div>
      <SignIn
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-white shadow-lg rounded-lg",
          }
        }}
      />
    </div>
  );
} 