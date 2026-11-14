import SubpageLayout from "@/components/esper/SubpageLayout";

export const metadata = {
  title: "Open Awards - ESPER '27",
  description: "Recognizing visionaries, filmmakers, photographers, and builders pushing boundaries beyond schools.",
};

const openAwards = [
  {
    title: "Best Short Film",
    category: "Open Category Award",
    image: "/esper/images/Best short film of the year.png",
    registerUrl: "/esper/open/register",
  },
  {
    title: "Wildlife Photographer",
    category: "Open Category Award",
    image: "/esper/images/Opticos.png",
    registerUrl: "/esper/open/register",
  },
  {
    title: "Best Build Team",
    category: "Open Category Award",
    image: "/esper/images/Debunked.png",
    registerUrl: "/esper/open/register",
  },
];

export default function OpenAwardsPage() {
  return (
    <SubpageLayout
      eyebrow="ESPER '27 CATEGORY"
      title="Open Awards"
      description="Recognizing visionaries, filmmakers, photographers, and builders pushing boundaries beyond schools."
      registerUrl="/esper/open/register"
      rulesPdfUrl="/esper/Esper_Open_Awards_Rules.pdf"
      awards={openAwards}
    />
  );
}
