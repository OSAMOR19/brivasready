import Link from "next/link"
import Image from "next/image"
import { Store, GraduationCap, HeartPulse, Building, Briefcase, Landmark } from "lucide-react"

export default function IndustriesSolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Industry Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Specialized communication solutions tailored to the unique needs and requirements of your industry.
        </p>
      </div>

      {/* Industries Grid Section */}
      <div className="mb-20">
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

      {/* Why Choose Us Section */}
      <div className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Industry Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We understand the unique challenges and requirements of different industries, and we've built our solutions to address them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Section */}
      <div className="mb-20">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/placeholder.svg?height=400&width=600" 
                alt="Industry success story" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 mb-6">
              See how organizations in your industry have transformed their communication strategies with our solutions.
            </p>
            <div className="space-y-4">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
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
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your industry communications?</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Get started today and see how our industry-specific solutions can help your organization thrive.
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
    title: "E-commerce",
    description: "Enhance customer experience and boost sales with our e-commerce communication solutions.",
    icon: <Store className="w-6 h-6 text-[#40196D]" />,
    href: "/solutions/ecommerce"
  },
  {
    title: "Financial Services",
    description: "Secure, compliant communication solutions for banks, insurance companies, and financial institutions.",
    icon: <Landmark className="w-6 h-6 text-[#40196D]" />,
    href: "/solutions/financial-services"
  },
  {
    title: "Real Estate",
    description: "Connect with clients, streamline property viewings, and close deals faster with our solutions.",
    icon: <Building className="w-6 h-6 text-[#40196D]" />,
    href: "/solutions/real-estate"
  },
  {
    title: "Professional Services",
    description: "Enhance client communication and service delivery for consulting, legal, and other professional services.",
    icon: <Briefcase className="w-6 h-6 text-[#40196D]" />,
    href: "/solutions/professional-services"
  }
]

// Benefits data
const benefits = [
  {
    title: "Industry Compliance",
    description: "Our solutions are built to meet the specific compliance requirements of your industry.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  },
  {
    title: "Specialized Features",
    description: "Tailored features designed to address the unique challenges of your industry.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
  },
  {
    title: "Industry Expertise",
    description: "Our team has deep experience working with organizations in your industry.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
  },
  {
    title: "Scalable Solutions",
    description: "Our solutions grow with your organization, from small businesses to enterprise-level operations.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  },
  {
    title: "Integration Capabilities",
    description: "Seamlessly integrate with industry-specific software and systems you already use.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    title: "Dedicated Support",
    description: "Get support from team members who understand your industry's unique challenges.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
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
    company: "EduTech University",
    description: "How a university streamlined communication with students and increased response rates by 60%.",
    icon: <GraduationCap className="w-5 h-5 text-[#40196D]" />,
    href: "/resources/case-studies/edutech"
  },
  {
    company: "ShopSmart Retail",
    description: "An e-commerce company that increased conversion rates by 25% with our omnichannel messaging.",
    icon: <Store className="w-5 h-5 text-[#40196D]" />,
    href: "/resources/case-studies/shopsmart"
  }
] 