const WhyChooseSection = () => {
  const reasons = [
    {
      title: "Developer-Friendly",
      content: "Our APIs are easy to implement, allowing startups to integrate messaging and verification with minimal effort and development time.",
      bgColor: "bg-[#40196D]",
      textColor: "text-white"
    },
    {
      title: "Fast Go-to-Market",
      content: "Launch your communication services quickly with pre-built templates, simple integrations, and no need for heavy infrastructure.",
      bgColor: "bg-white",
      textColor: "text-gray-800"
    },
    {
      title: "Free Trial",
      content: "Test our services before committing. Our free trial allows you to explore our platform and see the value we offer firsthand.",
      bgColor: "bg-[#40196D]",
      textColor: "text-white"
    },
    {
      title: "Support",
      content: "Startups can't afford downtime. Our support team is available to ensure your communication services run smoothly, no matter the time or day.",
      bgColor: "bg-[#40196D]",
      textColor: "text-white"
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Why Startups Choose BRIVAS</h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className={`${reason.bgColor} ${reason.textColor} p-8 rounded-xl`}
            >
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className={`${reason.bgColor === 'bg-white' ? 'text-gray-600' : 'text-gray-200'}`}>
                {reason.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection; 