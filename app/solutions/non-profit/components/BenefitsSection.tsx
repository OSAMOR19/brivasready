'use client';
import { useState } from 'react';
import Image from 'next/image';

const BenefitsSection = () => {
  const [openBenefit, setOpenBenefit] = useState('Affordable Pricing');

  const benefits = [
    {
      title: "Affordable Pricing",
      content: "Access enterprise-level services at startup-friendly prices. With BRIVAS, you get powerful tools without the heavy financial burden."
    },
    {
      title: "Rapid Scalability",
      content: "Scale your communication infrastructure as your business grows, without worrying about technical limitations or service disruptions."
    },
    {
      title: "Easy Integration",
      content: "Integrate our APIs seamlessly with your existing systems and workflows with minimal development effort."
    },
    {
      title: "Pay-As-You-Grow",
      content: "Only pay for what you use with our flexible pricing models that adapt to your business needs and usage patterns."
    },
    {
      title: "Global Reach",
      content: "Connect with customers worldwide through our global network, ensuring reliable delivery across borders."
    },
    {
      title: "Reliable Infrastructure",
      content: "Built on robust infrastructure with high availability and redundancy to ensure your communications never fail."
    }
  ];

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Benefits Accordion */}
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

        {/* Right Column - Content and Images */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl text-black font-bold mb-4">
            BRIVAS for Non-Profits: Amplify Your Mission
            </h2>
            <p className="text-gray-600 mb-6">
            At BRIVAS, we understand the importance of seamless communication in furthering the goals of non-profits. Our solutions are designed to help you reach your audience, raise awareness, and coordinate your efforts, all while staying within budget.
            </p>
            <button className="bg-[#40196D] text-white px-6 py-3 rounded-full hover:bg-[#9B1B1B] transition-colors">
              Start for free
            </button>
          </div>

          {/* Images Container */}
          <div className="relative h-[300px] mt-12">
            {/* Main Image */}
            <div className="absolute left-0 bottom-0 w-3/4 h-[200px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/fuel-image-1.jpg" // Update with your actual image path
                alt="BRIVAS for startups"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Overlapping Image */}
            <div className="absolute right-0 top-0 w-1/2 h-[200px] bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-full">
                <Image
                  src="/images/fuel-image-2.jpg" // Update with your actual image path
                  alt="E-learning Environment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                  <div>
                    <p className="font-medium">Conducive E-learning Environment</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-sm">Stay focused wherever</p>
                    <button className="bg-white text-[#40196D] px-4 py-1 rounded-full text-xs">
                      Start for free
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection; 