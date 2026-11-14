"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });

  useEffect(() => {
    // Target date for Esper 27 or future reveal
    const targetDate = new Date("2027-03-17T09:00:00+05:30").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const counterBlocks = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ];

  return (
    <section id="esper27-coming-soon" className="w-full max-w-[1160px] mx-auto px-4 py-16 md:py-24 box-border relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left Column: Heading & Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 360, damping: 60, mass: 0.5 }}
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4"
        >
          <span className="font-['Constantine',serif] text-xl md:text-2xl tracking-[0.14em] uppercase text-[#ffd57e] drop-shadow-[0_0_16px_rgba(255,213,126,0.3)]">
            THE SAGA CONTINUES
          </span>
          <h2 className="font-['Nebula',sans-serif] text-4xl sm:text-5xl md:text-6xl text-white tracking-[0.08em] uppercase leading-tight">
            COMING SOON
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-base md:text-lg text-white/75 max-w-md">
            Prepare for the next chapter of school science excellence.
          </p>

          {/* Countdown Grid */}
          <div className="grid grid-cols-4 gap-3 md:gap-4 mt-4 w-full max-w-[420px]">
            {counterBlocks.map((block) => (
              <motion.div
                key={block.label}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-3 md:p-4 rounded-xl bg-[#141414]/90 border border-[#ffd57e]/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-colors hover:border-[#ffd57e]/50"
              >
                <span className="font-['Nebula',sans-serif] text-2xl sm:text-3xl md:text-4xl text-[#ffd57e] leading-none mb-1">
                  {block.value}
                </span>
                <span className="font-['Nebula',sans-serif] text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-white/65">
                  {block.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Poster Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 360, damping: 60, mass: 0.5, delay: 0.15 }}
          className="w-full max-w-[340px] md:max-w-[420px] rounded-2xl overflow-hidden border border-[#ffd57e]/25 shadow-[0_12px_40px_rgba(255,213,126,0.1)] bg-black/40"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/esper/Esper coming soon.png"
            alt="Esper '27 Coming Soon"
            className="w-full h-auto object-cover block"
          />
        </motion.div>
      </div>
    </section>
  );
}
