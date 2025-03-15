"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function Hero() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={heroRef}
      initial={{ opacity: 0 }}
      animate={heroInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#f8f9fc] py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#40196D] mb-2"
          >
            BRIVAS
          </motion.h1>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Powering Scalable Communication
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-700 max-w-3xl mb-8"
          >
            Empower your business with fast, secure, and efficient messaging solutions.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/get-started">
              <button className="bg-[#40196D] border border-gray-300 rounded-[24px] text-black px-8 py-3 text-white  font-medium hover:bg-[#40196D] transition-all transform hover:scale-105">
                Get started
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
} 