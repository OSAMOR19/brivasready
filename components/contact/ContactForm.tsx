"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    reason: "General Inquiry",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form or show success message
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and our team will get back to you as soon as possible.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#40196D] focus:border-[#40196D] outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#40196D] focus:border-[#40196D] outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#40196D] focus:border-[#40196D] outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#40196D] focus:border-[#40196D] outline-none"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#40196D] focus:border-[#40196D] outline-none"
              />
            </div>
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                Reason for Contact
              </label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#40196D] focus:border-[#40196D] outline-none"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Sales">Sales</option>
                <option value="Support">Support</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#40196D] focus:border-[#40196D] outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black border border-gray-300 py-3 px-6 rounded-md hover:bg-gray-50 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="bg-gray-50 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-6">Our Offices</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-[#40196D]/10 flex items-center justify-center mr-4 mt-1">
                  <MapPin className="w-5 h-5 text-[#40196D]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Headquarters</h4>
                  <p className="text-gray-600">
                    123 Main Street<br />
                    Suite 456<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-[#40196D]/10 flex items-center justify-center mr-4 mt-1">
                  <MapPin className="w-5 h-5 text-[#40196D]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Europe Office</h4>
                  <p className="text-gray-600">
                    456 Park Avenue<br />
                    London, EC2A 4NE<br />
                    United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <p className="text-gray-600 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
} 