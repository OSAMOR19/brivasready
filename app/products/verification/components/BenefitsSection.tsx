import React from "react";

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Verification</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection; 