import Image from 'next/image';
import dataimg from "@/components/Images/pics/dataanalysis.svg"
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
          <h2 className="text-4xl text-black font-bold mb-4">
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
                <div key={feature.title} className="flex text-black gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full border border-[#B891E5]" />
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
            <div className=" rounded-full  p-6">
            <Image
                src={dataimg}
                alt="BRIVAS for startups"
                width={450}
                height={450}
                priority
              />    
            </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingFeatures; 