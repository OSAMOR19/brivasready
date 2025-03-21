"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import imagethree from "@/components/Images/pics/ourservicesimage.svg"
import codeimg from "@/components/Images/pics/codeimage.svg"

export default function OurServices() {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [devCardRef, devCardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [activeService, setActiveService] = useState("Bulk SMS")
  
  const services = [
    {
      id: "Bulk SMS",
      title: "Bulk SMS",
      description: "Send secure messages at scale, such as transaction alerts, marketing campaigns, or account notifications, ensuring timely and effective communication.",
      ctaText: "Start for free",
      ctaLink: "/signup",
    },
    {
      id: "SMS OTP",
      title: "SMS OTP",
      description: "Secure your applications with one-time passwords delivered via SMS for reliable user verification and authentication.",
      ctaText: "Start for free",
      ctaLink: "/signup",
    },
    {
      id: "Flash Call",
      title: "Flash Call",
      description: "Verify users with a quick, automated phone call that disconnects after a few rings, providing a seamless authentication experience.",
      ctaText: "Start for free",
      ctaLink: "/signup",
    },
    {
      id: "USSD Pull",
      title: "USSD Pull",
      description: "Enable interactive menu-based services that work on any mobile phone without internet access, perfect for reaching all customer segments.",
      ctaText: "Start for free",
      ctaLink: "/signup",
    },
    {
      id: "Messaging APIs",
      title: "Messaging APIs",
      description: "Integrate our powerful messaging capabilities directly into your applications with our easy-to-use APIs and comprehensive documentation.",
      ctaText: "Start for free",
      ctaLink: "/signup",
    },
  ]

  return (
    <>
      <motion.section
        ref={servicesRef}
        initial={{ opacity: 0 }}
        animate={servicesInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl text-[#40196D] md:text-4xl font-bold text-center mb-12"
          >
            Our Services
          </motion.h2>

          {/* Service Navigation Tabs */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  activeService === service.id
                    ? "bg-[#40196D] text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {service.title}
              </button>
            ))}
          </motion.div>

          {/* Service Content */}
          <div className="mt-8 text-black">
            <AnimatePresence mode="wait">
              {services.map((service) => {
                if (service.id === activeService) {
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col md:flex-row items-center gap-4"
                    >
                      {/* Images Section - Updated to match screenshot */}
                      <motion.div 
                        className="md:w-1/2 relative"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div className="relative h-96 w-full">
                          
                          {/* Main person image */}
                          <div className="absolute right-20 ">
                            <Image
                              src={imagethree}
                              alt="Person using phone"
                              width={350}
                              height={450}
                              className="rounded-lg  object-cover"
                            />
                          </div>
                          
                        </div>
                      </motion.div>
                      
                      {/* Content Section - Updated spacing and button */}
                      <motion.div 
                        className="md:w-1/2 md:pl-6"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                        <p className="text-gray-700 mb-5 max-w-lg">{service.description}</p>
                        <Link href={service.ctaLink}>
                          <button className="bg-[#a4031f] rounded-full text-white px-8 py-3 hover:bg-[#a4031f]/90 transition-colors font-medium">
                            {service.ctaText}
                          </button>
                        </Link>
                      </motion.div>
                      <div></div>
                    </motion.div>
                    
                  )
                }
                return null
              })}
            </AnimatePresence>
          </div>

          {/* Developer Card Section */}
          <motion.div
            ref={devCardRef}
            initial={{ opacity: 0, y: 40 }}
            animate={devCardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-24 py-20"
          >
            <div className="bg-[#121C2D] py-20  rounded-[24px] text-white overflow-hidden shadow-xl">
              <div className="flex flex-col mt-7 md:flex-row">
                {/* Left content section */}
                <div className="md:w-1/2  px-10 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Developer-Friendly APIs</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#080F28] flex-shrink-0 mt-1">
                        <span className="text-sm">○</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Comprehensive API Docs</h4>
                        <p className="text-gray-300 text-sm">Easy-to-follow guides.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#080F28] flex-shrink-0 mt-1">
                        <span className="text-sm">○</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">SDKs for Major Platforms</h4>
                        <p className="text-gray-300 text-sm">Fast implementation.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#080F28] flex-shrink-0 mt-1">
                        <span className="text-sm">○</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">24/7 Developer Support</h4>
                        <p className="text-gray-300 text-sm">We're here to help.</p>
                      </div>
                    </div>
                  </div>
                  
                  <Link href="/developer-hub">
                    <button className="mt-8 pt-1 text-[#CC2B47] font-medium flex items-center group">
                      <span>Visit Developer Hub</span>
                      <span className="ml-2 text-muted transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </Link>
                </div>
                
                {/* Right code image section */}
                <div className="md:w-1/2 flex items-center justify-center p-6">
                  <div className="relative w-full">
                    <Image
                      src={codeimg}
                      alt="Code example"
                      width={500}
                      height={400}
                      className="w-full rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}