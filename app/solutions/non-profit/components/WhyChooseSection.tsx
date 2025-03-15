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
          <h2 className="text-5xl text-[#40196D] font-semibold mb-4">
          Why Non-Profits Choose BRIVAS
          </h2>
          <p className="text-gray-600">
          Non-profits rely on effective communication to mobilize supporters, raise funds, and bring attention to their causes. BRIVAS offers tools designed to help non-profit organizations engage their communities, streamline volunteer efforts, and build strong donor relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Placeholder Illustration */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
              {/* Placeholder for illustration */}
              <div className="text-gray-400 text-center p-8">
                <svg 
                  className="w-32 h-32 mx-auto mb-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p>Illustration Placeholder</p>
              </div>
            </div>
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