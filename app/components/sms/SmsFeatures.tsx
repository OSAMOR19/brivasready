"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import img1 from "@/components/Images/pics/featuresimage.svg"
import { CheckCircle, Globe2, Tag, Users, AreaChart, Cpu } from "lucide-react"

const features = [
  {
    icon: <Globe2 className="w-5 h-5 text-purple-700" />,
    title: "Custom Domain",
    description: "Set up your reseller platform on your own domain or use a Brivas-provided domain.",
  },
  {
    icon: <Tag className="w-5 h-5 text-purple-700" />,
    title: "White-label Solution",
    description: "Fully customize the platform with your logo, colors, and branding.",
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-purple-700" />,
    title: "Competitive Pricing",
    description: "Set your own pricing for SMS credits and enjoy a profitable margin.",
  },
  {
    icon: <Users className="w-5 h-5 text-purple-700" />,
    title: "Easy Customer Management",
    description: "Manage customer accounts, track their usage, and provide top-tier support.",
  },
  {
    icon: <AreaChart className="w-5 h-5 text-purple-700" />,
    title: "Detailed Analytics",
    description: "Monitor performance with real-time delivery reports, statistics, and logs.",
  },
  {
    icon: <Cpu className="w-5 h-5 text-purple-700" />,
    title: "Flexible API Integration",
    description: "Seamlessly integrate Bulk SMS with any application using our developer-friendly API.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function SmsFeatures() {
  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16 max-w-7xl">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl text-black md:text-4xl font-bold mb-4">
          Grow Your Business with <span className="text-[#40196D]">Bulk SMS Reselling</span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700">
          BRIVAS Bulk SMS Reseller Platform allows you to resell SMS credits to customers for promotional campaigns,
          notifications, and alerts. Customize your platform with your brand and offer a powerful communication tool for
          businesses of all sizes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-[3rem] overflow-hidden bg-gradient-to-br from-purple-100 to-white">
            <Image
              src={img1}
              alt="Person using SMS service"
              width={500}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-semibold mb-6"
          >
            Key features
          </motion.h3>

          <motion.div className="grid gap-6" variants={containerVariants} initial="hidden" animate="visible">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

