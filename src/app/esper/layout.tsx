import type { Metadata } from "next";
import BackgroundMusicPlayer from "@/components/esper/BackgroundMusicPlayer";

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
