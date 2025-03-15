const TrackingFeatures = () => {
  const features = [
    {
      title: "Real-Time Logs",
      description: "View logs of user interactions in real-time, including session times and menu navigation."
    },
    {
      title: "Usage Analytics",
      description: "Analyze user behavior, session frequency, and popular service options to improve customer experience."
    },
    {
      title: "Session Reports",
      description: "Generate detailed reports on USSD usage, including success rates and failed sessions."
    },
    {
      title: "Performance Insights",
      description: "Gain valuable insights into network performance and service uptime."
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Track Usage and <span className="text-[#40196D]">Optimize USSD</span> Performance
          </h2>
          <p className="text-gray-600">
            BRIVAS provides comprehensive tracking tools that allow you to monitor user interactions, service performance, and key metrics for optimizing your USSD pull service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Features */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-[#40196D]">Features</h3>
            </div>
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full border border-[#40196D]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Analytics Illustration Placeholder */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                {/* Placeholder Analytics Icon */}
                <svg 
                  className="w-24 h-24 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              {/* Decorative Elements */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-2 bg-gray-100 rounded"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingFeatures; 