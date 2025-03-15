const HowItWorksSection = () => {
  const steps = [
    {
      title: "User Dials USSD Code",
      description: "Your customers dial the specific USSD code (e.g., *1234#) to initiate a session with your service.",
      bgColor: "bg-[#40196D]",
      textColor: "text-white"
    },
    {
      title: "BRIVAS Processes the Request",
      description: "Our platform instantly processes the USSD request and connects it to your service or database.",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      borderColor: "border border-gray-200"
    },
    {
      title: "Interactive Menu",
      description: "Users navigate through interactive menus, selecting options or entering information as needed.",
      bgColor: "bg-[#40196D]",
      textColor: "text-white"
    },
    {
      title: "Retrieve Service",
      description: "Information is delivered to the user immediately, ensuring a seamless and fast experience.",
      bgColor: "bg-[#40196D]",
      textColor: "text-white"
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#40196D] text-white py-2 px-6 rounded-full">
            <h2 className="text-lg font-medium">How it works</h2>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`${step.bgColor} ${step.textColor} ${
                step.borderColor || ''
              } p-6 rounded-2xl`}
            >
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className={`${
                step.bgColor === 'bg-white' ? 'text-gray-600' : 'text-gray-200'
              }`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection; 