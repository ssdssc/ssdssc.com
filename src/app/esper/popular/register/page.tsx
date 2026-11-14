import EsperRegisterForm from "@/components/esper/EsperRegisterForm";

export const metadata = {
  title: "Register for Popular Awards - ESPER '27",
  description: "Official registration portal for Most Popular Awards at ESPER '27.",
};

export default function PopularRegisterPage() {
  return (
    <EsperRegisterForm
      type="popular"
      title="Popular Awards"
      description="This form is strictly for official Science Union / Science Society representatives submitting on behalf of their school."
    />
  );
}
