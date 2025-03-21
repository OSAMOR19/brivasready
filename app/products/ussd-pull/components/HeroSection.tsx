"use client"
import background from "@/components/Images/pics/ussdbg.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const fullCode = "*00567#";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Type the USSD code character by character
    if (displayedCode.length < fullCode.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(fullCode.substring(0, displayedCode.length + 1));
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [displayedCode]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div 
      className="relative min-h-[600px] flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: ` url(${background.src})`
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 w-full py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-white space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-7xl font-bold leading-">
              Enhance User Engagement with USSD Pull
            </h1>
            <p className="text-lg text-gray-200 max-w-xl">
              Deliver seamless mobile interactions through USSD-based service retrieval, ensuring connectivity without internet dependency.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-white text-[#40196D] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Start for free
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - USSD Interface */}
          <motion.div 
            className="relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* USSD Menu Interface */}
            <motion.div 
              className="bg-white text-black rounded-[20px] shadow-xl p-6 max-w-sm mx-auto"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="space-y-3 text-base">
                <div className="font-medium">1.Add to cart</div>
                <div className="font-medium">2.List items</div>
                <div className="font-medium">3.Purchase history</div>
                <div className="font-medium">4.Gift items</div>
                <div className="font-medium">5.Discount sales</div>
                <div className="font-medium">6.Call us</div>
                <div className="font-medium">7.Fund account</div>
                
                <div className="border-t border-gray-300 mt-6 pt-4 flex justify-between items-center">
                  <span className="text-green-600 font-medium">Cancel</span>
                  <span className="text-green-600 font-medium">Send</span>
                </div>
              </div>
            </motion.div>

            {/* Purple USSD Code Overlay */}
            <motion.div 
              className="absolute -top-6 right-4 bg-[#40196D] text-white px-8 py-4 rounded-[12px] flex items-center justify-between w-[240px]"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="font-mono text-xl">
                {displayedCode}
                {displayedCode.length < fullCode.length || showCursor ? "|" : ""}
              </div>
              <div className="bg-gray-200 rounded-md p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#40196D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;