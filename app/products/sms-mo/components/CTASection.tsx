import Link from "next/link";

const CTASection = () => {
  return (
    <div className="bg-[#40196D]/5 rounded-3xl p-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to receive SMS from your customers?</h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Contact our team to learn more about our SMS MO service and how it can help you engage with your customers.
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
  );
};

export default CTASection; 