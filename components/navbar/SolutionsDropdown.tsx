'use client';
import Link from 'next/link';
import ServiceLogo from '../ServiceLogo';

const SolutionsDropdown = () => {
  const solutions = [
    {
      name: 'Startups',
      description: 'Communication solutions for growing businesses',
      logo: '/components/images/logos/startup-logo.svg', // Update with your actual path
      href: '/solutions/startup'
    },
    {
      name: 'Enterprise',
      description: 'Scalable solutions for large organizations',
      logo: '/components/images/logos/enterprise-logo.svg', // Update with your actual path
      href: '/solutions/enterprise'
    },
    {
      name: 'Developers',
      description: 'APIs and tools for developers',
      logo: '/components/images/logos/developer-logo.svg', // Update with your actual path
      href: '/solutions/developers'
    }
  ];

  return (
    <div className="absolute top-full left-0 mt-2 w-screen max-w-md p-4 bg-white rounded-lg shadow-lg border border-gray-100 grid grid-cols-1 gap-4">
      {solutions.map((solution) => (
        <Link 
          key={solution.name} 
          href={solution.href}
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ServiceLogo 
            src={solution.logo} 
            alt={`${solution.name} logo`} 
          />
          <div>
            <h3 className="font-medium text-gray-900">{solution.name}</h3>
            <p className="text-sm text-gray-600">{solution.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SolutionsDropdown; 