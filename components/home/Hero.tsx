"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import halftoneImage from "@/components/Images/pics/halftonedotsimage.svg"
import leftSideImage from "@/components/Images/pics/leftimage.svg"
import rightSideImage from "@/components/Images/pics/rightimage.svg"
import smallConnectionImage from "@/components/Images/pics/smallconnection.svg"

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
      className="w-full bg-[#f8f9fc] py-16 md:py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-16"
          >
            <Link href="/get-started">
              <button className="bg-[#40196D] rounded-[24px] text-white px-8 py-3 font-medium hover:bg-[#40196D]/90 transition-all">
                Get started
              </button>
            </Link>
          </motion.div>
          
          {/* Images container - positioned below the button */}
          <div className="relative w-full mt-2 h-[250px] hidden md:block">
            {/* Left side image with small connection animation */}
            <motion.div 
              className="absolute left-[2%] bottom-0 z-0"
              initial={{ x: -100, opacity: 0 }}
              animate={heroInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ maxWidth: '30%', height: 'auto' }}
            >
              <Image 
                src={leftSideImage} 
                alt="People communicating" 
                width={300} 
                height={500}
                className="p-10 pl-12"
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
              />
              
              {/* Small connection blinking animation */}
              <motion.div 
                className="absolute left-[40%] top-[40%]"
                animate={{ 
                  opacity: [0.4, 1, 0.4],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut" 
                }}
              >
                <Image 
                  src={smallConnectionImage} 
                  alt="Connection" 
                  width={60} 
                  height={60}
                />
              </motion.div>
            </motion.div>

            {/* Right side image with halftone animation */}
            <motion.div 
              className="absolute right-[2%] bottom-0 z-0"
              initial={{ x: 100, opacity: 0 }}
              animate={heroInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ maxWidth: '25%', height: 'auto' }}
            >
              <Image 
                src={rightSideImage} 
                alt="People messaging" 
                width={300} 
                height={500}
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
              />
              
              {/* Halftone dots blinking animation */}
              <motion.div 
                className="absolute right-[60%] bottom-[40%] -z-10"
                animate={{ 
                  opacity: [0.3, 0.7, 0.3],
                  rotate: [0, 5, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut" 
                }}
              >
                <Image 
                  src={halftoneImage} 
                  alt="Halftone pattern" 
                  width={200} 
                  height={200}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}