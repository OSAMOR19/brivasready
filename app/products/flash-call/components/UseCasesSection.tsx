import React from "react";

const UseCasesSection = () => {
  const useCases = [
    {
      title: "User Login",
      description: "Provide fast, hassle-free login experiences by verifying users with a missed call."
    },
    {
      title: "Transaction Approvals",
      description: "Verify sensitive actions like payment confirmations or account changes with a Flash Call."
    },
    {
      title: "Onboarding",
      description: "Efficiently onboard new users by verifying their phone numbers with an automated call."
    }
  ];

  return (
    <div className="mb-20">
      {/* Use cases section */}
      <div className="text-center mb-8">
        <div className="inline-block bg-[#40196D] text-white py-2 px-6 rounded-full mb-12">
          <h2 className="text-lg font-medium">Use case</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <div 
            key={index} 
            className="bg-gray-200 p-6 rounded-xl"
          >
            <h3 className="text-xl text-black font-semibold text-[#40196D] mb-3">{useCase.title}</h3>
            <p className="text-gray-700 text-sm">{useCase.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCasesSection; 