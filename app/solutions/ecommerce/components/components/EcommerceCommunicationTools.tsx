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
    <div className="py-16 bg-grey-100 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Content and Images */}
        <div className=" py-14 space-y-6">
          <div>
            <h2 className="text-5xl  text-black font-semibold mb-4">
            E-Commerce Communication Tools
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
                className={`border ${openBenefit === benefit.title ? 'border-[#CC2B47] bg-[#CC2B47]' : 'border-gray-200 bg-white'} rounded-2xl overflow-hidden`}
              >
                <button
                  onClick={() => setOpenBenefit(openBenefit === benefit.title ? '' : benefit.title)}
                  className="w-full p-5 flex justify-between items-center text-left"
                >
                  <span className={`font-medium ${openBenefit === benefit.title ? 'text-white' : 'text-gray-800'} text-lg`}>{benefit.title}</span>
                  <span className={`${openBenefit === benefit.title ? 'text-white' : 'text-gray-400'} text-2xl`}>
                    {openBenefit === benefit.title ? "—" : "+"}
                  </span>
                </button>
                {openBenefit === benefit.title && (
                  <div className="px-5 pb-5 text-white">
                    <p>{benefit.content}</p>
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