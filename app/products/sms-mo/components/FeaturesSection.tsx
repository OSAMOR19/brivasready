import React from "react";
import { MessageSquare, Zap, Globe, BarChart2, Code, RefreshCw } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeaturesSectionProps {
  features: Feature[];
}

const FeaturesSection = () => {
  // Define the features array
  const features = [
    {
      title: "Two-Way Communication",
      description: "Enable direct conversations with your customers through SMS.",
      icon: <MessageSquare className="h-6 w-6 text-[#40196D]" />
    },
    {
      title: "Instant Delivery",
      description: "Receive messages from your customers in real-time.",
      icon: <Zap className="h-6 w-6 text-[#40196D]" />
    },
    {
      title: "Global Reach",
      description: "Accept messages from customers worldwide with our extensive network.",
      icon: <Globe className="h-6 w-6 text-[#40196D]" />
    },
    {
      title: "Analytics Dashboard",
      description: "Track message volume, engagement, and other key metrics.",
      icon: <BarChart2 className="h-6 w-6 text-[#40196D]" />
    },
    {
      title: "API Integration",
      description: "Easily integrate with your existing systems through our comprehensive API.",
      icon: <Code className="h-6 w-6 text-[#40196D]" />
    },
    {
      title: "Automated Responses",
      description: "Set up automated replies based on message content or keywords.",
      icon: <RefreshCw className="h-6 w-6 text-[#40196D]" />
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection; 