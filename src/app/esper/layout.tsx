import type { Metadata } from "next";
import BackgroundMusicPlayer from "@/components/esper/BackgroundMusicPlayer";

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

export default function EsperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <BackgroundMusicPlayer />
    </>
  );
}
