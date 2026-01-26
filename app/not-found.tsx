"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[rgb(12,25,65)]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-white/70 mb-6">Redirecting to home...</p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
      </div>
    </div>
  );
}
