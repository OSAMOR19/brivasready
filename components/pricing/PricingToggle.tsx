"use client"

import { useState } from "react"

export default function PricingToggle() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly")

  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
        <button 
          className={`px-4 py-2 rounded-full ${
            billingPeriod === "monthly" 
              ? "bg-white text-black border border-gray-300" 
              : "text-gray-700"
          }`}
          onClick={() => setBillingPeriod("monthly")}
        >
          Monthly
        </button>
        <button 
          className={`px-4 py-2 rounded-full ${
            billingPeriod === "annual" 
              ? "bg-white text-black border border-gray-300" 
              : "text-gray-700"
          }`}
          onClick={() => setBillingPeriod("annual")}
        >
          Annual (Save 20%)
        </button>
      </div>
    </div>
  )
} 