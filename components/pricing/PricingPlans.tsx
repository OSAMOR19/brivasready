"use client"

import Link from "next/link"
import { Check } from "lucide-react"

export default function PricingPlans() {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started.",
      price: "29",
      featured: false,
      features: [
        "1,000 SMS messages per month",
        "500 Voice minutes per month",
        "Basic analytics",
        "Email support",
        "1 project"
      ],
      cta: "Get Started",
      ctaLink: "/signup"
    },
    {
      name: "Professional",
      description: "For growing businesses with more communication needs.",
      price: "99",
      featured: true,
      features: [
        "10,000 SMS messages per month",
        "2,000 Voice minutes per month",
        "Advanced analytics",
        "Priority support",
        "5 projects",
        "API access",
        "Custom integrations"
      ],
      cta: "Get Started",
      ctaLink: "/signup"
    },
    {
      name: "Enterprise",
      description: "For large organizations with high-volume requirements.",
      price: "Custom",
      featured: false,
      features: [
        "Unlimited SMS messages",
        "Unlimited Voice minutes",
        "Enterprise analytics",
        "Dedicated account manager",
        "Unlimited projects",
        "Advanced API access",
        "Custom integrations",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      ctaLink: "/contact"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black border border-gray-300 px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
          )}
          <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
          <p className="text-gray-600 mb-6">{plan.description}</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">${plan.price}</span>
            {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
          </div>
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <Link 
            href={plan.ctaLink} 
            className={`block w-full text-center py-2 rounded-lg font-medium ${
              plan.featured 
                ? "bg-white text-black border border-gray-300 hover:bg-gray-50" 
                : "border border-gray-300 text-black hover:bg-gray-50"
            } transition-colors`}
          >
            {plan.cta}
          </Link>
        </div>
      ))}
    </div>
  )
} 