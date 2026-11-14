import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ESPER '26 - Sri Lanka's Premier Science Day & Awards Ceremony",
  description: "The Pinnacle of School Science Excellence organized by the Science Society of D.S. Senanayake College.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
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
        {children}
      </body>
    </html>
  );
}
