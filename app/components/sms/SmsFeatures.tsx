"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import img1 from "@/components/Images/pics/featuresimage2.svg"
import { CheckCircle, Globe2, Tag, Users, AreaChart, Cpu } from "lucide-react"

const features = [
  {
    icon: <Globe2 className="w-5 h-5 text-[#B891E5]" />,
    title: "Custom Domain",
    description: "Set up your reseller platform on your own domain or use a Brivas-provided domain.",
  },
  {
    icon: <Tag className="w-5 h-5 text-[#B891E5]" />,
    title: "White-label Solution",
    description: "Fully customize the platform with your logo, colors, and branding.",
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-[#B891E5]" />,
    title: "Competitive Pricing",
    description: "Set your own pricing for SMS credits and enjoy a profitable margin.",
  },
  {
    icon: <Users className="w-5 h-5 text-[#B891E5]" />,
    title: "Easy Customer Management",
    description: "Manage customer accounts, track their usage, and provide top-tier support.",
  },
  {
    icon: <AreaChart className="w-5 h-5 text-[#B891E5]" />,
    title: "Detailed Analytics",
    description: "Monitor performance with real-time delivery reports, statistics, and logs.",
  },
  {
    icon: <Cpu className="w-5 h-5 text-[#B891E5]" />,
    title: "Flexible API Integration",
    description: "Seamlessly integrate Bulk SMS with any application using our developer-friendly API.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
    },
  },
};

export default function SmsFeatures() {
  return (
    <section className="w-full rounded-[35px] bg-[#f8f9fc] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h1 className="text-5xl text-black md:text-5xl font-semibold mb-4">
            Grow Your Business with <span className="text-[#40196D]">Bulk SMS <br/> Reselling</span>
          </h1>
          <p className="max-w-2xl mx-auto text-black">
            BRIVAS Bulk SMS Reseller Platform allows you to resell SMS credits to customers for promotional campaigns,
            notifications, and alerts. Customize your platform with your brand and offer a powerful communication tool for
            businesses of all sizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              className="rounded-[3rem] overflow-hidden bg-gradient-to-br shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={img1}
                alt="Person using SMS service"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-100/50 to-transparent"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-black font-semibold mb-6 relative"
            >
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-purple-200"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
              Key features
            </motion.h3>

            <motion.div className="grid gap-6" variants={containerVariants} initial="hidden" whileInView="visible">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start gap-3 group relative p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <motion.h4 
                      className="font-semibold text-gray-900"
                      initial={{ x: 10 }}
                      whileInView={{ x: 0 }}
                    >
                      {feature.title}
                    </motion.h4>
                    <motion.p 
                      className="text-sm text-gray-600 mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

