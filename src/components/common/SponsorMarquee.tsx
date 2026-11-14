"use client";

interface Sponsor {
  name: string;
  src: string;
  height: number;
}

const sponsors: Sponsor[] = [
  { name: "Derana 24", src: "/esper/images/twwqyxotlhdxabp7dwhjedkyhae.png", height: 32 },
  { name: "TV Derana", src: "/esper/images/b0gribr06czgnoidqqwzynyz2vc.png", height: 32 },
  { name: "Ada Derana", src: "/esper/images/4zpxpjv88gcfrhqebf2a5hxevw.png", height: 34 },
  { name: "FM Derana", src: "/esper/images/gvt2qwmuoxufwi7sozmrjjnxum.png", height: 30 },
  { name: "Equus", src: "/esper/images/mcxktlhkvhjojix8gkulbg6fmbk.png", height: 32 },
  { name: "Sirasa TV", src: "/esper/images/mdpsq2xil2s5agl02n5lk2em.png", height: 32 },
  { name: "Helakuru", src: "/esper/images/gtmjsu8rsz7nqupbgqvlwlefw.webp", height: 28 },
  { name: "Digitized.lk", src: "/esper/images/spigwnekuaj8rvgfpdanj0y0.png", height: 38 },
  { name: "IEEE Sri Lanka Section", src: "/esper/images/nvzenooymu1olttjngo499jcbnw.png", height: 32 },
  { name: "Events Avenue", src: "/esper/images/5dvidyczitj8ceqx69gnqzwki4.png", height: 42 },
  { name: "SLT Mobitel", src: "/esper/images/1axaeepaiboo6au7fywunhesdak.png", height: 36 },
  { name: "Janindu Leelananda", src: "/esper/images/jjgqmnck9dnrlm4aktoerjvkp9a.png", height: 34 },
  { name: "ESOFT", src: "/esper/images/rn7xmdm9kyhctv4im7cq2ylj0.png", height: 30 },
];

export default function SponsorMarquee() {
  // Duplicate for seamless infinite marquee loop
  const marqueeList = [...sponsors, ...sponsors];

  return (
    <div className="w-full max-w-[1440px] mx-auto py-3 z-10 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent_0%,black_18%,black_82%,transparent_100%)]">
      {/* Deep black fader overlays on sides */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 sm:w-44 md:w-64 lg:w-80 bg-gradient-to-r from-[#070707] via-[#070707]/90 to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 sm:w-44 md:w-64 lg:w-80 bg-gradient-to-l from-[#070707] via-[#070707]/90 to-transparent z-20" />

      {/* Infinite sliding track - generously spaced so no logo is ever seen twice in the same view */}
      <div className="animate-sponsors-scroll flex items-center gap-20 sm:gap-28 md:gap-36 lg:gap-40 pl-10">
        {marqueeList.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity duration-200"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.name}
              style={{ height: `${item.height}px` }}
              className="w-auto max-w-[180px] object-contain block"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
