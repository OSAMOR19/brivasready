const PricingSection = () => {
  const plans = [
    {
      name: "Starter Plan",
      description: "Ideal for small businesses or startups offering basic USSD services.",
      buttonText: "Start for free",
      buttonStyle: "text-[#40196D] bg-white border border-[#40196D] hover:bg-gray-50"
    },
    {
      name: "Growth plan",
      description: "For growing businesses that need more advanced USSD features and greater scalability.",
      buttonText: "Talk to an expert",
      buttonStyle: "text-white bg-[#40196D] hover:bg-[#351458]"
    },
    {
      name: "Enterprise",
      description: "Tailored for large businesses with high-volume USSD interactions and custom requirements.",
      buttonText: "Talk to an expert",
      buttonStyle: "text-[#40196D] bg-white border border-[#40196D] hover:bg-gray-50"
    }
  ];

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Flexible Pricing for Your <span className="text-[#40196D]">USSD</span> Needs
          </h2>
          <p className="text-gray-600">
            Choose the plan that fits your business size and customer engagement needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold mb-4">
                {plan.name}
              </h3>
              <p className="text-gray-600 text-sm mb-8">
                {plan.description}
              </p>
              <button
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection; 