"use client"
import React from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Generate Verification Call",
      description: "When a user initiates an action that requires authentication, your application sends a request to BRIVAS to place a Flash Call."
    },
    {
      title: "BRIVAS Places the Call",
      description: "BRIVAS initiates a call to the user's mobile number, but the call disconnects before being answered."
    },
    {
      title: "User Phone Number Verified",
      description: "The system captures the incoming call to verify that the user's phone number is correct, completing the authentication process."
    },
    {
      title: "Complete Verification",
      description: "Your system is notified that the user's identity has been verified, allowing them to proceed with the requested action."
    }
  ];

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
      {/* How it works section */}
      <div className="text-center mb-8">
        <div className="inline-block bg-white py-2 px-6 rounded-full mb-12">
          <h2 className="text-lg font-medium">How it works</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="bg-[#40196D] text-white p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-white/90 text-sm">{step.description}</p>
          </div>
        ))}
      </div>

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
            className="bg-gray-100 p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
            <p className="text-gray-700 text-sm">{useCase.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection; 