"use client"
import Link from "next/link"
import Image from "next/image"
import { MessageSquareDashed, Check } from "lucide-react"
import Img from "@/components/Images/pics/phonepicogun.svg"
import HowItWorksSection from "./components/HowItWorksSection"
import SMSOTPProcessSection from "./components/SMSOTPProcessSection"
import UseCasesSection from "./components/UseCasesSection"
import FeatureSection from "./components/FeatureSection"
import BenefitsSection from "./components/BenefitsSection"
import PricingSection from "./components/PricingSection"
import FAQSection from "./components/FAQSection"
import CTASection from "./components/CTASection"
import Halftone from "@/components/Images/pics/halftonedotsimage.svg"
import { motion } from "framer-motion"

export default function SmsOtpPage() {
  const steps = [
    {
      title: "User Initiates Action",
      description: "User attempts to log in, make a transaction, or perform a sensitive action."
    },
    {
      title: "OTP Generation",
      description: "Our system generates a unique, time-limited one-time password."
    },
    {
      title: "SMS Delivery",
      description: "The OTP is instantly delivered to the user's registered mobile number."
    },
    {
      title: "Verification",
      description: "User enters the OTP, and the system validates it to complete the action."
    }
  ];

  const features = [
    {
      icon: <MessageSquareDashed className="h-8 w-8 text-[#40196D]" />,
      title: "Instant Delivery",
      description: "OTPs are delivered within seconds to ensure a smooth user experience."
    },
    {
      icon: <Check className="h-8 w-8 text-[#40196D]" />,
      title: "Time-Limited Codes",
      description: "OTPs expire after a set time period for enhanced security."
    },
    // ... other features
  ];

  return (
    <div>
      <motion.div 
        className="w-full bg-[#f8f9fc] py-16 md:py-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Halftone dots background */}
        <motion.div 
          className="absolute right-0 top-0 z-0 opacity-30"
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 5, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut" 
          }}
        >
          <Image 
            src={Halftone}
            alt="Background pattern"
            width={600}
            height={600}
          />
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Secure User Authentication with <span className="text-[#40196D]">SMS OTP</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-black mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Protect your applications with real-time, one-time passwords sent via SMS.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="inline-block px-8 py-3 bg-[#40196D] text-white rounded-full hover:bg-[#40196D]/90 transition-colors font-medium"
                >
                  Get started
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-[400px] md:h-[500px] w-full">
                {/* Phone image with floating animation */}
                <motion.div
                  className="relative z-10"
                  animate={{ 
                    y: [-8, 8, -8],
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }}
                >
                  <Image 
                    src={Img}
                    alt="SMS OTP Verification" 
                    priority
                    width={400}
                    height={600}
                    className="object-contain mx-auto"
                    style={{ width: 'auto', height: 'auto', maxHeight: '500px' }}
                  />
                </motion.div>
                
                {/* Small decorative elements */}
                <motion.div 
                  className="absolute top-[20%] right-[15%] w-12 h-12 bg-purple-100 rounded-full z-0"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div 
                  className="absolute bottom-[30%] left-[20%] w-8 h-8 bg-purple-200 rounded-full z-0"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2.5,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16 md:px-6">
        <HowItWorksSection />
        <SMSOTPProcessSection />
      </div>
      
      <UseCasesSection />
      
      <div className="container mx-auto px-4 py-16 md:px-6">
        <FeatureSection />
        <BenefitsSection />
        <PricingSection />
        {/* <CTASection /> */}
      </div>
    </div>
  )
}

// Features data
const features = [
  {
    title: "Global Coverage",
    description: "Send OTPs to users worldwide with our extensive network of carriers.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
  },
  {
    title: "High Deliverability",
    description: "Industry-leading delivery rates ensure your OTPs reach users quickly.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>,
  },
  {
    title: "Customizable Templates",
    description: "Personalize your OTP messages with custom templates and branding.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>,
  },
  {
    title: "Secure Encryption",
    description: "End-to-end encryption ensures OTPs remain secure throughout the process.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>,
  },
  {
    title: "Fallback Options",
    description: "Automatic fallback to alternative verification methods if SMS delivery fails.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>,
  },
  {
    title: "Detailed Analytics",
    description: "Track OTP delivery, verification rates, and user behavior with comprehensive analytics.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>,
  },
]

// Use cases data
const useCases = [
  {
    title: "User Registration",
    description: "Verify new users during sign-up to prevent fake accounts and ensure authentic user base.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>,
  },
  {
    title: "Secure Transactions",
    description: "Add verification steps for financial transactions to protect against fraud and unauthorized access.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
  },
  {
    title: "Password Recovery",
    description: "Securely verify user identity during password reset processes to prevent account takeovers.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>,
  },
  {
    title: "Two-Factor Authentication",
    description: "Add an extra layer of security to login processes, especially for accounts with sensitive information.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>,
  },
]

// Pricing plans data
const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started.",
    price: 29,
    features: [
      "Up to 1,000 OTPs/month",
      "Basic analytics",
      "Email support",
      "API access",
      "Standard templates"
    ],
    buttonText: "Get Started",
    buttonLink: "/signup",
    featured: false
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with increasing needs.",
    price: 99,
    features: [
      "Up to 10,000 OTPs/month",
      "Advanced analytics",
      "Priority email support",
      "API access",
      "Custom templates",
      "Fallback options"
    ],
    buttonText: "Get Started",
    buttonLink: "/signup",
    featured: true
  },
  {
    name: "Enterprise",
    description: "For large organizations with high-volume requirements.",
    price: 299,
    features: [
      "Unlimited OTPs",
      "Real-time analytics dashboard",
      "24/7 phone & email support",
      "API access",
      "Custom templates & branding",
      "Advanced security features",
      "Dedicated account manager"
    ],
    buttonText: "Contact Sales",
    buttonLink: "/contact",
    featured: false
  }
]