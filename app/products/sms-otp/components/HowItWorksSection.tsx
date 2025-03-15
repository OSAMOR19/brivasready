import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const features = [
    {
      title: "Real-Time Delivery",
      description: "Deliver OTPs in seconds to ensure a smooth user experience. No delays, just fast verification.",
      icon: "⚡"
    },
    {
      title: "Global Reach",
      description: "Send SMS to users anywhere in the world, ensuring your service is accessible globally.",
      icon: "🌎"
    },
    {
      title: "High Security",
      description: "Use our advanced systems to ensure your verification process remains secure and compliant with global standards.",
      icon: "🔒"
    },
    {
      title: "Customizable Expiry",
      description: "Set custom expiration times for your OTPs based on your security needs.",
      icon: "⏱️"
    },
    {
      title: "Detailed Logs & Reports",
      description: "Access comprehensive analytics and reports to monitor service performance and user verification patterns.",
      icon: "📊"
    },
    {
      title: "Easy API Integration",
      description: "Integrate with our developer-friendly API using our comprehensive documentation and support.",
      icon: "🔌"
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-4">Seamless User <span className="text-[#40196D]">Verification</span> with <span className="text-[#40196D]">SMS OTP</span></h2>
      <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto">
        BRIVAS SMS OTP provides a secure, fast, and reliable method for user authentication. Ensure your users' identities through one-time passwords (OTP) sent via SMS for login, transaction validation, and more.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600 mb-6">{feature.description}</p>
            <div className="mt-auto">
              <Link 
                href="/signup" 
                className="inline-flex items-center text-[#40196D] font-medium hover:underline"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                  <ArrowRight className="h-4 w-4" />
                </div>
                Sign up
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection; 