'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Background from "@/components/Images/pics/enterprisebg.svg";

const EnterpriseFeatureShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Unified Communication Platform",
      description: "Centralize all your enterprise communications in one powerful platform with seamless integration across departments.",
      imageWidth: 600,
      imageHeight: 400,
      imageQuality: 90
    },
    {
      title: "Advanced Security Controls",
      description: "Protect sensitive data with enterprise-grade encryption, role-based access controls, and compliance monitoring.",
      imageWidth: 600,
      imageHeight: 400,
      imageQuality: 90
    },
    {
      title: "Global Messaging Infrastructure",
      description: "Reach customers worldwide with our reliable messaging network that spans across 200+ countries and territories.",
      imageWidth: 600,
      imageHeight: 400,
      imageQuality: 90
    }
  ];

  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={Background.src}
          alt="Enterprise background"
          fill
          className="object-cover object-center opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white bg-opacity-80" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade <span className="text-[#40196D]">Solutions</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Powerful tools designed to meet the complex needs of global enterprises
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={`https://placehold.co/${feature.imageWidth}x${feature.imageHeight}?text=${encodeURIComponent(feature.title)}&bg=40196D&fg=ffffff`}
                    alt={feature.title}
                    width={feature.imageWidth}
                    height={feature.imageHeight}
                    className="w-full h-auto object-cover"
                    quality={feature.imageQuality}
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#40196D] text-white px-6 py-3 rounded-full hover:bg-[#351458] transition-colors">
                    Learn more
                  </button>
                  <button className="border border-[#40196D] text-[#40196D] px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
                    Request demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-block bg-[#F9F5FF] p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-[#40196D] mb-4">Ready to transform your enterprise communications?</h3>
            <p className="text-gray-600 mb-6">Join thousands of global enterprises that trust BRIVAS for their critical communication needs.</p>
            <button className="bg-[#B91C1C] text-white px-8 py-4 rounded-full font-medium hover:bg-[#9B1B1B] transition-colors">
              Start for free
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseFeatureShowcase; 