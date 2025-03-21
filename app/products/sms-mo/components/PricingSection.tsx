"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResellerPricing() {
  return (
    <div className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-black font-bold mb-4">
        Flexible Pricing to Suit Your Needs 
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
        Whether you're running small campaigns or managing large-scale customer service interactions, BRIVAS offers pricing plans to fit your business.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Starter Plan */}
        <motion.div 
          className="w-80 p-[1px] rounded-3xl bg-gradient-to-b from-[#40196D]/30 to-[#FFFFFF] relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="bg-white rounded-3xl p-8 h-[383px] flex flex-col">
            <h3 className="text-2xl mt-7 text-center text-black font-bold mb-4">Basic</h3>
            <p className="text-gray-600 text-center text-sm mb-auto">
            deal for small businesses with limited incoming SMS needs.
            </p>
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/start-free"
                className="block w-full py-3 border border-[#40196D] text-[#40196D] rounded-full text-center hover:bg-gray-50 transition-colors"
              >
                Start for free
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Professional Plan */}
        <motion.div 
          className="w-80 p-[1px] rounded-3xl bg-gradient-to-b from-[#40196D] to-[#FFFFFF] relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="bg-white rounded-3xl p-8 h-[383px] flex flex-col">
            <h3 className="text-2xl mt-7 text-center text-black font-bold mb-4">Growth plan</h3>
            <p className="text-gray-600 text-center text-sm mb-auto">
            Designed for medium-sized businesses scaling their two-way SMS interactions.
            </p>
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/talk-expert"
                className="block w-full py-3 bg-[#40196D] text-white rounded-full text-center hover:bg-[#40196D]/90 transition-colors"
              >
                Talk to an expert
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Enterprise Plan */}
        <motion.div 
          className="w-80 p-[1px] rounded-3xl bg-gradient-to-b from-[#40196D]/30 to-[#FFFFFF] relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="bg-white rounded-3xl p-8 h-[383px] flex flex-col">
            <h3 className="text-2xl mt-7 text-center text-black font-bold mb-4">Enterprise</h3>
            <p className="text-gray-600 text-center text-sm mb-auto">
            Custom solutions for large enterprises with high-volume messaging requirements.
            </p>
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/talk-expert"
                className="block w-full py-3 border border-[#40196D] text-[#40196D] rounded-full text-center hover:bg-gray-50 transition-colors"
              >
                Talk to an expert
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}