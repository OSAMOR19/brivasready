'use client';
import { useState } from 'react';

const UseCasesSection = () => {
  const [openCase, setOpenCase] = useState('Ride-Hailing and Mobility Startups');

  const useCases = [
    {
      title: "Disaster Relief Organizations",
      content: "Coordinate relief efforts by keeping volunteers informed with real-time updates via SMS, and communicate with local communities about available aid"
    },
    {
      title: "Education-Focused Non-Profits",
      content: "Send reminders to students and parents about educational programs, scholarships, or upcoming events, ensuring maximum attendance and participation."
    },
    {
      title: "Environmental Conservation Groups",
      content: "Run awareness campaigns through Bulk SMS to promote environmental initiatives, fundraisers, and global climate action efforts"
    },
    {
      title: "Faith-Based Organizations",
      content: "Notify members about services, events, and fundraising drives via SMS, ensuring engagement and support for your religious community."
    },
    {
      title: "Healthcare Non-Profits",
      content: "Send important health information, reminders, and updates to patients and communities using SMS, especially in areas with low internet connectivity."
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#40196D] text-white py-2 px-6 rounded-full">
            <h2 className="text-lg font-medium">Use cases</h2>
          </div>
        </div>

        {/* Use Cases Accordion */}
        <div className="space-y-4">
          {useCases.map((useCase) => (
            <div 
              key={useCase.title}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenCase(openCase === useCase.title ? '' : useCase.title)}
                className="w-full p-5 flex justify-between items-center text-left"
              >
                <span className="font-medium text-gray-800 text-lg">{useCase.title}</span>
                <span className="text-gray-400 text-2xl">
                  {openCase === useCase.title ? "—" : "+"}
                </span>
              </button>
              {openCase === useCase.title && (
                <div className="px-5 pb-5">
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