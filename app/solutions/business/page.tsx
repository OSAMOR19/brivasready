import Link from "next/link"
import Image from "next/image"
import { Building2, Rocket, Heart, Building } from "lucide-react"

export default function BusinessSolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Business Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tailored communication solutions to help businesses of all sizes connect with customers, streamline operations, and drive growth.
        </p>
      </div>

      {/* Business Types Section */}
      <div className="mb-20">
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

      {/* Features Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features for Businesses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
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
                alt="Business success story" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your business communications?</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Get started today and see how our solutions can help your business grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="px-8 py-3 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90 transition-colors"
          >
            Contact Sales
          </Link>
          <Link 
            href="/signup" 
            className="px-8 py-3 border border-[#40196D] text-[#40196D] rounded-lg hover:bg-[#40196D]/10 transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </div>
  )
}

// Business types data
const businessTypes = [
  {
    title: "Startup",
    description: "Affordable, scalable communication solutions designed to grow with your startup.",
    icon: <Rocket className="w-6 h-6 text-[#40196D]" />,
    href: "/solutions/startup"
  },
  {
    title: "Enterprise",
    description: "Robust, secure, and customizable communication infrastructure for large organizations.",
    icon: <Building className="w-6 h-6 text-[#40196D]" />,
    href: "/solutions/enterprise"
  },
  {
    title: "Non-Profit",
    description: "Special pricing and solutions for nonprofit organizations to engage with donors and volunteers.",
    icon: <Heart className="w-6 h-6 text-[#40196D]" />,
    href: "/solutions/non-profit"
  }
]

// Features data
const features = [
  {
    title: "Omnichannel Messaging",
    description: "Reach your customers on their preferred channels - SMS, voice, email, and more.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
  },
  {
    title: "Secure Verification",
    description: "Protect your business and customers with robust verification solutions.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  },
  {
    title: "Analytics Dashboard",
    description: "Gain insights into your communication performance with detailed analytics.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  },
  {
    title: "API Integration",
    description: "Easily integrate our communication tools with your existing systems.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
  },
  {
    title: "Automated Workflows",
    description: "Create automated communication workflows to save time and resources.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
  },
  {
    title: "24/7 Support",
    description: "Get help whenever you need it with our dedicated support team.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  }
]

// Case studies data
const caseStudies = [
  {
    company: "TechStart Inc.",
    description: "A startup that scaled their user verification process to handle 10x growth in just six months.",
    icon: <Rocket className="w-5 h-5 text-[#40196D]" />,
    href: "/resources/case-studies/techstart"
  },
  {
    company: "Global Enterprise Solutions",
    description: "How an enterprise company improved customer engagement by 35% with our omnichannel platform.",
    icon: <Building className="w-5 h-5 text-[#40196D]" />,
    href: "/resources/case-studies/global-enterprise"
  }
] 