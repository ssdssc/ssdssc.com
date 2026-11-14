"use client";

import { motion } from "framer-motion";

export default function VenueSection() {
  return (
    <section className="w-full max-w-[1160px] mx-auto px-4 py-16 md:py-24 box-border relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14 lg:gap-16">
        {/* Content - Center aligned text matching Framer design */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 360, damping: 60, mass: 0.5 }}
          className="flex-1 flex flex-col items-center text-center gap-6"
        >
          <h2 className="font-['Constantine',serif] text-3xl sm:text-4xl md:text-5xl lg:text-[50px] text-white tracking-[0.02em] font-normal leading-[1.18] uppercase">
            <span>IT EMBARKED AT</span>
            <br />
            <span>MONARCH IMPERIAL</span>
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base md:text-lg text-white/60 leading-relaxed max-w-md">
            Carrying pride with elegance &mdash; embarking
            <br className="hidden sm:inline" />
            {" "}in true Senanayakian colours.
          </p>
        </motion.div>

        {/* Venue Poster Card - Full tall poster matching Framer design */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 360, damping: 60, mass: 0.5, delay: 0.15 }}
          className="w-full max-w-[360px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[490px] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/esper/images/1oyuc5saklw3j5zga7udk3wnzai.png"
            alt="Monarch Imperial Venue - Esper '26"
            className="w-full h-auto object-cover block"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
