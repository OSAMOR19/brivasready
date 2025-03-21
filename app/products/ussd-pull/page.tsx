import Link from "next/link"
import Image from "next/image"
import { PhoneCall, Check } from "lucide-react"
import background from "@/components/Images/pics/ussdbg.svg"
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import UseCasesSection from './components/UseCasesSection';
import IntegrationFeatures from './components/IntegrationFeatures';
import TrackingFeatures from './components/TrackingFeatures';
import PricingSection from './components/PricingSection';

export default function USSDPullPage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <IntegrationFeatures />
      <TrackingFeatures />
      <PricingSection />
    </main>
  )
}

// How it works steps
const steps = [
  {
    title: "Create Shortcode",
    description: "Set up a memorable shortcode for your service (e.g., *123#)."
  },
  {
    title: "Design Menu Flow",
    description: "Create an interactive menu system with our easy-to-use tools."
  },
  {
    title: "User Interaction",
    description: "Users dial your shortcode and navigate through your service menu."
  },
  {
    title: "Process & Respond",
    description: "Process user inputs and provide real-time responses through the USSD session."
  }
]

// Features data
const features = [
  {
    title: "Universal Access",
    description: "Works on all mobile phones, from basic feature phones to smartphones, without requiring internet.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
  },
  {
    title: "Interactive Menus",
    description: "Create multi-level interactive menus for users to navigate through your services.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
    </svg>,
  },
  {
    title: "Real-time Processing",
    description: "Process user inputs and provide immediate responses during the USSD session.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
  },
  {
    title: "API Integration",
    description: "Connect your USSD service to your existing systems through our comprehensive API.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>,
  },
  {
    title: "Analytics Dashboard",
    description: "Track user engagement, popular menu options, and service performance with detailed analytics.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>,
  },
  {
    title: "Secure Transactions",
    description: "Enable secure financial transactions and data collection through encrypted USSD sessions.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>,
  },
]

// Use cases data
const useCases = [
  {
    title: "Mobile Banking",
    description: "Provide banking services like balance inquiries, transfers, and bill payments through USSD menus.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>,
  },
  {
    title: "Information Services",
    description: "Deliver news, weather updates, market prices, and other information through accessible USSD menus.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
  },
  {
    title: "Customer Surveys",
    description: "Collect customer feedback and conduct surveys through interactive USSD sessions.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
  },
  {
    title: "Utility Payments",
    description: "Enable customers to pay for utilities like electricity, water, and internet through USSD menus.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
  },
]

// Pricing plans data
const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started.",
    price: 49,
    features: [
      "1 USSD shortcode",
      "Up to 5,000 sessions/month",
      "Basic analytics",
      "Email support",
      "API access",
      "3-level menu depth"
    ],
    buttonText: "Get Started",
    buttonLink: "/signup",
    featured: false
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with increasing needs.",
    price: 149,
    features: [
      "3 USSD shortcodes",
      "Up to 50,000 sessions/month",
      "Advanced analytics",
      "Priority email support",
      "API access",
      "Unlimited menu depth",
      "Custom branding"
    ],
    buttonText: "Get Started",
    buttonLink: "/signup",
    featured: true
  },
  {
    name: "Enterprise",
    description: "For large organizations with high-volume requirements.",
    price: 399,
    features: [
      "Unlimited USSD shortcodes",
      "Unlimited sessions",
      "Real-time analytics dashboard",
      "24/7 phone & email support",
      "API access",
      "Unlimited menu depth",
      "Custom branding",
      "Dedicated account manager"
    ],
    buttonText: "Contact Sales",
    buttonLink: "/contact",
    featured: false
  }
] 