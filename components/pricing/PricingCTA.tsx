import Link from "next/link"

export default function PricingCTA() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Choose the plan that works best for your business and start connecting with your customers today.
      </p>
      <div className="flex justify-center gap-4">
        <Link 
          href="/signup" 
          className="px-6 py-3 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90 transition-colors"
        >
          Start Free Trial
        </Link>
        <Link 
          href="/contact" 
          className="px-6 py-3 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Contact Sales
        </Link>
      </div>
    </div>
  )
} 