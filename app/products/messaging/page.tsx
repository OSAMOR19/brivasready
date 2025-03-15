import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Phone, PhoneCall, Check } from "lucide-react"

import Bulksms from "@/components/Images/logos/bulksmslogo.svg"
import Voice from "@/components/Images/logos/voice.svg"
import Flashcall from "@/components/Images/logos/flashcall.svg"
import Smsotp from "@/components/Images/logos/smsotplogo.svg"
import flashcall from "@/components/Images/logos/flashcalllogo.svg"
import smsmo from "@/components/Images/logos/smsmo.svg"
import ussdpull from "@/components/Images/logos/ussdpull.svg"

export default function MessagingPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Messaging Solutions for Every Business
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with your customers through our reliable, scalable, and feature-rich messaging platform.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90 transition-colors"
            >
              Contact Sales
            </Link>
            <Link 
              href="/products/messaging#channels" 
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Explore Channels
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/placeholder.svg?height=400&width=600" 
              alt="Messaging Platform Interface" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Channels Section */}
      <div id="channels" className="mb-20 scroll-mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Communication Channels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* SMS */}
          <Link 
            href="/products/sms" 
            className="group block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-[#40196D]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#40196D] transition-colors">SMS</h3>
            <p className="text-gray-600 mb-4">
              Reliable text messaging for businesses with global reach and high deliverability.
            </p>
            <span className="text-[#40196D] font-medium flex items-center">
              Learn more
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          {/* Voice */}
          <Link 
            href="/products/voice" 
            className="group block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-[#40196D]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#40196D] transition-colors">Voice</h3>
            <p className="text-gray-600 mb-4">
              Crystal-clear voice communication solutions for calls, IVR, and voice messaging.
            </p>
            <span className="text-[#40196D] font-medium flex items-center">
              Learn more
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          {/* Flash Call */}
          <Link 
            href="/products/flash-call" 
            className="group block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mb-4">
              <PhoneCall className="w-6 h-6 text-[#40196D]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#40196D] transition-colors">Flash Call</h3>
            <p className="text-gray-600 mb-4">
              Quick verification through missed calls for seamless user authentication.
            </p>
            <span className="text-[#40196D] font-medium flex items-center">
              Learn more
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Choose the plan that works best for your business needs and scale as you grow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl border ${
                plan.featured 
                  ? "border-[#40196D] shadow-lg relative" 
                  : "border-gray-200"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#40196D] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href={plan.buttonLink} 
                className={`block w-full py-3 text-center rounded-lg font-medium ${
                  plan.featured 
                    ? "bg-[#40196D] text-white hover:bg-[#40196D]/90" 
                    : "border border-gray-300 hover:bg-gray-50"
                } transition-colors`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#40196D]/5 rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact our sales team to learn more about our messaging solutions and how they can help your business.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/contact" 
            className="px-6 py-3 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90 transition-colors"
          >
            Contact Sales
          </Link>
          <Link 
            href="/signup" 
            className="px-6 py-3 border border-gray-300 bg-white rounded-lg hover:bg-gray-50 transition-colors"
          >
            Sign Up Free
          </Link>
        </div>
      </div>
    </div>
  )
}

// Features data
const features = [
  {
    title: "Global Reach",
    description: "Connect with customers worldwide through our extensive network of carriers and partners.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
  },
  {
    title: "High Deliverability",
    description: "Ensure your messages reach their destination with our optimized routing and delivery system.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>,
  },
  {
    title: "Real-time Analytics",
    description: "Track message delivery, engagement, and performance with our comprehensive analytics dashboard.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>,
  },
  {
    title: "Easy Integration",
    description: "Integrate our messaging services into your applications with our simple and well-documented APIs.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>,
  },
  {
    title: "Scalable Infrastructure",
    description: "Our platform grows with your business, handling millions of messages with ease.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>,
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to help with any issues or questions.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
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
      "Up to 1,000 SMS messages/month",
      "Basic analytics",
      "Email support",
      "API access",
      "1 user account"
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
      "Up to 10,000 SMS messages/month",
      "Advanced analytics",
      "Priority email support",
      "API access",
      "5 user accounts",
      "Custom sender IDs"
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
      "Unlimited SMS messages",
      "Real-time analytics dashboard",
      "24/7 phone & email support",
      "API access",
      "Unlimited user accounts",
      "Custom sender IDs",
      "Dedicated account manager"
    ],
    buttonText: "Contact Sales",
    buttonLink: "/contact",
    featured: false
  }
] 