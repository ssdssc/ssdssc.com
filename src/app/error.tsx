"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Standardized safe client reporting
    console.error("Application error boundary caught:", error.message);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#070707] text-white flex flex-col items-center justify-center px-6 text-center">
      <span className="font-['Nebula',sans-serif] text-xs md:text-sm tracking-[0.25em] text-[#ffd57e] uppercase font-bold mb-3">
        Unexpected Anomaly
      </span>
      <h1 className="font-['Constantine',serif] text-3xl sm:text-4xl md:text-5xl text-white font-normal mb-4">
        Something Went Wrong
      </h1>
      <p className="font-['Plus_Jakarta_Sans',sans-serif] text-base md:text-lg text-white/70 max-w-md mb-8">
        We encountered a momentary disturbance while rendering this page.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          type="button"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#ffd57e] to-[#e5a83b] text-black font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,213,126,0.4)] cursor-pointer border-0"
        >
          Try Again
        </button>
        <Link
          href="/esper"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white/10 no-underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
