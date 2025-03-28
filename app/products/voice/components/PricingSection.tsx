import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  description: string;
  price: number;
  features: string[];
  buttonText: string;
  buttonLink: string;
  featured: boolean;
}

interface PricingSectionProps {
  pricingPlans: PricingPlan[];
}

const PricingSection: React.FC<PricingSectionProps> = ({ pricingPlans }) => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Choose the plan that works best for your business needs and scale as you grow.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index} 
            className={`p-8 rounded-2xl border ${
              plan.featured 
                ? "border-[#40196D] shadow-lg relative" 
                : "border-gray-200"
            }`}
          >
            {plan.featured && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#40196D] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link 
              href={plan.buttonLink} 
              className={`block w-full py-3 text-center rounded-lg font-medium ${
                plan.featured 
                  ? "bg-[#40196D] text-white hover:bg-[#40196D]/90" 
                  : "border border-gray-300 hover:bg-gray-50"
              } transition-colors`}
            >
              {plan.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection; 