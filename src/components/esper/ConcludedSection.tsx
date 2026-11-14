"use client";

export default function ConcludedSection() {
  const desktopImages = [
    { src: "/esper/images/mrmc96xui4bmvzc2lpwfzmdthy.jpg", colSpan: "col-span-2", rowSpan: "row-span-1" },
    { src: "/esper/images/rubzsp1n7bzqf9jxseilm13qs8a.jpg", colSpan: "col-span-1", rowSpan: "row-span-2" },
    { src: "/esper/images/iftswkgwcdw0klxwn7ekverpvgg.jpg", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: "/esper/images/7y3jhv0zzkuymkmqfmomenskw.jpg", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: "/esper/images/fqm2hf3u20oeqqkdaofwxb1lvcy.jpg", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: "/esper/images/wfhz0ihbb7ickctls3wuleuplze.jpg", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: "/esper/images/9tkwzgqjtzorcp723qzmeyhdguw.jpg", colSpan: "col-span-1", rowSpan: "row-span-1" },
  ];

  const mobileImages = [
    "/esper/images/6vvowzyagly3xozh67iyim4v66a.jpg",
    "/esper/images/islbnlkvjw6i98iu7pt2iqn8dl4.jpg",
    "/esper/images/rubzsp1n7bzqf9jxseilm13qs8a.jpg",
    "/esper/images/7y3jhv0zzkuymkmqfmomenskw.jpg",
  ];

  return (
    <section className="w-full max-w-[1160px] mx-auto px-4 py-16 md:py-24 box-border relative z-10 flex flex-col items-center text-center">
      {/* Title */}
      <div className="flex flex-col items-center gap-2 mb-4">
        <h2 className="font-['Constantine',serif] flex flex-col items-center text-center leading-none">
          <span className="text-4xl sm:text-5xl md:text-6xl text-white tracking-[0.02em]">
            Esper &apos;26
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl text-white/90 tracking-[0.04em] mt-1">
            successfully concluded !
          </span>
        </h2>
      </div>

      {/* Description */}
      <p className="font-['Plus_Jakarta_Sans',sans-serif] text-base md:text-lg text-white/80 max-w-2xl leading-relaxed mb-10">
        <strong>
          The Pinnacle of School Science Excellence &mdash; ESPER Awards &apos;26 &mdash; has been successfully concluded at Monarch Imperial, Colombo, on 17th March 2026.
        </strong>
      </p>

      {/* Bento Gallery - Desktop */}
      <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-2.5 w-full h-[640px] rounded-3xl overflow-hidden bg-black p-2 border border-white/10">
        {desktopImages.map((img, idx) => (
          <div
            key={idx}
            className={`${img.colSpan} ${img.rowSpan} relative rounded-2xl overflow-hidden bg-[#101010] group`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt="Esper '26 Event"
              className="w-full h-full object-cover object-center block transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Bento Gallery - Mobile */}
      <div className="grid md:hidden grid-cols-1 gap-2.5 w-full rounded-2xl overflow-hidden bg-black p-2 border border-white/10">
        {mobileImages.map((src, idx) => (
          <div key={idx} className="relative aspect-video rounded-xl overflow-hidden bg-[#101010]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt="Esper '26 Event"
              className="w-full h-full object-cover object-center block"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* View Album Button - Placed AFTER gallery */}
      <div className="mt-8 md:mt-10">
        <a
          href="https://www.facebook.com/share/p/1Cfd1XF45A/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-['Nebula',sans-serif] text-[13px] tracking-[0.08em] uppercase text-black font-semibold px-6 py-3.5 rounded-full bg-gradient-to-b from-[#ffd885] via-[#d49326] to-[#a66e0a] shadow-[inset_0px_1px_5px_rgba(0,0,0,0.25),0_4px_16px_rgba(212,147,38,0.4)] hover:brightness-110 hover:scale-105 transition-all duration-200"
        >
          Visit Full Album Here
        </a>
      </div>
    </section>
  );
}
