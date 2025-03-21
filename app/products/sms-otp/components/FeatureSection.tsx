"use client";
import { Upload, Globe, MessageSquare, Clock, Webhook } from "lucide-react";
import { motion } from "framer-motion";

const FeatureSection = () => {
  const features = [
    {
      title: "API Integration",
      description: "Our developer-friendly API makes it easy to add SMS OTP to your app.",
      icon: <Upload className="h-6 w-6 text-white" />
    },
    {
      title: "Global Reach",
      description: "Define the number of digits in your OTP.",
      icon: <Globe className="h-6 w-6 text-white" />
    },
    {
      title: "Message Templates",
      description: "Create custom templates for the SMS OTP messages sent to your users.",
      icon: <MessageSquare className="h-6 w-6 text-white" />
    },
    {
      title: "Custom Expiration",
      description: "Set custom OTP expiration times based on the security level required for each action.",
      icon: <Clock className="h-6 w-6 text-white" />
    },
    {
      title: "Webhook Support",
      description: "Set up webhooks for tracking OTP usage and delivery in real-time.",
      icon: <Webhook className="h-6 w-6 text-white" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="mb-20 px-4 md:px-12 py-8">
      <h2 className="text-4xl text-black font-bold text-center mb-4">
        Seamless User <span className="text-[#40196D]">Verification</span> with <span className="text-[#40196D]">SMS OTP</span>
      </h2>
      <p className="text-gray-700 text-center mb-12 max-w-4xl mx-auto">
        Easily integrate SMS OTP into your application using our API. Customize the OTP length, expiration time, and message content to suit your business needs.
      </p>
      
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {/* First column - API Integration and Custom Expiration */}
        <div className="flex flex-col gap-6 w-full md:w-[calc(33.333%-16px)] max-w-[350px]">
          <motion.div 
            className="bg-[#40196D] text-white p-8 rounded-2xl h-full"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 rounded-full bg-transparent border border-white/30 flex items-center justify-center mb-6">
              {features[0].icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{features[0].title}</h3>
            <p className="text-white/90">{features[0].description}</p>
          </motion.div>
          
          <motion.div 
            className="bg-[#40196D] text-white p-8 rounded-2xl h-full"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 rounded-full bg-transparent border border-white/30 flex items-center justify-center mb-6">
              {features[3].icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{features[3].title}</h3>
            <p className="text-white/90">{features[3].description}</p>
          </motion.div>
        </div>
        
        {/* Second column - Global Reach and Webhook Support */}
        <div className="flex flex-col gap-6 w-full md:w-[calc(33.333%-16px)] max-w-[350px]">
          <motion.div 
            className="bg-[#40196D] text-white p-8 rounded-2xl h-full"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 rounded-full bg-transparent border border-white/30 flex items-center justify-center mb-6">
              {features[1].icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{features[1].title}</h3>
            <p className="text-white/90">{features[1].description}</p>
          </motion.div>
          
          <motion.div 
            className="bg-[#40196D] text-white p-8 rounded-2xl h-full"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 rounded-full bg-transparent border border-white/30 flex items-center justify-center mb-6">
              {features[4].icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{features[4].title}</h3>
            <p className="text-white/90">{features[4].description}</p>
          </motion.div>
        </div>
        
        {/* Third column - Message Templates */}
        <div className="flex flex-col w-full md:w-[calc(33.333%-16px)] max-w-[350px]">
          <motion.div 
            className="bg-[#40196D] text-white p-8 rounded-2xl h-[225px]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 rounded-full bg-transparent border border-white/30 flex items-center justify-center mb-6">
              {features[2].icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{features[2].title}</h3>
            <p className="text-white/90">{features[2].description}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;