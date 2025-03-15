import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Use the background image you imported */}
          <Image 
            src="/images/startup-bg.jpg" // Update this path to your actual image path
            alt="Startup background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" /> {/* Dark overlay for better text readability */}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Empower Your <span className="text-[#FF3366]">Startup</span> with Scalable Communication Solutions
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Accelerate your growth with cost-effective messaging, verification, and USSD services tailored for startups.
          </p>
          <Link 
            href="/signup" 
            className="inline-block bg-white text-[#40196D] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Start for free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 