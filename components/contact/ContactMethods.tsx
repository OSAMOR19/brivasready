import Link from "next/link"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"

export default function ContactMethods() {
  const contactMethods = [
    {
      title: "Email Us",
      description: "Send us an email and we'll get back to you within 24 hours.",
      icon: <Mail className="w-6 h-6 text-[#40196D]" />,
      href: "mailto:info@brivas.com",
      linkText: "info@brivas.com",
    },
    {
      title: "Call Us",
      description: "Speak directly with our customer support team.",
      icon: <Phone className="w-6 h-6 text-[#40196D]" />,
      href: "tel:+1234567890",
      linkText: "+1 (234) 567-890",
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time.",
      icon: <MessageSquare className="w-6 h-6 text-[#40196D]" />,
      href: "#",
      linkText: "Start a chat",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {contactMethods.map((method, index) => (
        <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mx-auto mb-4">
            {method.icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
          <p className="text-gray-600 mb-4">{method.description}</p>
          <Link 
            href={method.href} 
            className="text-[#40196D] font-medium inline-flex items-center"
          >
            {method.linkText}
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  )
} 