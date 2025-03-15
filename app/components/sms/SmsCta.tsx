import Link from "next/link"

export default function ResellerPricing() {
  return (
    <div className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-black font-bold mb-4">
          Flexible Reseller <span className="text-purple-800">Pricing</span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Create your own pricing structure for SMS credits, allowing you to maximize profits while offering
          competitive rates to your customers.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Starter Plan */}
        <div className="w-64 border border-gray-200 rounded-2xl p-8 bg-white">
          <h3 className="text-xl text-black font-bold mb-4">Starter</h3>
          <p className="text-gray-600 text-sm mb-24">
            Perfect for new resellers with low-volume clients.
          </p>
          <Link
            href="/start-free"
            className="block w-full py-2 border border-purple-800 text-purple-800 rounded-full text-center hover:bg-gray-50 transition-colors"
          >
            Start for free
          </Link>
        </div>

        {/* Professional Plan */}
        <div className="w-64 border border-gray-200 rounded-2xl p-8 bg-white">
          <h3 className="text-xl text-black font-bold mb-4">Professional</h3>
          <p className="text-gray-600 text-sm mb-24">
            Ideal for resellers managing multiple business clients.
          </p>
          <Link
            href="/talk-expert"
            className="block w-full py-2 bg-purple-800 text-white rounded-full text-center hover:bg-purple-900 transition-colors"
          >
            Talk to an expert
          </Link>
        </div>

        {/* Enterprise Plan */}
        <div className="w-64 border border-gray-200 rounded-2xl p-8 bg-white">
          <h3 className="text-xl text-black font-bold mb-4">Enterprise</h3>
          <p className="text-gray-600 text-sm mb-24">
            Tailored solutions for large-scale resellers managing enterprise clients.
          </p>
          <Link
            href="/talk-expert"
            className="block w-full py-2 border border-purple-800 text-white bg-white text-purple-800 rounded-full text-center hover:bg-gray-50 transition-colors"
          >
            Talk to an expert
          </Link>
        </div>
      </div>
    </div>
  )
}