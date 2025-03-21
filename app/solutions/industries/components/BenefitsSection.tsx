"use client"
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import finepic from "@/components/Images/pics/financepic.svg"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const VerificationFeaturesSection = () => {
  const [openItem, setOpenItem] = useState<string | null>("instant");
  
  const items = [
    {
      id: "instant",
      title: "Enhanced Patient Engagement",
      description: "Authenticate users in seconds with a simple phone call."
    },
    {
      id: "noinput",
      title: "Appointment Management",
      description: "Reduce no-shows and improve patient adherence with automated SMS reminders and scheduling updates."
    },
    {
      id: "global",
      title: "Secure Communication",
      description: "Our flash call verification works in over 200 countries, ensuring your users can be verified anywhere."
    },
    {
      id: "cost",
      title: "Scalable Solutions",
      description: "Flash calls are more cost-effective than SMS, especially for global verification needs."
    },
    {
      id: "secure",
      title: "Global Connectivity",
      description: "Our system uses advanced security measures to ensure verification is both secure and reliable."
    },
    {
      id: "reports",
      title: "Real-Time Reports",
      description: "Access detailed analytics and reports on verification performance and user patterns."
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="mb-20 px-8 py-16 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* Left side - Image */}
        <div className="md:w-1/2">
          <div className="relative pt-14 h-[400px] w-full">
            <Image 
              src={finepic} 
              alt="Flash Call Verification" 
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="md:w-1/2 mt-14">
          <h2 className="text-4xl text-black font-semibold mb-6">
          <span className="text-black"> <span className="text-[#40196D]">BRIVAS</span>  for Financial Services: Innovate and Engage</span>
          </h2>
          <p className="text-black mb-8">
          In the competitive world of finance, effective communication is critical for building trust, enhancing customer experiences, and ensuring regulatory compliance. BRIVAS offers cutting-edge communication solutions to meet the unique needs of financial institutions.
          </p>
          
          <div className="space-y-3">
            {items.map((item) => (
              <motion.div 
                key={item.id} 
                className="border border-gray-200 rounded-2xl overflow-hidden"
                initial={{ opacity: 0.9 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                  transition: { duration: 0.2 }
                }}
                animate={{ opacity: 1 }}
              >
                <motion.button
                  className="flex justify-between items-center w-full py-4 px-5 text-left bg-white"
                  onClick={() => toggleItem(item.id)}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-base text-black font-medium">{item.title}</h3>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openItem === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openItem === item.id ? (
                      <Minus className="h-5 w-5 text-[#40196D]" />
                    ) : (
                      <Plus className="h-5 w-5 text-[#40196D]" />
                    )}
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openItem === item.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="py-4 px-5 text-black text-sm border-t border-gray-100">
                        <p>{item.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationFeaturesSection;