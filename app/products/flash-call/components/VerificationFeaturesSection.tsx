import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import finepic from "@/components/Images/pics/verificationimg.svg"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const VerificationFeaturesSection = () => {
  const [openItem, setOpenItem] = useState<string | null>("instant");
  
  const items = [
    {
      id: "instant",
      title: "Instant Authentication",
      description: "Authenticate users in seconds with a simple phone call."
    },
    {
      id: "noinput",
      title: "No Input Required",
      description: "The user doesn't need to manually input any code; the call itself verifies their identity."
    },
    {
      id: "global",
      title: "Global Coverage",
      description: "Reach users across the globe, with Flash Call services available in over 150 countries."
    },
    {
      id: "cost",
      title: "Cost-Effective",
      description: "Flash Call is a cheaper alternative to SMS-based verification methods, reducing costs while maintaining security."
    },
    {
      id: "secure",
      title: "Secure and Reliable",
      description: "Our platform ensures secure and reliable call delivery, giving you peace of mind."
    },
    {
      id: "reports",
      title: "Real-Time Reports",
      description: "Get real-time delivery reports and analytics for every verification attempt."
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="mb-20 pt-20">
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="md:w-1/2">
          <div className="relative h-[400px] w-full">
            <Image 
              src={finepic} 
              alt="Flash Call Verification" 
              className="object-contain"
            />
          </div>
        </div>
        
        <div className="md:w-1/2">
          <h2 className="text-5xl text-black font-semibold mb-6">
            Effortless and Cost-Effective <span className="text-[#40196D]">User Verification</span>
          </h2>
          <p className="text-black mb-8">
            Maximize value, and minimize costs. Our innovative tools adapt to your needs. Plus, 24/7 customer support clears doubts and answers queries. Choose smarter solutions, choose us!
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