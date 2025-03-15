import React from "react";
import { MessageSquare, Users, ShoppingBag, Bell } from "lucide-react";
import Link from "next/link";

interface UseCase {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface UseCasesSectionProps {
  useCases: UseCase[];
}

const UseCasesSection = () => {
  // Define the useCases array
  const useCases = [
    {
      title: "Customer Support",
      description: "Allow customers to reach your support team directly via SMS for instant assistance.",
      icon: <MessageSquare className="h-6 w-6 text-[#40196D]" />
    },
    {
      title: "Feedback and Surveys",
      description: "Collect feedback, conduct surveys, or run polls via SMS, engaging users in a quick, simple way.",
      icon: <Users className="h-6 w-6 text-[#40196D]" />
    },
    {
      title: "Subscription Management",
      description: "Let users opt-in or opt-out of SMS subscriptions by sending simple text messages.",
      icon: <ShoppingBag className="h-6 w-6 text-[#40196D]" />
    },
    {
      title: "Promotions and Offers",
      description: "Engage users by sending offers and receiving responses, enabling two-way promotional campaigns.",
      icon: <Bell className="h-6 w-6 text-[#40196D]" />
    },
    {
      title: "Service Requests",
      description: "Handle service requests, such as bookings, reservations, or product inquiries via SMS.",
      icon: <MessageSquare className="h-6 w-6 text-[#40196D]" />
    }
  ];

  return (
    <div className="mb-20 py-16">
      {/* Use cases section */}
      <div className="text-center mb-12">
        <div className="inline-block bg-[#40196D] text-white py-3 px-8 rounded-full">
          <h2 className="text-lg font-medium">Use case</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* First row - 3 cards */}
        <div className="bg-gray-200 p-6 rounded-xl">
          <h3 className="text-[#40196D] text-xl font-semibold mb-3 text-center">{useCases[0].title}</h3>
          <p className="text-gray-700 text-center">{useCases[0].description}</p>
        </div>
        
        <div className="bg-gray-200 p-6 rounded-xl">
          <h3 className="text-[#40196D] text-xl font-semibold mb-3 text-center">{useCases[1].title}</h3>
          <p className="text-gray-700 text-center">{useCases[1].description}</p>
        </div>
        
        <div className="bg-gray-200 p-6 rounded-xl">
          <h3 className="text-[#40196D] text-xl font-semibold mb-3 text-center">{useCases[2].title}</h3>
          <p className="text-gray-700 text-center">{useCases[2].description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Second row - 2 cards and button */}
        <div className="bg-gray-200 p-6 rounded-xl">
          <h3 className="text-[#40196D] text-xl font-semibold mb-3 text-center">{useCases[3].title}</h3>
          <p className="text-gray-700 text-center">{useCases[3].description}</p>
        </div>
        
        <div className="bg-gray-200 p-6 rounded-xl">
          <h3 className="text-[#40196D] text-xl font-semibold mb-3 text-center">{useCases[4].title}</h3>
          <p className="text-gray-700 text-center">{useCases[4].description}</p>
        </div>
        
        <div className="bg-[#40196D] p-6 rounded-xl flex justify-center items-center">
          <Link 
            href="/signup" 
            className="px-8 py-3 bg-white text-[#40196D] rounded-full hover:bg-gray-100 transition-colors font-medium"
          >
            Start for free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection; 