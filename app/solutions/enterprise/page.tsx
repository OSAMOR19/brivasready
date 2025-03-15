import Link from "next/link";
import Image from "next/image";
import background from "@/components/Images/pics/startupbgimage.svg";
import EnterpriseHeroSection from './components/EnterpriseHeroSection';
import EnterpriseBenefitsSection from './components/EnterpriseBenefitsSection';
import EnterpriseSolutionsSection from './components/EnterpriseSolutionsSection';
import EnterpriseCaseStudiesSection from './components/EnterpriseCaseStudiesSection';
import EnterpriseCTASection from './components/EnterpriseCTASection';
import EnterpriseFeatureShowcase from './components/EnterpriseFeatureShowcase';
import EnterpriseHeroShowcase from './components/EnterpriseHeroShowcase';
import EnterpriseCommunicationTools from './components/EnterpriseCommunicationTools';
import EnterpriseOptimizedCommunications from './components/EnterpriseOptimizedCommunications';

export default function EnterprisePage() {
  return (
    <main>
      <EnterpriseHeroSection />
      <EnterpriseHeroShowcase />
      <EnterpriseBenefitsSection />
      <EnterpriseCommunicationTools />
      <EnterpriseSolutionsSection />
      <EnterpriseCaseStudiesSection />
      <EnterpriseCTASection />
      <EnterpriseOptimizedCommunications />
    </main>
  );
}

// Features data

// Pricing plans data
