import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ESPER '27 - Sri Lanka's Premier Science Day & Awards Ceremony",
  description: "The Pinnacle of School Science Excellence organized by the Science Society of D.S. Senanayake College.",
  icons: {
    icon: [
      {
        url: "/esper/images/oegcbbhl1oso0nuozgcpgfshaus.png",
        type: "image/png",
      },
    ],
    apple: "/esper/images/gr0xzpumsqje6dkwbefsvlezx0.png",
    shortcut: "/esper/images/oegcbbhl1oso0nuozgcpgfshaus.png",
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
