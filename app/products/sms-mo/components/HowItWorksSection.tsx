import React from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Users Send Messages",
      description: "Customers or users send text messages to your dedicated short code."
    },
    {
      title: "BRIVAS Receives the Message",
      description: "BRIVAS instantly processes the incoming message, ensuring it's delivered securely to your platform."
    },
    {
      title: "Real-Time Notifications",
      description: "Your system receives the message via a webhook, allowing you to process it and send an automated or manual response."
    },
    {
      title: "Engage Users",
      description: "Respond to users with the information they need, complete actions like opt-in confirmations, support requests, or inquiries."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* How it works section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white py-2 px-6 rounded-full">
            <h2 className="text-lg font-medium text-[#40196D]">How it works</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-[#40196D] text-white p-8 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">{step.title}</h3>
              <p className="text-white/90 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection; 