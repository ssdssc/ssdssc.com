import EsperRegisterForm from "@/components/esper/EsperRegisterForm";

export const metadata = {
  title: "Register for Inter School Awards - ESPER '26",
  description: "Official registration portal for Inter School Awards at ESPER '26.",
};

export default function InterSchoolRegisterPage() {
  return (
    <EsperRegisterForm
      type="inter"
      title="Inter School Awards Registration"
      description="This form is strictly for official Science Union / Society representatives submitting on behalf of their school."
      rulesPdfUrl="/esper/Esper_Inter_School_Awards_Rules.pdf"
    />
  );
}
