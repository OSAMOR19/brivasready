import { useState } from "react";
import { Minus, Plus } from "lucide-react";

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
      description: "Users don't need to enter any codes. The system automatically verifies their phone number when they receive the call."
    },
    {
      id: "global",
      title: "Global Coverage",
      description: "Our flash call verification works in over 200 countries, ensuring your users can be verified anywhere."
    },
    {
      id: "cost",
      title: "Cost-Effective",
      description: "Flash calls are more cost-effective than SMS, especially for global verification needs."
    },
    {
      id: "secure",
      title: "Secure and Reliable",
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
    <div className="mb-20">
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="md:w-1/2">
          <div className="relative h-[400px] w-full">
            <img 
              src="/placeholder.svg?height=400&width=400" 
              alt="Flash Call Verification" 
              className="object-contain"
            />
            {/* Replace with your actual image */}
          </div>
        </div>
        
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">
            Effortless and Cost-Effective <span className="text-[#40196D]">User Verification</span>
          </h2>
          <p className="text-gray-700 mb-8">
            Maximize value, and minimize costs. Our innovative tools adapt to your needs. Plus, 24/7 customer support clears doubts and answers queries. Choose smarter solutions, choose us!
          </p>
          
          <div className="space-y-2">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full py-4 px-5 text-left bg-white"
                  onClick={() => toggleItem(item.id)}
                >
                  <h3 className="text-base font-medium">{item.title}</h3>
                  {openItem === item.id ? (
                    <Minus className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openItem === item.id && (
                  <div className="py-3 px-5 text-gray-700 text-sm border-t border-gray-100">
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationFeaturesSection; 