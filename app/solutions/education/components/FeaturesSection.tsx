'use client';
import { useState } from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  const [openFeature, setOpenFeature] = useState('Customer Notifications');

  const features = [
    {
      title: "Customer Notifications",
      content: "Send instant updates about new features, offers, or promotions directly to your users via SMS."
    },
    {
      title: "User Verification",
      content: "Verify user identities securely through SMS OTP, Flash Calls, or other authentication methods to prevent fraud and ensure security."
    },
    {
      title: "Service Accessibility",
      content: "Make your services accessible to all users regardless of internet connectivity through USSD and SMS channels."
    }
  ];

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Grow Fast, Stay Lean</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          With BRIVAS, you can focus on building your product and leave communication infrastructure to us. 
          Whether you're a SaaS startup, an e-commerce platform, or a fintech innovator, our tools provide you with 
          the messaging, verification, and USSD services needed to engage customers and scale efficiently.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Illustration */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md h-[350px]">
            <Image
              src="/images/startup-illustration.svg" // Replace with your actual image path
              alt="Startup team working"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Column - Features Accordion */}
        <div>
          <h3 className="text-xl font-bold text-[#40196D] mb-6">Features</h3>
          <div className="space-y-4">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenFeature(openFeature === feature.title ? '' : feature.title)}
                  className="w-full p-5 flex justify-between items-center text-left"
                >
                  <span className="font-medium text-gray-800 text-lg">{feature.title}</span>
                  <span className="text-gray-400 text-2xl">
                    {openFeature === feature.title ? "—" : "+"}
                  </span>
                </button>
                {openFeature === feature.title && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600">{feature.content}</p>
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