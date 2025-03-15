'use client';
import { useState } from 'react';
import Image from 'next/image';

const BenefitsSection = () => {
  const [openBenefit, setOpenBenefit] = useState('Affordable Pricing');

  const benefits = [
    {
      title: "Bulk SMS",
      content: "Access enterprise-level services at startup-friendly prices. With BRIVAS, you get powerful tools without the heavy financial burden."
    },
    {
      title: "Promotional Campaigns",
      content: "Scale your communication infrastructure as your business grows, without worrying about technical limitations or service disruptions."
    },
    {
      title: "SMS OTP",
      content: "Integrate our APIs seamlessly with your existing systems and workflows with minimal development effort."
    },
    {
      title: "Flash Call",
      content: "Only pay for what you use with our flexible pricing models that adapt to your business needs and usage patterns."
    },
    {
      title: "USSD Pull",
      content: "Connect with customers worldwide through our global network, ensuring reliable delivery across borders."
    },
    {
      title: "Messaging APIs",
      content: "Built on robust infrastructure with high availability and redundancy to ensure your communications never fail."
    }
  ];

  return (
    <div className="py-16 bg-grey-50 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Content and Images */}
        <div className="space-y-6">
          <div>
            <h2 className="text-5xl mt-12 text-[#40196D] font-semibold mb-4">
            Non-Profit Communication Tools
            </h2>
          </div>

          {/* Images Container */}
          <div className="relative h-[300px] mt-12">
            {/* Main Image */}
          </div>
        </div>

        {/* Right Column - Benefits Accordion */}
        <div>
          <div className="space-y-4">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenBenefit(openBenefit === benefit.title ? '' : benefit.title)}
                  className="w-full p-5 flex justify-between items-center text-left"
                >
                  <span className="font-medium text-gray-800 text-lg">{benefit.title}</span>
                  <span className="text-gray-400 text-2xl">
                    {openBenefit === benefit.title ? "—" : "+"}
                  </span>
                </button>
                {openBenefit === benefit.title && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600">{benefit.content}</p>
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

export default BenefitsSection; 