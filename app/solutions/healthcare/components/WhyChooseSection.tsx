"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import Avt1 from "@/components/Images/pics/healthcareavt1.svg"
import Avt2 from "@/components/Images/pics/healthcareavt2.svg"
import Avt3 from "@/components/Images/pics/healthcareavt3.svg"

export default function Testimonials() {
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      title: "Reliable and Secure",
      description: "BRIVAS ensures that all communications are secure and delivered promptly, meeting the stringent requirements of the healthcare industry.",
    },
    {
      title: "Cost-Effective Solutions",
      description: "Our affordable messaging services help healthcare providers optimize budgets while delivering exceptional patient care.",
    },
    {
      title: "Scalable APIs",
      description: "Easily integrate BRIVAS into your existing systems for a seamless communication experience.",
    },
    {
      title: "Global Coverage",
      description: "Connect with patients and staff across regions with our extensive global network.",
    },
    {
      title: "Analytics and Reporting",
      description: "Track campaign performance, appointment adherence, and patient engagement with detailed insights.",
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
          Why Healthcare Providers Choose <br/> BRIVAS
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
                  <div className="rounded-full w-5 h-5 border-2 border-[#684195] flex items-center justify-center">
                    <div className="rounded-full w-2 h-2 "></div>
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