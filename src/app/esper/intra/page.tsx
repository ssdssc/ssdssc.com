import SubpageLayout from "@/components/esper/SubpageLayout";

export const metadata = {
  title: "Intra School Awards - ESPER '27",
  description: "Celebrating scientific curiosity, invention, and creative talent within D.S. Senanayake College.",
};

const intraAwards = [
  {
    title: "Best Young Inventor",
    category: "Intra School Award",
    image: "/esper/images/Daedalus.png",
    registerUrl: "/esper/intra/register",
  },
  {
    title: "Best Article Writer",
    category: "Intra School Award",
    image: "/esper/images/Eureka.png",
    registerUrl: "/esper/intra/register",
  },
];

export default function IntraSchoolAwardsPage() {
  return (
    <SubpageLayout
      eyebrow="ESPER '27 CATEGORY"
      title="Intra School Awards"
      description="Celebrating scientific curiosity, invention, and creative talent within D.S. Senanayake College."
      registerUrl="/esper/intra/register"
      rulesPdfUrl="/esper/Esper_Intra_School_Awards_Rules.pdf"
      awards={intraAwards}
    />
  );
}
