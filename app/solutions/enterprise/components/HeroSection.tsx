import Image from 'next/image';
import Link from 'next/link';
import background from "@/components/Images/pics/startupbgimage.svg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen max-h-[800px] min-h-[600px] overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <Image 
          src={background.src}
          alt="Startup background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      
      {/* Content Container - Vertically and Horizontally Centered */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Empower Your <span className="text-[#FF3366]">Startup</span> with Scalable Communication Solutions
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-200">
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
    </div>
  );
};

export default HeroSection; 