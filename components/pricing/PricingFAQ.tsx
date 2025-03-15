"use client"

import { useState } from "react"

export default function PricingFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "How does billing work?",
      answer: "We bill monthly based on your subscription plan. You can upgrade or downgrade your plan at any time. For annual plans, we offer a 20% discount."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new charges will be prorated for the remainder of the billing cycle. If you downgrade, the new rate will apply to your next billing cycle."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "If you exceed your plan limits, you'll be charged for the additional usage at our standard overage rates. We'll notify you when you're approaching your limits so you can upgrade if needed."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer special pricing for non-profit organizations. Please contact our sales team for more information."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial for all our plans. No credit card required to start your trial."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto mb-16">
      <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button 
              className="flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <svg 
                className={`w-5 h-5 transition-transform ${openFAQ === index ? 'transform rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFAQ === index && (
              <div className="p-4 pt-0 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 