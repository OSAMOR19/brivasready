import { useState } from "react";
import { Minus, Plus } from "lucide-react";

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
      description: "Configure retry attempts and intervals to ensure successful verification."
    },
    {
      id: "callback",
      title: "Callback URL",
      description: "Set up webhook endpoints to receive real-time verification status updates."
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="mb-20 py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl text-black font-bold text-center mb-4">
            Easy Integration and Flexible Customization
          </h2>
          <p className="text-gray-700 text-center mb-12">
            Integrate Flash Call into your applications effortlessly with BRIVAS's developer-friendly API. Customize the call setup to suit your specific business needs and user flows.
          </p>
          
          <div className=" text-black space-y-4">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  className="flex justify-between items-center w-full py-4 px-5 text-left"
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

export default FeaturesSection; 