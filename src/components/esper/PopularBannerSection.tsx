"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PopularBannerSection() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 pt-2 md:pt-4 pb-12 md:pb-16 relative z-10 box-border">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 360, damping: 60, mass: 0.5 }}
        className="w-full relative group"
      >
        {/* Clickable Banner Container */}
        <Link
          href="/esper/inter/register?category=popular-union"
          className="relative block w-full rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black transition-all duration-500 ease-out transform-gpu group-hover:-translate-y-1 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          aria-label="Register for Most Popular Science Union of the Year"
        >
          {/* Banner Image */}
          <div className="relative w-full aspect-[1600/500] min-h-[110px] sm:min-h-[160px] bg-black">
            <Image
              src="/esper/banner.png"
              alt="Most Popular Science Union Registrations Are Now Open - Click Here to Register"
              width={1600}
              height={500}
              priority={false}
              className="w-full h-full object-cover object-center block select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </div>

          {/* Shining Beam Animation Sweep Overlay */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px] sm:rounded-[40px]"
            aria-hidden="true"
          >
            <div
              className="absolute -inset-y-16 -left-[30%] w-[24%] mix-blend-screen animate-banner-shine transform-gpu"
              style={{
                background:
                  "linear-gradient(105deg, transparent 10%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.7) 46%, rgba(255,213,126,0.95) 50%, rgba(255,255,255,0.7) 54%, rgba(255,255,255,0.05) 75%, transparent 90%)",
              }}
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
