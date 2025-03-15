import Link from "next/link"
import Image from "next/image"
import { Briefcase, Building, Check, Globe, Award, Users } from "lucide-react"

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Partner with Brivas
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join our partner ecosystem and grow your business by offering our industry-leading communication solutions to your customers.
        </p>
      </div>

      {/* Partner Options Section */}
      <div className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Become a Partner */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="relative h-[200px] w-full">
              <Image 
                src="/placeholder.svg?height=200&width=600" 
                alt="Become a Partner" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-[#40196D]" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
              <p className="text-gray-600 mb-6">
                Join our partner program and gain access to exclusive resources, training, and support to help you succeed.
              </p>
              <Link 
                href="/partners/become-partner" 
                className="inline-block px-6 py-3 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* Find a Partner */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="relative h-[200px] w-full">
              <Image 
                src="/placeholder.svg?height=200&width=600" 
                alt="Find a Partner" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-[#40196D]" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Find a Partner</h2>
              <p className="text-gray-600 mb-6">
                Looking for expert help with implementing our solutions? Connect with one of our certified partners.
              </p>
              <Link 
                href="/partners/find-partner" 
                className="inline-block px-6 py-3 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90 transition-colors"
              >
                Find a Partner
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Program Benefits */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Partner Program Benefits</h2>
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

      {/* Partner Tiers */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-4">Partner Tiers</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Choose the partnership level that best aligns with your business goals and capabilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl border ${
                tier.featured 
                  ? "border-[#40196D] shadow-lg relative" 
                  : "border-gray-200"
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#40196D] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href={tier.buttonLink} 
                className={`block w-full py-3 text-center rounded-lg font-medium ${
                  tier.featured 
                    ? "bg-[#40196D] text-white hover:bg-[#40196D]/90" 
                    : "border border-gray-300 hover:bg-gray-50"
                } transition-colors`}
              >
                {tier.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Partners */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {featuredPartners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full shadow-sm border border-gray-200 flex items-center justify-center mb-4">
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  width={64} 
                  height={64} 
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-center">{partner.name}</h3>
              <p className="text-sm text-gray-500 text-center">{partner.type}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/partners/find-partner" 
            className="inline-block px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            View All Partners
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#40196D]/5 rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to become a partner?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our partner ecosystem today and start growing your business with Brivas.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/partners/become-partner" 
            className="px-6 py-3 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90 transition-colors"
          >
            Apply Now
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-3 border border-gray-300 bg-white rounded-lg hover:bg-gray-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

// Benefits data
const benefits = [
  {
    title: "Increased Revenue",
    description: "Generate new revenue streams by reselling our communication solutions to your customers.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
  },
  {
    title: "Marketing Support",
    description: "Access co-marketing opportunities, lead generation programs, and marketing resources.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>,
  },
  {
    title: "Technical Training",
    description: "Receive comprehensive training on our products and solutions to better serve your customers.",
    icon: <Users className="w-6 h-6 text-[#40196D]" />,
  },
  {
    title: "Global Reach",
    description: "Expand your business globally with our worldwide network and infrastructure.",
    icon: <Globe className="w-6 h-6 text-[#40196D]" />,
  },
  {
    title: "Dedicated Support",
    description: "Get priority access to our partner support team for technical and sales assistance.",
    icon: <svg className="w-6 h-6 text-[#40196D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>,
  },
  {
    title: "Partner Recognition",
    description: "Gain credibility with customers through our partner certification and recognition programs.",
    icon: <Award className="w-6 h-6 text-[#40196D]" />,
  },
]

// Partner tiers data
const partnerTiers = [
  {
    name: "Authorized Partner",
    description: "Entry-level partnership for businesses starting their journey with Brivas.",
    features: [
      "Access to partner portal",
      "Basic product training",
      "Sales and marketing materials",
      "Standard commission rates",
      "Email support"
    ],
    buttonText: "Apply Now",
    buttonLink: "/partners/become-partner",
    featured: false
  },
  {
    name: "Gold Partner",
    description: "For established partners with a proven track record of success.",
    features: [
      "All Authorized Partner benefits",
      "Advanced product training",
      "Co-marketing opportunities",
      "Enhanced commission rates",
      "Dedicated partner manager",
      "Priority technical support"
    ],
    buttonText: "Apply Now",
    buttonLink: "/partners/become-partner",
    featured: true
  },
  {
    name: "Platinum Partner",
    description: "Our highest partnership tier for strategic business relationships.",
    features: [
      "All Gold Partner benefits",
      "Exclusive product roadmap access",
      "Joint business planning",
      "Premium commission rates",
      "Executive sponsorship",
      "Custom integration support",
      "Early access to new features"
    ],
    buttonText: "Contact Us",
    buttonLink: "/contact",
    featured: false
  }
]

// Featured partners data
const featuredPartners = [
  {
    name: "TechSolutions Inc.",
    type: "Platinum Partner",
    logo: "/placeholder.svg?height=64&width=64"
  },
  {
    name: "Global Connect",
    type: "Gold Partner",
    logo: "/placeholder.svg?height=64&width=64"
  },
  {
    name: "Nexus Systems",
    type: "Gold Partner",
    logo: "/placeholder.svg?height=64&width=64"
  },
  {
    name: "Innovate IT",
    type: "Authorized Partner",
    logo: "/placeholder.svg?height=64&width=64"
  }
] 