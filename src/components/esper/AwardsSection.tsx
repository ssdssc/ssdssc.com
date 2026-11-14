"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface AwardCard {
  title: string;
  category: string;
  image: string;
  href: string;
}

const awardCards: AwardCard[] = [
  {
    title: "Graphic Designer",
    category: "Inter School Award",
    image: "/esper/images/Aesthetikos.png",
    href: "/esper/inter/register?category=graphic-designer",
  },
  {
    title: "Best Short Film",
    category: "Open Category Award",
    image: "/esper/images/Best short film of the year.png",
    href: "/esper/open/register?category=short-film",
  },
  {
    title: "Scientific Photographer",
    category: "Open Category Award",
    image: "/esper/images/Opticos.png",
    href: "/esper/open/register?category=photographer",
  },
  {
    title: "Best Research Team",
    category: "Inter School Award",
    image: "/esper/images/Agora.png",
    href: "/esper/inter/register?category=research-team",
  },
  {
    title: "Most Popular Science Union",
    category: "Inter School Award",
    image: "/esper/images/most popular science union.png",
    href: "/esper/inter/register?category=popular-union",
  },
  {
    title: "Best Article Writer",
    category: "Inter & Intra Award",
    image: "/esper/images/Eureka.png",
    href: "/esper/inter/register?category=article-writer",
  },
  {
    title: "Best Young Inventor",
    category: "Intra School Award",
    image: "/esper/images/Daedalus.png",
    href: "/esper/intra/register?category=young-inventor",
  },
  {
    title: "EDU Coder",
    category: "Inter School Award",
    image: "/esper/images/Algorithmos.png",
    href: "/esper/inter/register?category=edu-coder",
  },
  {
    title: "Mythbusters Competition",
    category: "Open Category Award",
    image: "/esper/images/Debunked.png",
    href: "/esper/open/register?category=build-team",
  },
];

export default function AwardsSection() {
  // Duplicate array for seamless infinite marquee loop (-50% translation)
  const duplicatedCards = [...awardCards, ...awardCards];

  return (
    <section id="esper-all-awards-section" className="w-full py-16 md:py-24 relative z-10 overflow-hidden box-border">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 360, damping: 60, mass: 0.5 }}
        className="max-w-[1160px] mx-auto px-4 flex flex-col items-center text-center gap-3 mb-10"
      >
        <span className="font-['Nebula',sans-serif] text-[13px] tracking-[0.2em] uppercase text-[#ffd57e]">
          INTER • INTRA • OPEN AWARDS
        </span>
        <h2 className="font-['Constantine',serif] text-3xl sm:text-4xl md:text-5xl text-white tracking-[0.02em] font-normal m-0">
          All Awards
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-base md:text-lg text-white/75 max-w-xl">
          Submit your entry through the official registration portal.
        </p>
      </motion.div>

      {/* Constrained Carousel Container - Prevents touching outer page edges */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 relative">
        {/* Deep Black Fades on Left and Right Sides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 md:w-48 bg-gradient-to-r from-[#070707] via-[#070707]/90 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 md:w-48 bg-gradient-to-l from-[#070707] via-[#070707]/90 to-transparent z-20" />

        {/* Infinite Sliding Marquee Viewport */}
        <div className="w-full overflow-hidden relative py-4 [mask-image:linear-gradient(to_right,transparent_0%,black_16%,black_84%,transparent_100%)]">
          <div className="animate-awards-scroll flex gap-6 w-max">
            {duplicatedCards.map((card, idx) => (
              <Link
                key={idx}
                href={card.href}
                className="group flex flex-col w-[272px] min-w-[272px] flex-shrink-0 no-underline text-inherit cursor-pointer transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Image Card Wrap */}
                <div className="w-[272px] h-[340px] rounded-[20px] relative overflow-hidden bg-[#0d0d0d] border border-[#ffd57e]/22 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-350 group-hover:border-[#ffd57e]/60 group-hover:shadow-[0_12px_40px_rgba(255,213,126,0.22)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center block"
                    loading="lazy"
                  />

                  {/* Golden Shine sweep on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-transparent via-[#ffd57e]/15 to-transparent" />
                </div>

                {/* Title & Category Subtext */}
                <div className="mt-3 text-center flex flex-col items-center">
                  <h3 className="font-['Constantine',serif] text-[20px] text-white font-semibold leading-snug tracking-[0.02em] group-hover:text-[#ffd57e] transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-['Nebula',sans-serif] text-[12px] text-[#ffd57e] tracking-[0.1em] uppercase mt-0.5">
                    {card.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
