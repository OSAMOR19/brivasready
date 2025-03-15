"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import imagethree from "@/components/Images/pics/ourservicesimage.svg"
import codeimg from "@/components/Images/pics/codeimage.svg"

export default function EducationCommunicationTools() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState("Bulk SMS")
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('education-communication-tools');
      
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + scrollPosition;
        if (scrollPosition > elementPosition - windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const services = [
    {
      id: "Bulk SMS",
      title: "Bulk SMS",
      description: "Send secure messages at scale to students, parents, and staff for announcements, event reminders, and emergency notifications.",
      ctaText: "Start for free",
      ctaLink: "/signup",
    },
    {
      id: "SMS OTP",
      title: "SMS OTP",
      description: "Secure access to educational platforms and student portals with one-time passwords delivered via SMS for reliable verification.",
      ctaText: "Start for free",
      ctaLink: "/signup",
    },
    {
      id: "Flash Call",
      title: "Flash Call",
      description: "Verify users with a quick, automated phone call that disconnects after a few rings, providing a seamless authentication experience for educational apps.",
      ctaText: "Start for free",
      ctaLink: "/signup",
    },
    {
      id: "USSD Pull",
      title: "USSD Pull",
      description: "Enable interactive menu-based services that work on any mobile phone without internet access, making educational resources accessible to all students.",
      ctaText: "Start for free",
      ctaLink: "/signup",
    },
    {
      id: "Messaging APIs",
      title: "Messaging APIs",
      description: "Integrate our powerful messaging capabilities directly into your educational platforms and learning management systems.",
      ctaText: "Start for free",
      ctaLink: "/signup",
    }
  ]

  // Sweet animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      }
    }
  };

  const activeService1 = services.find((service) => service.id === activeService)

  return (
    <section id="education-communication-tools" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ 
            duration: 0.7,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-[#A4031F]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ 
              duration: 0.7, 
              delay: 0.1,
              type: "spring",
              stiffness: 100
            }}
          >
            Communication Tools for Education
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Enhance learning experiences with our suite of communication tools designed specifically for educational institutions.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Service Navigation */}
          <motion.div 
            className="lg:w-1/3"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-6 text-[#4CAF50]">Our Services</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeService === service.id
                        ? "bg-[#4CAF50] text-white font-medium"
                        : "hover:bg-gray-100"
                    }`}
                    variants={itemVariants}
                    whileHover={{ 
                      x: activeService === service.id ? 0 : 5,
                      backgroundColor: activeService === service.id ? "#4CAF50" : "rgba(76, 175, 80, 0.1)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {service.title}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Service Details */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden h-full"
              >
                <div className="p-8">
                  <motion.h3 
                    className="text-2xl font-bold mb-4 text-[#A4031F]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {activeService1?.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {activeService1?.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <Link
                      href={activeService1?.ctaLink || "/signup"}
                      className="inline-block bg-[#4CAF50] hover:bg-[#3d8b40] text-white font-medium px-6 py-3 rounded-full transition-colors"
                    >
                      {activeService1?.ctaText || "Learn more"}
                    </Link>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="relative h-64 bg-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Image
                    src={imagethree.src}
                    alt={activeService1?.title || "Service illustration"}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback if the image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = `https://placehold.co/800x400?text=${encodeURIComponent(activeService1?.title || 'Education Communication')}&bg=4CAF50&fg=ffffff`;
                    }}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Developer Section */}
        <motion.div 
          className="mt-24 bg-[#1a1a2e] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ 
            y: -5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
          }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                For Developers
              </motion.h3>
              <motion.p 
                className="text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Integrate our communication tools into your educational platforms with our well-documented APIs and SDKs. Build custom solutions that enhance the learning experience.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/developers"
                  className="inline-block bg-[#4CAF50] hover:bg-[#3d8b40] text-white font-medium px-6 py-3 rounded-full transition-colors"
                >
                  View Documentation
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className="relative h-64 md:h-auto"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <Image
                src={codeimg.src}
                alt="Developer resources"
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback if the image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://placehold.co/600x400?text=Developer+Resources&bg=1a1a2e&fg=ffffff";
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}