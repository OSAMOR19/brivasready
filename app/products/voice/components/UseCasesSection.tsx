import React from "react";

interface UseCase {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface UseCasesSectionProps {
  useCases: UseCase[];
}

const UseCasesSection: React.FC<UseCasesSectionProps> = ({ useCases }) => {
  return (
    <div className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-center mb-12">Common Use Cases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="flex items-start p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-4">
              {useCase.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCasesSection; 