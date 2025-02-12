'use client';

import { Button } from "./Button";
import { useRouter } from "next/navigation";

export function AuthButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const router = useRouter();

  return (
    <Button 
      className={className}
      onClick={() => router.push('/sign-in')}
    >
      {children}
    </Button>
  );
} 