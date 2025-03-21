"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import womansmile from "@/components/Images/pics/womansile2.svg";

const HeroSection = () => {
  return (
    <div className="bg-gray-50 pt-16 pb-0 overflow-visible relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-semibold tracking-tight text-black mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Engage Your <br />
              Customers with <br />
              SMS MO
            </motion.h1>
            <motion.p
              className="text-xl text-black mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Enable two-way communication with your audience by receiving
              messages directly from their mobile phones.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Link
                href="/signup"
                className="px-8 py-3 bg-[#B30000] text-white rounded-full hover:bg-[#990000] transition-colors font-medium"
              >
                Start for free
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative z-10 mb-[-120px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative flex justify-center items-center">
              <motion.div
                className="w-full max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <Image
                  src={womansmile}
                  alt="Mobile messaging interface"
                  width={500}
                  height={700}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
