import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F9FAFB]">
      <div className="text-[#34D399] text-3xl font-montserrat font-bold mt-12 mb-8">
        <Link href="/">
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
      <SignIn
        afterSignInUrl="/dashboard"
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