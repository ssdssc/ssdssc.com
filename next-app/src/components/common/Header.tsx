"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "INTER SCHOOL AWARDS", href: "/esper/inter" },
    { label: "INTRA SCHOOL AWARDS", href: "/esper/intra" },
    { label: "OPEN AWARDS", href: "/esper/open" },
  ];

  const hasBackground = isScrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
        hasBackground
          ? "bg-[#040404]/85 backdrop-blur-[12px] border-b border-[#ffd57e]/15 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent backdrop-blur-none border-b border-transparent shadow-none"
      }`}
    >
      <div className="max-w-[1320px] w-full mx-auto px-6 md:px-8 py-3.5 flex items-center justify-between box-border">
        {/* Brand Logo */}
        <Link
          href="/esper"
          className="inline-flex items-center no-underline transition-opacity duration-200 hover:opacity-85"
          title="ESPER '26 Home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/esper/images/nskh2pvc8h3ex4zhjyptc6eau.png"
            alt="ESPER Awards"
            className="h-[38px] w-auto max-w-[180px] object-contain block"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-['Nebula',sans-serif] text-[13px] tracking-[0.08em] uppercase transition-all duration-200 py-1.5 relative whitespace-nowrap ${
                  isActive
                    ? "text-[#ffd57e] drop-shadow-[0_0_14px_rgba(255,213,126,0.5)]"
                    : "text-white/75 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ffd57e]/20 via-[#ffd57e] to-[#ffd57e]/20 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 p-1.5 gap-1.5 bg-transparent border-0 cursor-pointer z-50"
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`block w-6 h-[2px] bg-[#ffd57e] rounded-sm transition-transform duration-250 ease-in-out ${
              mobileMenuOpen ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#ffd57e] rounded-sm transition-transform duration-250 ease-in-out ${
              mobileMenuOpen ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-[#080808]/98 backdrop-blur-[24px] border-t border-[#ffd57e]/12 border-b border-[#ffd57e]/25 flex flex-col px-6 py-5 gap-3.5 box-border">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-['Nebula',sans-serif] text-[13px] tracking-[0.1em] uppercase py-2.5 border-b border-white/[0.06] transition-colors duration-200 ${
                  isActive ? "text-[#ffd57e]" : "text-white/80 hover:text-[#ffd57e]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
