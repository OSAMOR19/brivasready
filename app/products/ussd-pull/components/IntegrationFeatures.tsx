import Image from 'next/image';
import cartoon from "@/components/Images/pics/collaborate.svg"
const IntegrationFeatures = () => {
  const features = [
    {
      title: "Custom USSD Codes",
      description: "Set up branded USSD shortcodes that users can easily remember."
    },
    {
      title: "Dynamic Menus",
      description: "Design and deploy flexible USSD menus tailored to specific user flows and use cases."
    },
    {
      title: "API Access",
      description: "Integrate with your backend using BRIVAS's robust API for smooth data retrieval and processing."
    },
    {
      title: "Real-Time Updates",
      description: "Update USSD menus and services in real-time, keeping your offerings relevant."
    },
    {
      title: "User Tracking",
      description: "Monitor how users interact with your USSD service, providing valuable insights into their behaviour."
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl text-black font-bold mb-4">
            Seamless <span className="text-[#40196D]">Integration</span> for a Customized Experience
          </h2>
          <p className="text-gray-600">
            Our USSD Pull platform integrates effortlessly with your existing systems and workflows, providing complete customization of menus and services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Placeholder Illustration */}
          <div className="relative">
            <div className=" rounded-2xl flex items-center justify-center">
              {/* Placeholder for illustration */}
              <Image
                src={cartoon}
                alt="BRIVAS for startups"
                width={350}
                height={350}
                className="object-contain"
                priority
              />  
            </div>
          </div>

          {/* Right side - Features */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-[#40196D] mb-4">Features</h3>
            </div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex text-black gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 rounded-full border-2 border-[#B891E5]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
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