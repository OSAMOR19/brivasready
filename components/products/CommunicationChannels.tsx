import Link from "next/link"
import { MessageCircle, Phone, PhoneCall } from "lucide-react"

export default function CommunicationChannels() {
  const channels = [
    {
      title: "SMS",
      description: "Reliable text messaging for businesses with global reach and high deliverability.",
      icon: <MessageCircle className="w-5 h-5 text-[#40196D]" />,
      href: "/products/sms",
    },
    {
      title: "Voice",
      description: "Crystal-clear voice communication solutions for calls, IVR, and voice messaging.",
      icon: <Phone className="w-5 h-5 text-[#40196D]" />,
      href: "/products/voice",
    },
    {
      title: "Flash Call",
      description: "Quick verification through missed calls for seamless user authentication.",
      icon: <PhoneCall className="w-5 h-5 text-[#40196D]" />,
      href: "/products/flash-call",
    },
  ]

  return (
    <div className="bg-gray-50 rounded-3xl p-8 mb-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Communication Channels</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {channels.map((channel, index) => (
          <Link 
            key={index}
            href={channel.href} 
            className="group flex items-start p-4 bg-white rounded-xl hover:shadow transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-[#40196D]/10 flex items-center justify-center mr-4 mt-1">
              {channel.icon}
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1 group-hover:text-[#40196D] transition-colors">{channel.title}</h3>
              <p className="text-gray-600 text-sm">
                {channel.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 