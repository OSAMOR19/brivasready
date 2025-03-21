"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import Avt1 from "@/components/Images/pics/Avatar1.svg"
import Avt2 from "@/components/Images/pics/Avatar2.svg"
import Avt3 from "@/components/Images/pics/Avatar3.svg"

export default function Testimonials() {
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      title: "Reliability",
      description: "Our robust infrastructure ensures that your critical messages are delivered on time, every time.",
    },
    {
      title: "Security",
      description: "BRIVAS prioritizes data protection with encrypted messaging and secure API integrations.",
    },
    {
      title: "Global Connectivity",
      description: "Reach clients globally with our scalable messaging solutions, designed for international and local markets.",
    },
    {
      title: "Customizability",
      description: "Tailor BRIVAS's tools to your institution's specific needs for maximum impact and efficiency.",
    },
    {
      title: "Cost-Effective",
      description: "Deliver high-quality communication solutions without overextending your budget.",
    },
  ]

  return (
    <motion.section
      ref={testimonialsRef}
      initial={{ opacity: 0 }}
      animate={testimonialsInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full py-16 md:py-24"
    >
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={testimonialsInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl text-black md:text-4xl font-bold text-center mb-24"
        >
          What BRIVAS Provides
        </motion.h2>

        <div className="flex flex-col md:flex-row">
          {/* Features Column - Left Side */}
          <div className="md:w-3/5 space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ x: 100, opacity: 0 }}
                animate={testimonialsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="rounded-full w-5 h-5 border-2 border-[#40196D] flex items-center justify-center">
                    <div className="rounded-full w-2 h-2 bg-[#40196D]"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-black text-base mb-2">{feature.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Avatars - Right Side */}
          <div className="md:w-2/5 flex justify-end items-center mt-12 md:mt-24">
            <div className="flex space-x-4">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={testimonialsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="relative w-20 h-20 md:w-24 md:h-24"
              >
                <Image
                  src={Avt1}
                  alt="Team member 1"
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={testimonialsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="relative w-20 h-20 md:w-24 md:h-24"
              >
                <Image
                  src={Avt2}
                  alt="Team member 2"
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={testimonialsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="relative w-20 h-20 md:w-24 md:h-24"
              >
                <Image
                  src={Avt3}
                  alt="Team member 3"
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}