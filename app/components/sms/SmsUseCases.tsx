"use client";
import { useState } from "react";
import usecaseImage from "@/components/images/pics/usecaseimage.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function UseCases() {
  const [selectedCase, setSelectedCase] = useState("marketing");

  const useCases = [
    {
      id: "marketing",
      title: "Marketing Agencies",
      description:
        "Offer SMS marketing solutions to clients looking to reach their audience with promotional campaigns.",
    },
    {
      id: "enterprises",
      title: "Enterprises",
      description:
        "Provide enterprises with a reliable tool to send mass notifications, alerts, and updates.",
    },
    {
      id: "startups",
      title: "Startups and SMEs",
      description:
        "Help small businesses automate their customer communication via SMS.",
    },
    {
      id: "nonprofits",
      title: "Non-profits",
      description:
        "Enable non-profits to send event announcements and fundraising messages to their supporters.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-lg font-medium text-gray-900">Use case</h2>
        <div className="mt-2 border-t border-[#DCDCDC]"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {useCases.map((useCase) => (
            <motion.div 
              key={useCase.id} 
              className="flex items-start gap-3"
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="mt-1">
                <div
                  onClick={() => setSelectedCase(useCase.id)}
                  className={`w-4 h-4 rounded-full border-2 border-[#B891E5] cursor-pointer ${
                    selectedCase === useCase.id ? '' : 'bg-transparent'
                  }`}
                />
              </div>
              <div>
                <label
                  htmlFor={`usecase-${useCase.id}`}
                  className="block font-medium text-gray-900 mb-1 "
                >
                  {useCase.title}
                </label>
                <p className="text-sm text-gray-600">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 1, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut"
            }}
          >
            <Image
              src={usecaseImage}
              alt="SMS use case illustration"
              className="w-full h-auto"
              priority
            />
          </motion.div>
          
          {/* Animated elements that match the design */}
          <motion.div 
            className="absolute top-[15%] left-[10%] w-12 h-12 bg-[#40196D]/10 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute bottom-[20%] right-[15%] w-8 h-8 bg-[#40196D]/10 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.5,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
