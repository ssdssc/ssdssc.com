import Link from "next/link";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#070707] py-8 px-6 md:px-12 mt-auto">
      <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-sm text-white/70">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5">
          <span>Created by</span>
          <span className="text-white font-medium">Team Ocular</span>
          <span className="text-white/40 mx-1">|</span>
          <span>Re-Designed by</span>
          <a
            href="https://frametoque.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium underline underline-offset-4 hover:text-[#ffd57e] transition-colors"
          >
            Frametoque Digital
          </a>
        </div>

        <div className="text-white/80">
          <p>© {currentYear} SSDSSC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
