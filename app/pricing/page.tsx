"use client"

import {
  PricingHeader,
  PricingToggle,
  PricingPlans,
  PricingFAQ,
  PricingCTA
} from "@/components/pricing"

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <PricingHeader />
      <PricingToggle />
      <PricingPlans />
      <PricingFAQ />
      <PricingCTA />
    </div>
  )
} 