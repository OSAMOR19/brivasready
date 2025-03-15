'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CommunicationTools = () => {
  const [activeTab, setActiveTab] = useState('Flash Call');

  const tools = [
    {
      id: 'Bulk SMS',
      title: 'Bulk SMS',
      description: 'Send thousands of personalized SMS messages to your customers simultaneously with high deliverability rates and detailed analytics.',
      image: '/images/bulk-sms-placeholder.jpg'
    },
    {
      id: 'SMS OTP',
      title: 'SMS OTP',
      description: 'Secure your applications with one-time passwords delivered via SMS for reliable user verification and authentication.',
      image: '/images/sms-otp-placeholder.jpg'
    },
    {
      id: 'Flash Call',
      title: 'Flash Call',
      description: 'Offer instant, cost-effective verification using Flash Calls, where missed call verification ensures a seamless user experience.',
      image: '/images/flash-call-placeholder.jpg'
    },
    {
      id: 'USSD Pull',
      title: 'USSD Pull',
      description: 'Enable users to access your services via USSD codes, making your platform accessible even without internet connectivity.',
      image: '/images/ussd-pull-placeholder.jpg'
    },
    {
      id: 'Messaging APIs',
      title: 'Messaging APIs',
      description: 'Integrate our powerful messaging capabilities directly into your applications with our easy-to-use, well-documented APIs.',
      image: '/images/messaging-api-placeholder.jpg'
    }
  ];

  const activeTool = tools.find(tool => tool.id === activeTab);

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-[#40196D] mb-16"> Enterprice Communication Tools</h2>
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTab(tool.id)}
                className={`px-6 py-3 rounded-full border ${
                  activeTab === tool.id
                    ? 'bg-[#40196D] text-white'
                    : 'bg-white text-[#40196D] border-[#40196D]'
                } transition-colors`}
              >
                {tool.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-4xl font-bold mb-4">{activeTool?.title}</h3>
            <p className="text-gray-600 mb-8">
              {activeTool?.description}
            </p>
            <Link 
              href="/signup" 
              className="inline-block bg-[#B91C1C] text-white px-6 py-3 rounded-full hover:bg-[#9B1B1B] transition-colors"
            >
              Start for free
            </Link>
          </div>

          {/* Right Image */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative h-[300px] w-full">
              <Image
                src={activeTool?.image || '/images/placeholder.jpg'}
                alt={activeTool?.title || 'Communication tool'}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationTools; 