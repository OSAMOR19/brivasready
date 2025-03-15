'use client';
import Link from 'next/link';
import ServiceLogo from '../ServiceLogo';

const ServicesDropdown = () => {
  const services = [
    {
      name: 'SMS OTP',
      description: 'Secure verification via SMS one-time passwords',
      logo: '/components/images/logos/sms-otp-logo.svg', // Update with your actual path
      href: '/products/sms-otp'
    },
    {
      name: 'Flash Call',
      description: 'Quick verification through missed calls',
      logo: '/components/images/logos/flash-call-logo.svg', // Update with your actual path
      href: '/products/flash-call'
    },
    {
      name: 'USSD Pull',
      description: 'Interactive services without internet',
      logo: '/components/images/logos/ussd-pull-logo.svg', // Update with your actual path
      href: '/products/ussd-pull'
    },
    {
      name: 'SMS MO',
      description: 'Receive and process incoming SMS',
      logo: '/components/images/logos/sms-mo-logo.svg', // Update with your actual path
      href: '/products/sms-mo'
    },
    {
      name: 'Bulk SMS',
      description: 'Send messages to multiple recipients',
      logo: '/components/images/logos/bulk-sms-logo.svg', // Update with your actual path
      href: '/products/bulk-sms'
    }
  ];

  return (
    <div className="absolute top-full left-0 mt-2 w-screen max-w-md p-4 bg-white rounded-lg shadow-lg border border-gray-100 grid grid-cols-1 gap-4">
      {services.map((service) => (
        <Link 
          key={service.name} 
          href={service.href}
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ServiceLogo 
            src={service.logo} 
            alt={`${service.name} logo`} 
          />
          <div>
            <h3 className="font-medium text-gray-900">{service.name}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServicesDropdown; 