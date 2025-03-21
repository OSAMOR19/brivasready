import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FeaturesSection = () => {
  const [openItem, setOpenItem] = useState<string | null>("api");
  
  const items = [
    {
      id: "api",
      title: "Developer API",
      description: "Our simple API allows you to integrate Flash Call verification in no time."
    },
    {
      id: "retry",
      title: "Call Retry Settings",
      description: "Set custom retry attempts for failed verification calls"
    },
    {
      id: "callback",
      title: "Callback URL",
      description: "Configure a webhook to receive real-time notifications of call status and delivery."
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="mb-20 py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl text-black font-semibold text-center mb-4">
            Easy Integration and Flexible <br/> Customization
          </h2>
          <p className="text-gray-700 text-center mb-12">
            Integrate Flash Call into your applications effortlessly with BRIVAS's developer-friendly API. Customize the call setup to suit your specific business needs and user flows.
          </p>
          
          <div className="text-black space-y-4">
            {items.map((item) => (
              <motion.div 
                key={item.id} 
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
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
                  <h3 className="text-base font-medium">{item.title}</h3>
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
                      <div className="py-4 px-5 text-gray-700 text-sm border-t border-gray-100">
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

export default FeaturesSection;