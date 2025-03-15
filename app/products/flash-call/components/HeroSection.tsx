import Link from "next/link";
import Image from "next/image";
import picture from "../../components/Images/pics/connectionimage.svg";

const HeroSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold tracking-tight text-black mb-4">
              Instant User Verification with Flash Call
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Authenticate users with a single, automated phone call – no need for SMS.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/signup" 
                className="px-8 py-3 bg-[#B30000] text-white rounded-full hover:bg-[#990000] transition-colors font-medium"
              >
                Start for free
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-[280px] h-[400px]">
              <Image 
                src={picture} 
                alt="Flash Call Verification on Mobile Phone" 
                width={280}
                height={400}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;