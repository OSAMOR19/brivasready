'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import img1 from "@/components/Images/pics/enterprrisepic.svg"
import img2 from "@/components/Images/pics/enterpricepic3.svg"
import img3 from "@/components/Images/pics/entrepricepic2.svg"

const EnterpriseCommunicationTools = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('communication-tools');
      
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

  const tools = [
    {
      title: "Customer Engagement",
      description: "Send personalized promotions, updates, and reminders directly to your customers, ensuring higher engagement and conversion rates",
      image: img1,
      hasButton: true
    },
    {
      title: "Seamless Communication at Scale",
      description: "BRIVAS understands the complexity of enterprise-level operations. Our solutions are designed to handle the large-scale messaging, verification, and user engagement requirements of enterprises.",
      image: img2,
      hasButton: false
    },
    {
      title: "Secure User Verification",
      description: "Enhance security across your platforms with SMS OTP and Flash Call verification, protecting data and securing user accounts.",
      image: img3,
      hasButton: true
    },
    {
      title: "Global Workforce Communication",
      description: "Keep your international teams connected with instant, high-quality messaging services, ensuring smooth operations no matter where your employees are located.",
      image: img1, // Using img1 again or import another image
      hasButton: true
    }
  ];

  return (
    <section id="communication-tools" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="grid text-black grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <motion.div 
              key={tool.title} 
              className="bg-white rounded-[20px] overflow-hidden shadow-sm flex flex-row h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}>
              
              {/* Image Section */}
              <div className="w-1/2 relative">
                <Image
                    src={tool.image}
                    alt={tool.title}
                    fill
                    className="object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="w-1/2 p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{tool.description}</p>
                
                {tool.hasButton && (
                  <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-auto"
                  >
                      <Link 
                          href="/signup" 
                          className="inline-block bg-[#40196D] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#351458] transition-colors"
                      >
                          Start for free
                      </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCommunicationTools;