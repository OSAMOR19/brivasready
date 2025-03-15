import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="md:w-1/2">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
        Secure user Authentication with <span className="text-[#40196D]">SMS OTP</span>
      </h1>
      <h6 className="text-xl text-gray-600 mb-8">
        Protect your applications with real-time, one-time passwords sent via SMS.
      </h6>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="px-6 py-3 bg-[#40196D] text-white rounded-full hover:bg-[#40196D]/90 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HeroSection; 