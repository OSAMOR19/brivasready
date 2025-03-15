'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EcommerceCommunicationTools = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('ecommerce-communication-tools');
      
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
      title: "Order Notifications",
      description: "Keep customers informed about their orders with automated confirmation, shipping, and delivery notifications.",
      imageWidth: 300,
      imageHeight: 200,
      imageUrl: "https://placehold.co/300x200?text=Order+Notifications&bg=1a1a2e&fg=ffffff",
      hasButton: true
    },
    {
      title: "Promotional Campaigns",
      description: "Drive sales with targeted SMS campaigns for special offers, flash sales, and seasonal promotions.",
      imageWidth: 300,
      imageHeight: 200,
      imageUrl: "https://placehold.co/300x200?text=Promotional+Campaigns&bg=1a1a2e&fg=ffffff",
      hasButton: false
    },
    {
      title: "Secure Authentication",
      description: "Protect customer accounts with SMS verification for logins, password resets, and high-value purchases.",
      imageWidth: 300,
      imageHeight: 200,
      imageUrl: "https://placehold.co/300x200?text=Secure+Authentication&bg=1a1a2e&fg=ffffff",
      hasButton: true
    },
    {
      title: "Customer Engagement",
      description: "Build loyalty with personalized messages, exclusive offers, and timely reminders that keep customers coming back.",
      imageWidth: 300,
      imageHeight: 200,
      imageUrl: "https://placehold.co/300x200?text=Customer+Engagement&bg=1a1a2e&fg=ffffff",
      hasButton: true
    }
  ];

  return (
    <section id="ecommerce-communication-tools" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
        >
          E-Commerce Communication Tools
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <motion.div 
              key={tool.title} 
              className="bg-white rounded-[20px] overflow-hidden shadow-sm flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Image */}
              <motion.div 
                className="relative h-48"
                animate={{ 
                  scale: activeCard === index ? 1.05 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={tool.imageUrl}
                  alt={tool.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{tool.description}</p>
                
                {tool.hasButton && (
                  <div className="mt-auto">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        href="/signup" 
                        className="inline-block bg-[#40196D] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#351458] transition-colors"
                      >
                        Start for free
                      </Link>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceCommunicationTools; 