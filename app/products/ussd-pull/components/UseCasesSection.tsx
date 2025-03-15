'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const UseCasesSection = () => {
  const [openCase, setOpenCase] = useState('Subscription Management');

  const useCases = [
    {
      title: "Banking and Financial Services",
      content: "Enable customers to check balances, transfer funds, and perform basic banking operations through USSD."
    },
    {
      title: "Mobile Airtime Recharge",
      content: "Allow users to purchase airtime and data bundles directly through USSD menus."
    },
    {
      title: "Surveys and Feedback",
      content: "Collect customer feedback and conduct surveys through simple USSD interactions."
    },
    {
      title: "Subscription Management",
      content: "Allow customers to subscribe or unsubscribe from services like news, weather, or alerts via USSD."
    },
    {
      title: "Information Retrieval",
      content: "Provide instant access to information such as account details, service status, or general inquiries."
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#40196D] text-white py-2 px-6 rounded-full">
            <h2 className="text-lg font-medium">Use cases</h2>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {useCases.map((useCase) => (
            <div 
              key={useCase.title}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
            >
              <button
                onClick={() => setOpenCase(openCase === useCase.title ? '' : useCase.title)}
                className="w-full p-4 flex justify-between items-center text-left hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">{useCase.title}</span>
                {openCase === useCase.title ? (
                  <Minus className="h-5 w-5 text-gray-400" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-400" />
                )}
              </button>
              {openCase === useCase.title && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600">{useCase.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection; 