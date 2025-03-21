import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import whyimg from "@/components/Images/pics/poorman.svg"

const IntegrationFeatures = () => {
  const features = [
    {
      title: "Cost-Effective Communication",
      description: "BRIVAS offers affordable communication solutions tailored to the needs and budgets of non-profits, helping you maximize your impact without exceeding your resources."
    },
    {
      title: "Global Connectivity",
      description: "With BRIVAS, you can reach supporters and communities in any part of the world, ensuring your non-profit’s message has a global impact."
    },
    {
      title: "Flexible APIs",
      description: "Our easy-to-use APIs allow you to integrate BRIVAS’s messaging and verification services seamlessly into your existing systems, helping you automate and scale your communication efforts."
    },
    {
      title: "Secure and Reliable",
      description: "Non-profits trust BRIVAS for secure communication solutions, ensuring donor information, volunteer data, and sensitive messages are protected."
    },
    {
      title: "Analytics and Reporting",
      description: "Track the performance of your outreach campaigns, measure donor engagement, and monitor volunteer participation with detailed analytics and reporting."
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl text-black font-semibold mb-4">
          Why  <span className='text-[#40196D]'>Non-Profits</span> Choose <span className="text-[#40196D]">BRIVAS</span>
          </h2>
          <p className="text-gray-600">
          Non-profits rely on effective communication to mobilize supporters, raise funds, and bring attention to their causes. BRIVAS offers tools designed to help non-profit organizations engage their communities, streamline volunteer efforts, and build strong donor relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Placeholder Illustration */}
          <div className="relative">
          <Image
                src={whyimg}
                alt="BRIVAS for startups"
                width={465}
                height={407}
                className="object-contain"
                priority
              /> 
          </div>

          {/* Right side - Features */}
          <div>
            
            <div className=" text-black space-y-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 rounded-full border-2 border-[#A4031F]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationFeatures; 