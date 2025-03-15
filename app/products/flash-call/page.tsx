"use client"
import Link from "next/link"
import Image from "next/image"
import { Phone, Check } from "lucide-react"
import VerificationFeaturesSection from "./components/VerificationFeaturesSection"
import HowItWorksSection from "./components/HowItWorksSection"
import FeaturesSection from "./components/FeaturesSection"
import UseCasesSection from "./components/UseCasesSection"
import AnalyticsSection from "./components/AnalyticsSection"
import PricingSection from "./components/PricingSection"
import CTASection from "./components/CTASection"

export default function FlashCallPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold tracking-tight text-black mb-4">
                Instant User Verification with Flash Call
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Authenticate users with a single, automated phone call - no need for SMS.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/signup" 
                  className="px-8 py-3 bg-[#B30000] text-white rounded-full hover:bg-[#990000] transition-colors font-medium"
                >
                  Start for free
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-[280px] h-[400px]">
                <Image 
                  src="/placeholder.svg?height=400&width=280" 
                  alt="Flash Call Verification on Mobile Phone" 
                  fill
                  className="object-contain"
                />
                {/* Replace with your actual phone illustration */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Page content in correct order */}
      <div className="container mx-auto px-4 py-16 md:px-6">
        {/* 1. Accordion section with "Effortless and Cost-Effective User Verification" */}
        <VerificationFeaturesSection />
        
        {/* 2. How it works section with the 4 purple cards */}
        <HowItWorksSection />
        
        {/* 3. Use cases section with the 3 gray cards */}
        <UseCasesSection />
        
        {/* 4. Features section with "Easy Integration and Flexible Customization" */}
        <FeaturesSection />
        
        {/* 5. NEW Analytics section with "Monitor and Analyze Every Call in Real-Time" */}
        <AnalyticsSection />
        
        <div className="container mx-auto px-4 py-16 md:px-6">
          {/* 6. Pricing section */}
          <PricingSection />
          
          {/* 7. CTA section */}
          <CTASection />
        </div>
      </div>
    </div>
  )
}

// How it works steps
const steps = [
  {
    title: "User Enters Phone",
    description: "User enters their phone number during registration or login process."
  },
  {
    title: "Flash Call Initiated",
    description: "Our system makes a quick call to the user's phone and immediately hangs up."
  },
  {
    title: "Automatic Detection",
    description: "The app automatically detects the incoming call and verifies the number."
  },
  {
    title: "Verification Complete",
    description: "User is verified without having to enter any codes manually."
  }
]

// Benefits data
const benefits = [
  {
    title: "Frictionless Experience",
    description: "No codes to enter manually, creating a seamless verification process for users.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
    </svg>,
  },
  {
    title: "Cost-Effective",
    description: "Lower cost than SMS verification, with no messaging fees or international charges.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
  },
  {
    title: "Higher Conversion",
    description: "Improved conversion rates with fewer drop-offs during the verification process.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>,
  },
]

// Use cases data
const useCases = [
  {
    title: "User Registration",
    description: "Verify new users during sign-up with a frictionless experience that improves conversion rates.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>,
  },
  {
    title: "Account Recovery",
    description: "Provide a secure and simple way for users to recover access to their accounts.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>,
  },
  {
    title: "Two-Factor Authentication",
    description: "Add an extra layer of security to login processes without requiring manual code entry.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>,
  },
  {
    title: "Mobile App Verification",
    description: "Verify users in mobile applications with a native experience that feels seamless.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>,
  },
]

// Pricing plans data
const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started.",
    price: 19,
    features: [
      "Up to 500 flash calls/month",
      "Basic analytics",
      "Email support",
      "API access",
      "1 app integration"
    ],
    buttonText: "Get Started",
    buttonLink: "/signup",
    featured: false
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with increasing needs.",
    price: 79,
    features: [
      "Up to 5,000 flash calls/month",
      "Advanced analytics",
      "Priority email support",
      "API access",
      "Multiple app integrations",
      "Customizable caller ID"
    ],
    buttonText: "Get Started",
    buttonLink: "/signup",
    featured: true
  },
  {
    name: "Enterprise",
    description: "For large organizations with high-volume requirements.",
    price: 249,
    features: [
      "Unlimited flash calls",
      "Real-time analytics dashboard",
      "24/7 phone & email support",
      "API access",
      "Unlimited app integrations",
      "Customizable caller ID",
      "Dedicated account manager"
    ],
    buttonText: "Contact Sales",
    buttonLink: "/contact",
    featured: false
  }
] 