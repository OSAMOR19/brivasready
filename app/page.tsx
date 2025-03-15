"use client"

import { Hero, WhyChoose, OurServices, Testimonials, CTA } from "@/components/home"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <WhyChoose />
      <OurServices />
      <Testimonials />
      <CTA />
    </div>
  )
}

