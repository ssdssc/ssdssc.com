import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070707] text-white flex flex-col items-center justify-center px-6 text-center">
      <span className="font-['Nebula',sans-serif] text-xs md:text-sm tracking-[0.25em] text-[#ffd57e] uppercase font-bold mb-3">
        Error 404
      </span>
      <h1 className="font-['Constantine',serif] text-4xl sm:text-5xl md:text-6xl text-white font-normal mb-4">
        Page Not Found
      </h1>
      <p className="font-['Plus_Jakarta_Sans',sans-serif] text-base md:text-lg text-white/70 max-w-md mb-8">
        The celestial coordinate you are looking for does not exist or has been relocated.
      </p>
      <Link
        href="/esper"
        className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#ffd57e] to-[#e5a83b] text-black font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,213,126,0.4)] no-underline"
      >
        Return to ESPER
      </Link>
    </div>
  );
}
