import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold tracking-tight text-black mb-4">
              Engage Your Customers with SMS MO
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Enable two-way communication with your audience by receiving messages directly from their mobile phones.
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
          
          <div className="md:w-1/2">
            <div className="relative">
              {/* Phone mockup with pink border */}
              <div className="relative w-[320px] h-[500px] mx-auto rounded-[40px] overflow-hidden border-[16px] border-pink-200 bg-gray-200">
                {/* Woman image inside phone - using placeholder */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src="/placeholder.svg?height=500&width=320&text=Woman+Image"
                    alt="Woman smiling" 
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Chat bubble */}
                <div className="absolute top-[100px] left-[20px] right-[20px] bg-white p-4 rounded-2xl shadow-sm">
                  <p className="text-sm">
                    Hello Tomiwa, take advantage of our 50% discount sales for our special customers. Explore all items by replying YES to this thread.
                  </p>
                </div>
                
                {/* Reply button */}
                <div className="absolute bottom-[100px] right-[40px]">
                  <div className="bg-white px-4 py-1 rounded-full text-sm font-medium">
                    YES
                  </div>
                </div>
                
                {/* Typing indicator */}
                <div className="absolute bottom-[40px] left-[20px] right-[20px]">
                  <div className="bg-gray-100 rounded-full py-2 px-4">
                    <p className="text-xs text-gray-500">Typing...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 