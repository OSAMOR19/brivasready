import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FeaturesSection from "./components/FeaturesSection";
import UseCasesSection from "./components/UseCasesSection";
import IntegrationSection from "./components/IntegrationSection";
import AnalyticsSection from "./components/AnalyticsSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";

// Data
import { steps } from "./data/steps";
import { features } from "./data/features";
import { useCases } from "./data/useCases";
import { pricingPlans } from "./data/pricingPlans";

export default function SmsMoPage() {
  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
    <div className="container mx-auto px-4 py-16 md:px-6">
        <FeaturesSection />
        <UseCasesSection />
        <IntegrationSection />
        <AnalyticsSection />
        <PricingSection />
        <CTASection />
          </div>
        </div>
  );
} 