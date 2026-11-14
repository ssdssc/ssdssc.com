"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function DeranaSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="w-full max-w-[1160px] mx-auto px-4 py-16 md:py-24 box-border relative z-10 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 360, damping: 60, mass: 0.5 }}
        className="flex flex-col items-center text-center gap-3 mb-8"
      >
        <span className="font-['Nebula',sans-serif] text-[12px] tracking-[0.22em] uppercase text-[#ffd57e]">
          BROADCAST FEATURE
        </span>
        <h2 className="font-['Constantine',serif] text-3xl sm:text-4xl md:text-5xl text-white tracking-[0.02em] font-normal">
          Esper &apos;26 featured at Ada Derana 24
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-base md:text-lg text-white/75 max-w-2xl">
          Watch the special feature highlighting Sri Lanka’s premier school science day celebration.
        </p>
      </motion.div>

      {/* Video Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ type: "spring", stiffness: 360, damping: 60, mass: 0.5, delay: 0.15 }}
        className="relative w-full aspect-video max-w-[1020px] rounded-2xl overflow-hidden border border-[#ffd57e]/20 shadow-[0_12px_40px_rgba(0,0,0,0.8)] bg-black/60 group"
      >
        <video
          ref={videoRef}
          src="/esper/images/u8envoaruzs1o3fwmebitz5gdu.mp4"
          poster="/esper/images/rn7xmdm9kyhctv4im7cq2ylj0.png"
          playsInline
          controls={isPlaying}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover block cursor-pointer"
          onClick={togglePlay}
        />

        {/* Custom Play Button Overlay */}
        {!isPlaying && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] cursor-pointer transition-opacity duration-300"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Play Video"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-b from-[#ffd885] via-[#d49326] to-[#a66e0a] flex items-center justify-center shadow-[0_4px_24px_rgba(212,147,38,0.5)] cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 text-black translate-x-0.5"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
