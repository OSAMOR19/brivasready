import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          Voice Communication
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Crystal-clear voice solutions for businesses. Connect with your customers through reliable, high-quality voice calls and messaging.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/contact" 
            className="px-6 py-3 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90 transition-colors"
          >
            Contact Sales
          </Link>
          <Link 
            href="/signup" 
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image 
            src="/placeholder.svg?height=400&width=600" 
            alt="Voice Communication Platform" 
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 