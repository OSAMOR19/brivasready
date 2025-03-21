"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Change the import approach for SVGs
import otpdelivery from "@/components/Images/logos/otpdelivery.svg";
import Otpmap from "@/components/Images/logos/otpmap.svg";
import otpsecurity from "@/components/Images/logos/otpsecurity.svg";
import otpapi from "@/components/Images/logos/otpapi.svg";
import otpsworks from "@/components/Images/logos/otpworks.svg";
import otpsettings from "@/components/Images/logos/otpsettings.svg";

const HowItWorksSection = () => {
  // Define icons as React components
  const icons = {
    delivery: otpdelivery,
    map: Otpmap,
    security: otpsecurity,
    settings: otpsettings,
    works: otpsworks,
    api: otpapi
  };

  const features = [
    {
      title: "Real-Time Delivery",
      description: "Ensure OTPs are delivered instantly with high reliability and low latency.",
      iconKey: "delivery"
    },
    {
      title: "Global Reach",
      description: "Send OTPs to users anywhere in the world, covering 200+ countries.",
      iconKey: "map"
    },
    {
      title: "High Security",
      description: "Use our encrypted platform to ensure that your authentication process remains secure and compliant with global standards.",
      iconKey: "security"
    },
    {
      title: "Customizable Expiry",
      description: "Set custom OTP expiration times to suit your app's security needs.",
      iconKey: "settings"
    },
    {
      title: "Detailed Logs & Reports",
      description: "Monitor OTP deliveries and track success rates with comprehensive logs and real-time analytics.",
      iconKey: "works"
    },
    {
      title: "Easy API Integration",
      description: "Integrate SMS OTP into your existing systems with our developer-friendly API for hassle-free implementation.",
      iconKey: "api"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -5,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="mb-20 py-8">
      <h2 className="text-4xl mt-12 text-black font-bold text-center mb-4">Seamless User <span className="text-[#40196D]">Verification</span> with <span className="text-[#40196D]">SMS OTP</span></h2>
      <p className="text-black text-center mb-12 max-w-5xl mx-auto">
        BRIVAS SMS OTP provides a secure, fast, and reliable method for user authentication. Ensure your users&apos; identities through one-time passwords (OTP) sent via SMS for login, transaction validation, and more.
      </p>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {features.map((feature, index) => {
          // Use a simpler approach for icons
          let iconSrc;
          switch (feature.iconKey) {
            case "delivery": iconSrc = otpdelivery; break;
            case "map": iconSrc = Otpmap; break;
            case "security": iconSrc = otpsecurity; break;
            case "settings": iconSrc = otpsettings; break;
            case "works": iconSrc = otpsworks; break;
            case "api": iconSrc = otpapi; break;
            default: iconSrc = otpdelivery;
          }
          
          return (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col h-full"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="mb-6">
                <div className="w-12 h-12 flex items-center justify-center text-[#40196D]">
                  {/* Use Image component instead of direct SVG component */}
                  <Image 
                    src={iconSrc}
                    alt={feature.title}
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-black">{feature.title}</h3>
              <p className="text-gray-600 mb-auto">{feature.description}</p>
              
              <motion.div 
                className="mt-8 w-full"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  href="/signup" 
                  className="w-full flex items-center justify-between bg-[#C8C8C8] text-gray-700 font-medium rounded-full py-3 px-6 hover:text-[#40196D] transition-colors"
                >
                  <span>Sign up</span>
                  <motion.div
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                    whileHover={{ 
                      rotate: 45,
                      backgroundColor: "#40196D",
                      transition: { duration: 0.3 }
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      transition: { 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        duration: 1.5 
                      }
                    }}
                  >
                    <ArrowRight className="h-4 w-4 text-gray-700 group-hover:text-white" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default HowItWorksSection;