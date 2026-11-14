import EsperRegisterForm from "@/components/esper/EsperRegisterForm";

export const metadata = {
  title: "Register for Open Awards - ESPER '27",
  description: "Official registration portal for Open Awards at ESPER '27.",
};

export default function OpenRegisterPage() {
  return (
    <EsperRegisterForm
      type="open"
      title="Open Awards Registration"
      description="Open category for all passionate researchers, wildlife photographers, builders, and short film creators across Sri Lanka."
      rulesPdfUrl="/esper/Esper_Open_Awards_Rules.pdf"
    />
  );
}
