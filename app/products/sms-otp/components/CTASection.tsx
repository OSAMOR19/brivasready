import Link from "next/link";

const CTASection = () => {
  return (
    <div className="bg-[#40196D] text-white rounded-2xl p-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to secure your application?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Start protecting your users with BRIVAS SMS OTP authentication today. Our team is ready to help you get set up quickly.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/contact"
          className="px-8 py-3 bg-white text-[#40196D] rounded-full hover:bg-gray-100 transition-colors font-medium"
        >
          Contact Sales
        </Link>
        <Link
          href="/docs/sms-otp"
          className="px-8 py-3 bg-[#40196D] text-white rounded-full border border-white hover:bg-[#40196D]/80 transition-colors font-medium"
        >
          View Documentation
        </Link>
      </div>
    </div>
  );
};

export default CTASection; 