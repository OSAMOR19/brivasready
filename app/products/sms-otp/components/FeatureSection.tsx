import { Upload, Globe, MessageSquare, Clock, Webhook } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      title: "API Integration",
      description: "Our developer-friendly API makes it easy to add SMS OTP to your app.",
      icon: <Upload className="h-6 w-6 text-white" />
    },
    {
      title: "Global Reach",
      description: "Define the number of digits in your OTP.",
      icon: <Globe className="h-6 w-6 text-white" />
    },
    {
      title: "Message Templates",
      description: "Create custom templates for the SMS OTP messages sent to your users.",
      icon: <MessageSquare className="h-6 w-6 text-white" />
    },
    {
      title: "Custom Expiration",
      description: "Set custom OTP expiration times based on the security level required for each action.",
      icon: <Clock className="h-6 w-6 text-white" />
    },
    {
      title: "Webhook Support",
      description: "Set up webhooks for tracking OTP usage and delivery in real-time.",
      icon: <Webhook className="h-6 w-6 text-white" />
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-4">
        Seamless User <span className="text-[#40196D]">Verification</span> with <span className="text-[#40196D]">SMS OTP</span>
      </h2>
      <p className="text-gray-700 text-center mb-12 max-w-4xl mx-auto">
        Easily integrate SMS OTP into your application using our API. Customize the OTP length, expiration time, and message content to suit your business needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.slice(0, 3).map((feature, index) => (
          <div key={index} className="bg-[#40196D] text-white p-6 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-[#40196D] border border-white/30 flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="opacity-90">{feature.description}</p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {features.slice(3, 5).map((feature, index) => (
          <div key={index} className="bg-[#40196D] text-white p-6 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-[#40196D] border border-white/30 flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="opacity-90">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection; 