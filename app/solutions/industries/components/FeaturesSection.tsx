"use client"
import Image from 'next/image';
// Add motion import at the top
import { motion } from 'framer-motion';
import illurationimg from "@/components/Images/pics/healthwoman.svg"

const IntegrationFeatures = () => {
  const features = [
    {
      title: "Fundraising Campaigns",
      description: "Use Bulk SMS to send targeted appeals and updates to your donor base, ensuring maximum engagement and support for your mission."
    },
    {
      title: "Event Coordination",
      description: "Keep volunteers informed and aligned through SMS updates, ensuring smooth coordination and participation in your events."
    },
    {
      title: "Community Outreach",
      description: "Use our scalable messaging platform to reach out to communities with updates, announcements, or calls to action, making sure your message gets heard."
    },
    {
      title: "Secure Donor Verification",
      description: "With SMS OTP, donors can securely verify their identities and payments, ensuring a trusted and secure fundraising experience."
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl text-black font-semibold mb-4">
          Revolutionizing Communication in Healthcare
          </h2>
          <p className="text-gray-600 ">
          In a sector where communication is critical, BRIVAS empowers healthcare providers to streamline their operations, enhance patient care, and build trust through effective messaging solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-2xl flex items-center justify-center p-8">
              <Image
                src={illurationimg}
                alt="Non-profit illustration"
                width={500}
                height={500}
                className="object-contain w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right side - Features */}
          <div>
            
            <div className=" text-black space-y-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 rounded-full border-2 border-[#B891E5]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationFeatures;