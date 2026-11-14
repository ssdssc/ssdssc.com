"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export interface AwardItem {
  title: string;
  category: string;
  image: string;
  registerUrl: string;
}

interface SubpageLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  registerUrl: string;
  rulesPdfUrl?: string;
  awards: AwardItem[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 360,
      damping: 60,
      mass: 0.5,
    },
  },
};

export default function SubpageLayout({
  eyebrow,
  title,
  description,
  registerUrl,
  rulesPdfUrl,
  awards,
}: SubpageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#070707] text-white flex flex-col selection:bg-[#ffd57e]/30 selection:text-[#ffd57e]">
      {/* Subheader Banner: Video Background + Navigation Only */}
      <section className="relative w-full overflow-hidden bg-[#070707] min-h-[280px] md:min-h-[380px] flex flex-col justify-start">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/esper/images/subheader-poster.png"
            className="w-full h-full object-cover object-center"
          >
            <source src="/esper/subheader-vid.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/50 via-[#070707]/20 to-[#070707]" />
        </div>

        {/* Navigation */}
        <Header />
      </section>

      {/* Texts Below Subheader & Above Cards */}
      <section className="w-full max-w-[1160px] mx-auto px-6 pt-8 md:pt-12 pb-6 md:pb-10 flex flex-col items-center text-center gap-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 360, damping: 60, mass: 0.5, delay: 0.1 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <span className="font-['Nebula',sans-serif] text-[12px] md:text-[13px] tracking-[0.22em] uppercase text-[#ffd57e]">
            {eyebrow}
          </span>
          <h1 className="font-['Constantine',serif] text-4xl sm:text-5xl md:text-6xl text-white tracking-[0.02em] font-normal m-0 leading-tight">
            {title}
          </h1>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={registerUrl}
                className="inline-flex items-center justify-center font-['Nebula',sans-serif] text-[13px] tracking-[0.08em] uppercase text-black font-semibold px-8 py-3.5 rounded-full bg-gradient-to-b from-[#ffd885] via-[#d49326] to-[#a66e0a] shadow-[inset_0px_1px_5px_rgba(0,0,0,0.25),0_4px_16px_rgba(212,147,38,0.4)] hover:brightness-110 transition-all duration-200"
              >
                Register Now
              </Link>
            </motion.div>

            {rulesPdfUrl && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <a
                  href={rulesPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-['Nebula',sans-serif] text-[13px] tracking-[0.08em] uppercase text-white/90 font-medium px-6 py-3.5 rounded-full border border-[#ffd57e]/40 bg-black/40 backdrop-blur-sm hover:bg-[#ffd57e]/10 hover:border-[#ffd57e] transition-all duration-200"
                >
                  RULES & GUIDELINES
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Awards Grid Section */}
      <section className="w-full max-w-[1240px] mx-auto px-6 pt-4 pb-16 md:pb-24 box-border relative z-10 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {awards.map((award, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Link
                href={award.registerUrl}
                className="group flex flex-col w-full no-underline text-inherit cursor-pointer transition-transform duration-300 hover:-translate-y-2 block"
              >
                <div className="w-full aspect-[4/5] rounded-[20px] relative overflow-hidden bg-[#0d0d0d] border border-[#ffd57e]/22 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-350 group-hover:border-[#ffd57e]/60 group-hover:shadow-[0_12px_40px_rgba(255,213,126,0.2)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover object-center block"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-transparent via-[#ffd57e]/15 to-transparent" />
                </div>

                <div className="mt-3 text-center flex flex-col items-center">
                  <h3 className="font-['Constantine',serif] text-[19px] text-white font-semibold leading-snug tracking-[0.02em] group-hover:text-[#ffd57e] transition-colors">
                    {award.title}
                  </h3>
                  <p className="font-['Nebula',sans-serif] text-[11px] text-[#ffd57e] tracking-[0.1em] uppercase mt-0.5">
                    {award.category}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 360, damping: 60, mass: 0.5 }}
          className="w-full max-w-[900px] mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0a0a0a] border border-[#ffd57e]/25 text-center flex flex-col items-center gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
        >
          <span className="font-['Nebula',sans-serif] text-[12px] tracking-[0.2em] uppercase text-[#ffd57e]">
            REGISTRATION PORTAL
          </span>
          <h2 className="font-['Constantine',serif] text-3xl md:text-4xl text-white font-normal">
            Ready to Nominate?
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-white/70 max-w-lg">
            Submit your entry through our registration portal before the deadline.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={registerUrl}
              className="inline-flex items-center justify-center font-['Nebula',sans-serif] text-[13px] tracking-[0.08em] uppercase text-black font-semibold px-8 py-3.5 rounded-full bg-gradient-to-b from-[#ffd885] via-[#d49326] to-[#a66e0a] shadow-[inset_0px_1px_5px_rgba(0,0,0,0.25),0_4px_16px_rgba(212,147,38,0.4)] hover:brightness-110 transition-all duration-200 mt-2"
            >
              Register Now
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
