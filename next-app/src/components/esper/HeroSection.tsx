"use client";

import Header from "../common/Header";
import SponsorMarquee from "../common/SponsorMarquee";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#070707]">
      {/* Background Hero Video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/esper/images/hero-poster.png"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
        >
          <source src="/esper/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark gradient overlay for high contrast readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* Top Header */}
      <Header />

      {/* Bottom Sponsor Logos */}
      <div className="w-full mt-auto mb-4 z-10">
        <SponsorMarquee />
      </div>
    </section>
  );
}
