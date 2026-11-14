import EsperRegisterForm from "@/components/esper/EsperRegisterForm";

export const metadata = {
  title: "Register for Intra School Awards - ESPER '27",
  description: "Official registration portal for Intra School Awards at ESPER '27.",
};

export default function IntraSchoolRegisterPage() {
  return (
    <EsperRegisterForm
      type="intra"
      title="Intra School Awards"
      description="This form is strictly for official Science Union / Science Society representatives submitting on behalf of their school."
      rulesPdfUrl="/esper/Esper_Intra_School_Awards_Rules.pdf"
    />
  );
}
