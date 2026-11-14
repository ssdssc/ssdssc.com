"use client";

interface Sponsor {
  name: string;
  src: string;
  height: number;
}

const sponsors: Sponsor[] = [
  { name: "Derana 24", src: "/esper/images/twwqyxotlhdxabp7dwhjedkyhae.png", height: 28 },
  { name: "TV Derana", src: "/esper/images/b0gribr06czgnoidqqwzynyz2vc.png", height: 32 },
  { name: "Ada Derana", src: "/esper/images/4zpxpjv88gcfrhqebf2a5hxevw.png", height: 30 },
  { name: "FM Derana", src: "/esper/images/gvt2qwmuoxufwi7sozmrjjnxum.png", height: 26 },
  { name: "Sirasa TV", src: "/esper/images/mcxktlhkvhjojix8gkulbg6fmbk.png", height: 32 },
  { name: "Helakuru", src: "/esper/images/gtmjsu8rsz7nqupbgqvlwlefw.webp", height: 28 },
  { name: "Digitized.lk", src: "/esper/images/spigwnekuaj8rvgfpdanj0y0.png", height: 24 },
  { name: "Events Avenue", src: "/esper/images/5dvidyczitj8ceqx69gnqzwki4.png", height: 28 },
];

export default function SponsorMarquee() {
  return (
    <div className="w-full py-4 z-10 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
      <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap px-4 max-w-[1200px] mx-auto opacity-80 hover:opacity-100 transition-opacity">
        {sponsors.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.name}
              style={{ height: `${item.height}px` }}
              className="w-auto max-w-[120px] object-contain block"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
