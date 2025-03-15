import Link from "next/link"
import Image from "next/image"
import { HeartPulse, Shield, MessageSquare, Phone, Clock, FileText } from "lucide-react"

export default function HealthcareSolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Healthcare Communication Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          HIPAA-compliant messaging solutions designed specifically for healthcare providers to communicate securely with patients and staff.
        </p>
      </div>

      {/* Hero Section */}
      <div className="mb-20">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Transform Patient Communication</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our healthcare communication solutions help you improve patient engagement, streamline operations, and ensure compliance with healthcare regulations.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-[#40196D]/10 flex items-center justify-center mr-3 mt-1">
                  <Shield className="w-5 h-5 text-[#40196D]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">HIPAA Compliant</h3>
                  <p className="text-gray-600">All communications are secure and compliant with healthcare regulations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-[#40196D]/10 flex items-center justify-center mr-3 mt-1">
                  <MessageSquare className="w-5 h-5 text-[#40196D]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Multi-channel Communication</h3>
                  <p className="text-gray-600">Reach patients via SMS, voice, email, and more.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-[#40196D]/10 flex items-center justify-center mr-3 mt-1">
                  <Clock className="w-5 h-5 text-[#40196D]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Appointment Reminders</h3>
                  <p className="text-gray-600">Reduce no-shows with automated appointment reminders.</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/placeholder.svg?height=400&width=600" 
                alt="Healthcare communication" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features for Healthcare</h2>
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

      {/* Use Cases Section */}
      <div className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Healthcare Use Cases</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how healthcare providers are using our solutions to improve patient care and operational efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mb-4">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-600 mb-4">
                {useCase.description}
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Results:</span> {useCase.results}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mb-20">
        <div className="bg-white text-black border border-gray-200 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="relative h-[200px] w-[200px] rounded-full overflow-hidden border-4 border-white mx-auto">
                <Image 
                  src="/placeholder.svg?height=200&width=200" 
                  alt="Dr. Sarah Johnson" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <svg className="w-12 h-12 text-white/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl mb-6">
                "Brivas has transformed how we communicate with our patients. The appointment reminders alone have reduced no-shows by 35%, and the secure messaging platform ensures we're always HIPAA compliant."
              </p>
              <div>
                <p className="font-semibold">Dr. Sarah Johnson</p>
                <p className="text-white/70">Chief Medical Officer, MedConnect Health</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your healthcare communications?</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Get started today and see how our healthcare-specific solutions can help your organization improve patient care.
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

// Features data
const features = [
  {
    title: "HIPAA Compliance",
    description: "Secure messaging that meets all healthcare regulatory requirements.",
    icon: <Shield className="w-6 h-6 text-[#40196D]" />
  },
  {
    title: "Appointment Reminders",
    description: "Automated reminders to reduce no-shows and improve scheduling efficiency.",
    icon: <Clock className="w-6 h-6 text-[#40196D]" />
  },
  {
    title: "Patient Messaging",
    description: "Secure two-way messaging between healthcare providers and patients.",
    icon: <MessageSquare className="w-6 h-6 text-[#40196D]" />
  },
  {
    title: "Telehealth Integration",
    description: "Seamless integration with telehealth platforms for virtual care.",
    icon: <Phone className="w-6 h-6 text-[#40196D]" />
  },
  {
    title: "Medical Records Access",
    description: "Secure patient access to medical records and test results.",
    icon: <FileText className="w-6 h-6 text-[#40196D]" />
  },
  {
    title: "Staff Communication",
    description: "Internal communication tools for healthcare staff and departments.",
    icon: <HeartPulse className="w-6 h-6 text-[#40196D]" />
  }
]

// Use cases data
const useCases = [
  {
    title: "Appointment Management",
    description: "A large hospital network implemented our appointment reminder system to reduce no-shows and improve scheduling efficiency.",
    results: "35% reduction in no-shows, saving an estimated $1.2M annually.",
    icon: <Clock className="w-6 h-6 text-[#40196D]" />
  },
  {
    title: "Patient Engagement",
    description: "A primary care practice used our patient messaging platform to improve communication and follow-up care.",
    results: "45% increase in patient satisfaction scores and 28% improvement in follow-up compliance.",
    icon: <MessageSquare className="w-6 h-6 text-[#40196D]" />
  },
  {
    title: "Telehealth Services",
    description: "A specialty clinic integrated our communication platform with their telehealth services to provide seamless virtual care.",
    results: "60% increase in telehealth appointment completion rates and reduced administrative workload.",
    icon: <Phone className="w-6 h-6 text-[#40196D]" />
  },
  {
    title: "Staff Coordination",
    description: "A multi-location healthcare system implemented our staff communication tools to improve coordination between departments.",
    results: "40% reduction in response time for critical communications and improved staff satisfaction.",
    icon: <HeartPulse className="w-6 h-6 text-[#40196D]" />
  }
] 