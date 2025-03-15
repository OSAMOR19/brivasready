"use client"

import ContactHeader from "@/components/contact/ContactHeader"
import ContactMethods from "@/components/contact/ContactMethods"
import ContactForm from "@/components/contact/ContactForm"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <ContactHeader />
      <ContactMethods />
      <ContactForm />
    </div>
  )
} 