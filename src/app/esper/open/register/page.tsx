import EsperRegisterForm from "@/components/esper/EsperRegisterForm";

export const metadata = {
  title: "Register for Open Awards - ESPER '27",
  description: "Official registration portal for Open Awards at ESPER '27.",
};

export default function OpenRegisterPage() {
  return (
    <EsperRegisterForm
      type="open"
      title="Open Awards"
      description="Registration for the ESPER Open Awards competition categories."
      rulesPdfUrl="/esper/Esper_Open_Awards_Rules.pdf"
    />
  );
}
