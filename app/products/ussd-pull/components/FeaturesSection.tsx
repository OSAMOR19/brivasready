'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';

// Please provide the correct path to your images
// For example, if they're in the public folder:
// const img1Path = '/images/img1.svg';
// const img2Path = '/images/img2.svg';

const FeaturesSection = () => {
  const [openFeature, setOpenFeature] = useState('Offline Access');

  const features = [
    {
      title: "Offline Access",
      content: "USSD works over GSM networks, making your services available even when users have no internet access."
    },
    {
      title: "Instant Connectivity",
      content: "Connect users to your services instantly through USSD channels."
    },
    {
      title: "Cost-Efficient",
      content: "Reduce operational costs with our efficient USSD solutions."
    },
    {
      title: "Flexible Menus",
      content: "Create and customize USSD menus according to your needs."
    },
    {
      title: "Scalable Platform",
      content: "Scale your USSD services as your business grows."
    },
    {
      title: "Quick Deployment",
      content: "Deploy your USSD services rapidly with minimal setup time."
    },
    {
      title: "No App Required",
      content: "Users can access your services without installing any applications."
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column - Features Accordion */}
        <div className="space-y-4">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="border rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenFeature(openFeature === feature.title ? '' : feature.title)}
                className="w-full p-4 flex justify-between items-center text-left hover:bg-gray-50"
              >
                <span className="font-medium">{feature.title}</span>
                {openFeature === feature.title ? (
                  <Minus className="h-5 w-5 text-gray-400" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-400" />
                )}
              </button>
              {openFeature === feature.title && (
                <div className="p-4 bg-gray-50 border-t">
                  <p className="text-gray-600">{feature.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column - Content and Images */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">
              Reliable and Instant Access to Services via USSD
            </h2>
            <p className="text-gray-600">
              With BRIVAS USSD Pull, users can retrieve information and engage with services directly from their mobile phones, without the need for data or an internet connection. Ideal for markets with low internet penetration or for services that need to be accessible at all times.
            </p>
            <button className="bg-[#40196D] text-white px-6 py-3 rounded-full hover:bg-[#351458] transition-colors">
              Start for free
            </button>
          </div>

          {/* Images Container */}
          <div className="relative h-[300px]">
            {/* First Image */}
            <div className="absolute left-0 bottom-0 w-2/3 h-[250px] bg-gray-100 rounded-lg overflow-hidden">
              {/* Replace with your actual image path */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image 1</span>
              </div>
            </div>
            
            {/* Second Image - Overlapping */}
            <div className="absolute right-0 top-0 w-1/2 h-[200px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-full">
                {/* Replace with your actual image path */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Image 2</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-medium mb-1">Conducive E-learning Environment</p>
                  <p className="text-sm">Stay focused wherever</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 