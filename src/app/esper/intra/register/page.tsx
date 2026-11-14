import EsperRegisterForm from "@/components/esper/EsperRegisterForm";

export const metadata = {
  title: "Register for Intra School Awards - ESPER '27",
  description: "Official registration portal for Intra School Awards at ESPER '27.",
};

export default function IntraSchoolRegisterPage() {
  return (
    <EsperRegisterForm
      type="intra"
      title="Intra School Awards Registration"
      description="Exclusively for students of D.S. Senanayake College participating in the Intra-School science competitions."
      rulesPdfUrl="/esper/Esper_Intra_School_Awards_Rules.pdf"
    />
  );
}
