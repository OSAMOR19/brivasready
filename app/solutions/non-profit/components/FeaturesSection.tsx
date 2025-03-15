const IntegrationFeatures = () => {
  const features = [
    {
      title: "Fundraising Campaigns",
      description: "Use Bulk SMS to send targeted appeals and updates to your donor base, ensuring maximum engagement and support for your mission."
    },
    {
      title: "Event Coordination",
      description: "Keep volunteers informed and aligned through SMS updates, ensuring smooth coordination and participation in your events."
    },
    {
      title: "Community Outreach",
      description: "Use our scalable messaging platform to reach out to communities with updates, announcements, or calls to action, making sure your message gets heard."
    },
    {
      title: "Secure Donor Verification",
      description: "With SMS OTP, donors can securely verify their identities and payments, ensuring a trusted and secure fundraising experience."
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-5xl text-[#40196D] font-semibold mb-4">
          Strengthen Your Outreach and Engagement
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
                    <div className="w-5 h-5 rounded-full border-2 border-[#B891E5]" />
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