import Link from "next/link"
import { MessageSquare, ShieldCheck, Layout } from "lucide-react"

export default function ProductCategories() {
  const categories = [
    {
      title: "Messaging",
      description: "Versatile communications with our messaging platform for businesses of all sizes.",
      icon: <MessageSquare className="w-6 h-6 text-[#40196D]" />,
      href: "/products/messaging",
    },
    {
      title: "Verification",
      description: "Our verification solutions ensure user security and confidence in your platform.",
      icon: <ShieldCheck className="w-6 h-6 text-[#40196D]" />,
      href: "/products/verification",
    },
    {
      title: "Self-Hosted",
      description: "Enhance customer connections with our versatile self-hosted application suite.",
      icon: <Layout className="w-6 h-6 text-[#40196D]" />,
      href: "/products/self-hosted",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {categories.map((category, index) => (
        <Link 
          key={index}
          href={category.href} 
          className="group block p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-[#40196D]/10 flex items-center justify-center mb-4">
            {category.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-[#40196D] transition-colors">{category.title}</h3>
          <p className="text-gray-600">
            {category.description}
          </p>
        </Link>
      ))}
    </div>
  )
} 