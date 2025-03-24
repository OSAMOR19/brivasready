import Link from "next/link";
import Image from "next/image";
import {
  Rocket,
  TrendingUp,
  DollarSign,
  Users,
  BarChart,
  Zap,
} from "lucide-react";
import background from "@/components/Images/pics/startupbgimage.svg";
import fuel1 from "@/components/Images/pics/fuel1.svg";
import fuel2 from "@/components/Images/pics/fuel2.svg";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import CommunicationTools from "./components/CommunicationTools";
import FeaturesSection from "./components/FeaturesSection";
import UseCasesSection from "./components/UseCasesSection";
import WhyChooseSection from "./components/WhyChooseSection";

export default function StartupSolutionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Communication Tools Section */}
      <CommunicationTools />
      <UseCasesSection />
      {/* Features Section */}
      <FeaturesSection />
      
      <WhyChooseSection />
    </main>
  );
}

// Features data

// Pricing plans data
