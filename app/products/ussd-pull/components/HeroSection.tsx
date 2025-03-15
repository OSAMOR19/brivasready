import background from "@/components/Images/pics/ussdbg.svg";

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background.src})`
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 w-full py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Enhance User Engagement with USSD Pull
            </h1>
            <p className="text-lg text-gray-200 max-w-xl">
              Deliver seamless mobile interactions through USSD-based service retrieval, ensuring connectivity without internet dependency.
            </p>
            <div>
              <button className="bg-white text-[#40196D] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Start for free
              </button>
            </div>
          </div>

          {/* Right Column - USSD Interface */}
          <div className="relative">
            <div className="bg-white text-black rounded-lg shadow-xl p-4 max-w-sm mx-auto">
              <div className="space-y-2 text-sm">
                <div>1. Add to cart</div>
                <div>2. List items</div>
                <div>3. Purchase history</div>
                <div>4. Gift items</div>
                <div>5. Discount sales</div>
                <div>6. Call us</div>
                <div>7. Fund account</div>
                <div className="border-t mt-4 pt-4 flex justify-between items-center">
                  <span className="text-gray-500">Cancel</span>
                  <span className="text-green-600">Send</span>
                </div>
              </div>
            </div>

            {/* Purple USSD Code Overlay */}
            <div className="absolute -top-4 right-4 bg-[#40196D] text-white px-6 py-3 rounded-lg flex items-center gap-3">
              <span className="font-mono">*00567#</span>
              <span className="text-xl">&times;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 