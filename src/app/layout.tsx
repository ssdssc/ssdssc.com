import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/common/SmoothScroll";

export const metadata: Metadata = {
  title: "ESPER Awards '27 - Sri Lanka's Premier Science Day",
  description: "The Pinnacle of School Science Excellence organized by the Science Society of D.S. Senanayake College.",
  icons: {
    icon: [
      {
        url: "/esper/favicon_esper.png",
        type: "image/png",
      },
    ],
    apple: "/esper/favicon_esper.png",
    shortcut: "/esper/favicon_esper.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-[#070707] text-white">
      <body className="min-h-full flex flex-col bg-[#070707] text-white antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
