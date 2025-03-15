import Link from "next/link"

export default function ProductsCTA() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Contact our sales team to learn more about our products and how they can help your business.
      </p>
      <div className="flex justify-center gap-4">
        <Link 
          href="/contact" 
          className="px-6 py-3 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90 transition-colors"
        >
          Contact Sales
        </Link>
        <Link 
          href="/pricing" 
          className="px-6 py-3 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          View Pricing
        </Link>
      </div>
    </div>
  )
} 