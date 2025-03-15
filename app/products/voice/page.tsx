import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import UseCasesSection from "./components/UseCasesSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";

// Data imports
import { features } from "./data/features";
import { useCases } from "./data/useCases";
import { pricingPlans } from "./data/pricingPlans";

export default function VoicePage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <HeroSection />
      <FeaturesSection features={features} />
      <UseCasesSection useCases={useCases} />
      <PricingSection pricingPlans={pricingPlans} />
      <CTASection />
    </div>
  );
} 