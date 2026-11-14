"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackgroundMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;
    audio.loop = true;

    // Check if user previously set music preference in this session
    const savedState = sessionStorage.getItem("esper_bg_music");

    const tryPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        sessionStorage.setItem("esper_bg_music", "playing");
      } catch {
        // Autoplay policy prevented automatic playback
        setIsPlaying(false);
      }
    };

    if (savedState === "playing") {
      tryPlay();
    } else if (savedState === "muted") {
      setIsPlaying(false);
    } else {
      // First visit: try autoplay
      tryPlay();
    }

    // Unlock audio on first user interaction if browser blocked initial autoplay
    const unlockOnInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        const currentState = sessionStorage.getItem("esper_bg_music");
        if (currentState !== "muted" && audio.paused) {
          audio
            .play()
            .then(() => {
              setIsPlaying(true);
              sessionStorage.setItem("esper_bg_music", "playing");
            })
            .catch(() => {});
        }
      }
      window.removeEventListener("pointerdown", unlockOnInteraction);
      window.removeEventListener("keydown", unlockOnInteraction);
    };

    window.addEventListener("pointerdown", unlockOnInteraction, { once: true });
    window.addEventListener("keydown", unlockOnInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlockOnInteraction);
      window.removeEventListener("keydown", unlockOnInteraction);
    };
  }, [hasInteracted]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      sessionStorage.setItem("esper_bg_music", "muted");
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          sessionStorage.setItem("esper_bg_music", "playing");
        })
        .catch((e) => console.log("Audio playback failed:", e));
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center pointer-events-auto select-none">
      {/* Hidden persistent audio element */}
      <audio
        ref={audioRef}
        src="/esper/bg-music.mp3"
        preload="auto"
      />

      {/* Floating Mute/Unmute Button */}
      <motion.button
        type="button"
        onClick={toggleMusic}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        title={isPlaying ? "Mute Background Music" : "Play Background Music"}
        aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
        className={`group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border transition-all duration-300 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.7)] cursor-pointer ${
          isPlaying
            ? "bg-[#0d0d0d]/90 border-[#ffd57e] shadow-[0_0_24px_rgba(255,213,126,0.35)]"
            : "bg-[#0d0d0d]/80 border-white/20 hover:border-[#ffd57e]/60"
        }`}
      >
        {/* Subtle breathing glow ring when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-25 bg-[#ffd57e] pointer-events-none" />
        )}

        {/* Dynamic Icon */}
        <AnimatePresence mode="wait" initial={false}>
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center text-[#ffd57e]"
            >
              {/* Speaker with Soundwaves */}
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center text-white/60 group-hover:text-white"
            >
              {/* Muted Speaker with Slash */}
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
