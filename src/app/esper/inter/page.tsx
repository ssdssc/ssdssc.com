import SubpageLayout from "@/components/esper/SubpageLayout";

export const metadata = {
  title: "Inter School Awards - ESPER '26",
  description: "Honouring the finest school science innovators, researchers, and creators across Sri Lanka.",
};

const interAwards = [
  {
    title: "Graphic Designer",
    category: "Inter School Award",
    image: "/esper/images/Aesthetikos.png",
    registerUrl: "/esper/inter/register",
  },
  {
    title: "Best Research Team",
    category: "Inter School Award",
    image: "/esper/images/Agora.png",
    registerUrl: "/esper/inter/register",
  },
  {
    title: "Most Popular Science Union",
    category: "Inter School Award",
    image: "/esper/images/most popular science union.png",
    registerUrl: "/esper/inter/register",
  },
  {
    title: "Best Article Writer",
    category: "Inter School Award",
    image: "/esper/images/Eureka.png",
    registerUrl: "/esper/inter/register",
  },
  {
    title: "EDU Coder",
    category: "Inter School Award",
    image: "/esper/images/Algorithmos.png",
    registerUrl: "/esper/inter/register",
  },
];

export default function InterSchoolAwardsPage() {
  return (
    <SubpageLayout
      eyebrow="ESPER '26 CATEGORY"
      title="Inter School Awards"
      description="Honouring the finest school science innovators, researchers, and creators across Sri Lanka."
      registerUrl="/esper/inter/register"
      rulesPdfUrl="/esper/Esper_Inter_School_Awards_Rules.pdf"
      awards={interAwards}
    />
  );
}
