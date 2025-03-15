import Link from "next/link";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for startups with low OTP volume.",
      buttonText: "Start for free",
      buttonLink: "/signup",
      buttonStyle: "outline"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses needing a scalable solution.",
      buttonText: "Talk to an expert",
      buttonLink: "/contact",
      buttonStyle: "filled"
    },
    {
      name: "Enterprise",
      description: "Tailored solutions for large enterprises with high OTP requirements.",
      buttonText: "Talk to an expert",
      buttonLink: "/contact",
      buttonStyle: "outline"
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl text-black font-bold text-center mb-4">
        Affordable SMS OTP Pricing for <span className="text-black">Every Business</span>
      </h2>
      <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto">
        Choose a plan that suits your business size and needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200"
          >
            <h3 className="text-2xl text-black font-semibold text-center mb-4">{plan.name}</h3>
            <p className="text-gray-600 text-center mb-12 h-16">{plan.description}</p>
            
            <div className="flex justify-center">
              <Link
                href={plan.buttonLink}
                className={`px-8 py-3 rounded-full text-center ${
                  plan.buttonStyle === "filled"
                    ? "bg-[#40196D] text-white hover:bg-[#40196D]/90"
                    : "border border-[#40196D] text-[#40196D] hover:bg-gray-50"
                } transition-colors font-medium`}
              >
                {plan.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection; 