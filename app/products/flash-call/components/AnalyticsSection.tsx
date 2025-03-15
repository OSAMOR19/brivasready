import Image from "next/image";
import { ClipboardList, BarChart2, AlertCircle } from "lucide-react";

const AnalyticsSection = () => {
  const features = [
    {
      title: "Call Logs",
      description: "Access detailed logs for every Flash Call, including status, timestamps, and more",
      icon: <ClipboardList className="h-5 w-5 text-[#40196D]" />
    },
    {
      title: "Delivery Insights",
      description: "Analyze the success rates of Flash Calls in real time.",
      icon: <BarChart2 className="h-5 w-5 text-[#40196D]" />
    },
    {
      title: "Error Handling",
      description: "Quickly identify and resolve any issues with failed or undelivered calls.",
      icon: <AlertCircle className="h-5 w-5 text-[#40196D]" />
    }
  ];

  return (
    <div className="mb-20 py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              Monitor and Analyze Every Call in Real-Time
            </h2>
            <p className="text-gray-700 mb-8">
              BRIVAS offers real-time monitoring tools, allowing you to track call delivery and success rates. View detailed logs and reports for each Flash Call.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#F3EEFF] flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="relative h-[300px] w-full">
                <Image 
                  src="/placeholder.svg?height=300&width=400" 
                  alt="Analytics Dashboard" 
                  fill
                  className="object-contain"
                />
                {/* Replace with your actual analytics dashboard image */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection; 