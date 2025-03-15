import Link from "next/link";
import Image from "next/image";
import background from "@/components/Images/pics/startupbgimage.svg";
import EcommerceHeroSection from './components/components/EcommerceHeroSection';
import EcommerceBenefitsSection from './components/components/EcommerceBenefitsSection';
import EcommerceSolutionsSection from './components/components/EcommerceSolutionsSection';
import EcommerceCaseStudiesSection from './components/components/EcommerceCaseStudiesSection';
import EcommerceCTASection from './components/components/EcommerceCTASection';
import EcommerceFeatureShowcase from './components/components/EcommerceFeatureShowcase';
import EcommerceHeroShowcase from './components/components/EcommerceHeroShowcase';
import EcommerceCommunicationTools from './components/components/EcommerceCommunicationTools';
import EcommerceOptimizedCommunications from './components/components/EcommerceOptimizedCommunications';

export default function EcommercePage() {
  return (
    <main>
      <EcommerceHeroSection />
      {/* <EcommerceHeroShowcase /> */}
      <EcommerceBenefitsSection />
      <EcommerceCommunicationTools />
      <EcommerceSolutionsSection />
      <EcommerceCaseStudiesSection />
      <EcommerceCTASection />
      {/* <EcommerceOptimizedCommunications /> */}
    </main>
  );
}

// Features data

// Pricing plans data
