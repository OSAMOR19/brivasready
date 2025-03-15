"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function CTA() {
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={ctaRef}
      initial={{ opacity: 0 }}
      animate={ctaInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full py-16 md:py-24 bg-white"
    >
      
    </motion.section>
  )
} 