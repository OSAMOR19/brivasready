import Link from "next/link"
import Image from "next/image"
import { Building2, Rocket, Store, HeartPulse, GraduationCap, Heart } from "lucide-react"

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Solutions for Every Business
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how our communication platform can be tailored to meet the specific needs of your business, regardless of size or industry.
        </p>
      </div>

      {/* By Business Type Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">By Business Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessTypes.map((business, index) => (
            <Link 
              key={index}
              href={business.href} 
              className="group block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mb-4">
                {business.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#40196D] transition-colors">{business.title}</h3>
              <p className="text-gray-600">
                {business.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* By Industry Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">By Industry</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Link 
              key={index}
              href={industry.href} 
              className="group block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mb-4">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#40196D] transition-colors">{industry.title}</h3>
              <p className="text-gray-600">
                {industry.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Case Study Section */}
      <div className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 mb-6">
              See how businesses like yours have transformed their communication strategies with our solutions.
            </p>
            <div className="space-y-4">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#40196D]/10 flex items-center justify-center mr-3">
                      {study.icon}
                    </div>
                    <h3 className="font-semibold">{study.company}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{study.description}</p>
                  <Link 
                    href={study.href} 
                    className="text-[#40196D] font-medium flex items-center"
                  >
                    Read case study
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
            <Link 
              href="/resources/case-studies" 
              className="inline-block mt-6 px-6 py-3 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90 transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/placeholder.svg?height=400&width=600" 
                alt="Success Stories" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Solutions Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Our team of experts can help you design a communication solution tailored to your specific business requirements.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/contact" 
            className="px-6 py-3 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90 transition-colors"
          >
            Contact Sales
          </Link>
          <Link 
            href="/resources/documentation" 
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            View Documentation
          </Link>
        </div>
      </div>
    </div>
  )
}

// Business types data
const businessTypes = [
  {
    title: "Enterprise",
    description: "Scalable communication solutions designed for large organizations with complex requirements.",
    icon: <Building2 className="w-6 h-6 text-[#40196D]" />,
    href: "/solutions/enterprise"
  },
  {
    title: "Startups",
    description: "Flexible and affordable options to help growing businesses connect with customers effectively.",
    icon: <Rocket className="w-6 h-6 text-[#40196D]" />,
    href: "/solutions/startups"
  },
  {
    title: "Small Business",
    description: "Simple yet powerful communication tools that are easy to implement and manage for small teams.",
    icon: <Store className="w-6 h-6 text-[#40196D]" />,
    href: "/solutions/small-business"
  }
]

// Industries data
const industries = [
  {
    title: "Healthcare",
    description: "HIPAA-compliant messaging solutions for healthcare providers to communicate securely with patients.",
    icon: <HeartPulse className="w-6 h-6 text-[#40196D]" />,
    href: "/solutions/healthcare"
  },
  {
    title: "Education",
    description: "Communication tools for educational institutions to connect with students, parents, and staff.",
    icon: <GraduationCap className="w-6 h-6 text-[#40196D]" />,
    href: "/solutions/education"
  },
  {
    title: "Nonprofit",
    description: "Special pricing and solutions for nonprofit organizations to engage with donors and volunteers.",
    icon: <Heart className="w-6 h-6 text-[#40196D]" />,
    href: "/solutions/nonprofit"
  }
]

// Case studies data
const caseStudies = [
  {
    company: "MedConnect Health",
    description: "How a healthcare provider improved patient engagement by 45% with our messaging platform.",
    icon: <HeartPulse className="w-5 h-5 text-[#40196D]" />,
    href: "/resources/case-studies/medconnect"
  },
  {
    company: "TechStart Inc.",
    description: "A startup that scaled their user verification process to handle 10x growth in just six months.",
    icon: <Rocket className="w-5 h-5 text-[#40196D]" />,
    href: "/resources/case-studies/techstart"
  }
] 