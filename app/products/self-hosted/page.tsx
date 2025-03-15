import Link from "next/link"
import Image from "next/image"
import { Layout, Server, Shield, Database, Check, Code, Settings } from "lucide-react"

export default function SelfHostedPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Self-Hosted Communication Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Deploy our powerful communication platform on your own infrastructure for complete control, security, and customization.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90 transition-colors"
            >
              Contact Sales
            </Link>
            <Link 
              href="/products/self-hosted#deployment" 
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Deployment Options
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image 
              src="/placeholder.svg?height=400&width=600" 
              alt="Self-Hosted Infrastructure" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Self-Hosted</h2>
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

      {/* Features Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deployment Options Section */}
      <div id="deployment" className="mb-20 scroll-mt-20">
        <h2 className="text-3xl font-bold text-center mb-4">Deployment Options</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Choose the deployment option that best fits your organization's needs and infrastructure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deploymentOptions.map((option, index) => (
            <div key={index} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 rounded-xl bg-[#40196D]/10 flex items-center justify-center mb-6">
                {option.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{option.title}</h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              <ul className="space-y-3 mb-8">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href={option.buttonLink} 
                className="text-[#40196D] font-medium flex items-center"
              >
                {option.buttonText}
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Process Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-4">Implementation Process</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Our team will guide you through every step of the implementation process.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#40196D] text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Self-Hosted vs. Cloud Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200"></th>
                <th className="p-4 text-center bg-gray-50 border-b-2 border-gray-200">
                  <div className="font-semibold text-lg">Self-Hosted</div>
                  <div className="text-sm text-gray-500">On your infrastructure</div>
                </th>
                <th className="p-4 text-center bg-gray-50 border-b-2 border-gray-200">
                  <div className="font-semibold text-lg">Cloud</div>
                  <div className="text-sm text-gray-500">Managed by Brivas</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-4 border-b border-gray-200 font-medium">{item.feature}</td>
                  <td className="p-4 border-b border-gray-200 text-center">
                    {item.selfHosted === true ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : item.selfHosted === false ? (
                      <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      item.selfHosted
                    )}
                  </td>
                  <td className="p-4 border-b border-gray-200 text-center">
                    {item.cloud === true ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : item.cloud === false ? (
                      <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      item.cloud
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#40196D]/5 rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to take control of your communication infrastructure?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact our team to learn more about our self-hosted solutions and how they can benefit your organization.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/contact" 
            className="px-6 py-3 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90 transition-colors"
          >
            Contact Sales
          </Link>
          <Link 
            href="/resources/documentation" 
            className="px-6 py-3 border border-gray-300 bg-white rounded-lg hover:bg-gray-50 transition-colors"
          >
            View Documentation
          </Link>
        </div>
      </div>
    </div>
  )
}

// Benefits data
const benefits = [
  {
    title: "Complete Control",
    description: "Maintain full control over your communication infrastructure, data, and security policies.",
    icon: <Settings className="w-6 h-6 text-[#40196D]" />,
  },
  {
    title: "Data Sovereignty",
    description: "Keep all your data within your own infrastructure and comply with local data regulations.",
    icon: <Database className="w-6 h-6 text-[#40196D]" />,
  },
  {
    title: "Enhanced Security",
    description: "Implement your own security measures and integrate with your existing security infrastructure.",
    icon: <Shield className="w-6 h-6 text-[#40196D]" />,
  },
]

// Features data
const features = [
  {
    title: "Customizable Architecture",
    description: "Tailor the deployment to your specific needs with flexible configuration options and modular components.",
    icon: <Layout className="w-6 h-6 text-[#40196D]" />,
  },
  {
    title: "Enterprise Integration",
    description: "Seamlessly integrate with your existing enterprise systems, including CRM, ERP, and authentication services.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>,
  },
  {
    title: "Scalable Infrastructure",
    description: "Scale your communication platform horizontally or vertically to handle growing volumes of messages and users.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>,
  },
  {
    title: "Comprehensive API",
    description: "Access all platform features through our well-documented API, enabling deep integration with your applications.",
    icon: <Code className="w-6 h-6 text-[#40196D]" />,
  },
]

// Deployment options data
const deploymentOptions = [
  {
    title: "On-Premises",
    description: "Deploy on your own physical servers within your data center for maximum control.",
    icon: <Server className="w-8 h-8 text-[#40196D]" />,
    features: [
      "Complete control over hardware",
      "Physical security management",
      "Compliance with strict data regulations",
      "Integration with existing data center infrastructure"
    ],
    buttonText: "Learn more about on-premises",
    buttonLink: "/contact"
  },
  {
    title: "Private Cloud",
    description: "Deploy in your private cloud environment for a balance of control and flexibility.",
    icon: <svg className="w-8 h-8 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>,
    features: [
      "Leverage existing cloud infrastructure",
      "Scalability and flexibility",
      "Reduced hardware management",
      "Private network security"
    ],
    buttonText: "Explore private cloud options",
    buttonLink: "/contact"
  },
  {
    title: "Hybrid Deployment",
    description: "Combine on-premises and cloud components for a tailored solution.",
    icon: <svg className="w-8 h-8 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>,
    features: [
      "Best of both worlds",
      "Gradual migration path",
      "Optimized resource allocation",
      "Flexible scaling options"
    ],
    buttonText: "Discover hybrid solutions",
    buttonLink: "/contact"
  }
]

// Implementation steps
const steps = [
  {
    title: "Consultation",
    description: "Our team works with you to understand your requirements and design the optimal solution."
  },
  {
    title: "Deployment",
    description: "We help you deploy the platform on your infrastructure with our expert guidance."
  },
  {
    title: "Integration",
    description: "Connect the platform with your existing systems and applications."
  },
  {
    title: "Support",
    description: "Ongoing technical support and updates to ensure optimal performance."
  }
]

// Comparison table data
const comparisonItems = [
  {
    feature: "Data Control",
    selfHosted: "Complete",
    cloud: "Limited"
  },
  {
    feature: "Security Customization",
    selfHosted: "Full",
    cloud: "Limited"
  },
  {
    feature: "Infrastructure Management",
    selfHosted: "Customer Managed",
    cloud: "Brivas Managed"
  },
  {
    feature: "Upfront Costs",
    selfHosted: "Higher",
    cloud: "Lower"
  },
  {
    feature: "Operational Costs",
    selfHosted: "Varies",
    cloud: "Predictable"
  },
  {
    feature: "Deployment Time",
    selfHosted: "Longer",
    cloud: "Immediate"
  },
  {
    feature: "Customization",
    selfHosted: true,
    cloud: "Limited"
  },
  {
    feature: "Automatic Updates",
    selfHosted: "Manual/Scheduled",
    cloud: true
  },
  {
    feature: "Compliance with Strict Regulations",
    selfHosted: true,
    cloud: "Depends on Region"
  }
] 