"use client";

import { motion } from "framer-motion";

export default function VenueSection() {
  return (
    <section className="w-full max-w-[1160px] mx-auto px-4 py-16 md:py-24 box-border relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 360, damping: 60, mass: 0.5 }}
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4"
        >
          <h2 className="font-['Constantine',serif] text-3xl sm:text-4xl md:text-5xl text-white tracking-[0.02em] font-normal leading-tight">
            It Embarked At Monarch Imperial
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-base md:text-lg text-white/75 leading-relaxed max-w-lg">
            Carrying pride with elegance &mdash; embarking in true Senanayakian colours.
          </p>
        </motion.div>

        {/* Venue Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 360, damping: 60, mass: 0.5, delay: 0.15 }}
          className="w-full max-w-[460px] h-[300px] sm:h-[380px] rounded-[20px] relative overflow-hidden border border-[#ffd57e]/25 shadow-[0_12px_40px_rgba(0,0,0,0.6)] bg-[#0d0d0d]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/esper/images/1oyuc5saklw3j5zga7udk3wnzai.png"
            alt="Monarch Imperial Venue"
            className="w-full h-full object-cover object-center block"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
