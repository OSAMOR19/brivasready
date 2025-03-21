"use client"

import Link from "next/link"
import { BarChart3, ChevronDown, GraduationCap, HeartPulse, Phone, ShoppingCart, Store } from "lucide-react";

export function DesktopMenu() {
  return (
    <div className="hidden lg:flex items-center space-x-8">
      {/* Products link */}
      <Link href="/products" className="text-gray-900 hover:text-[#40196D]">Products</Link>
      
      {/* Solutions dropdown */}
      <div className="group relative">
        <button className="flex items-center gap-1 text-gray-900 hover:text-[#40196D]">
          Solutions <ChevronDown className="h-4 w-4" />
        </button>
        
        <div className="absolute left-0 top-full z-10 mt-2 hidden w-screen max-w-[900px] rounded-lg bg-white p-6 shadow-lg group-hover:block">
          <div className="grid grid-cols-3 gap-8">
            {/* Business section */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Business</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            
            {/* Industries section */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Industries</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur. Ac dictum felis massa odio eu pellentesque.</p>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Link href="/solutions/education" className="flex items-center gap-2">
                  <div className="rounded-lg bg-[#40196D]/10 p-2">
                    <GraduationCap className="h-5 w-5 text-[#40196D]" />
                  </div>
                  <div>
                    <p className="font-medium">Education</p>
                    <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet</p>
                  </div>
                </Link>
                
                <Link href="/solutions/healthcare" className="flex items-center gap-2">
                  <div className="rounded-lg bg-[#40196D]/10 p-2">
                    <HeartPulse className="h-5 w-5 text-[#40196D]" />
                  </div>
                  <div>
                    <p className="font-medium">Healthcare</p>
                    <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet</p>
                  </div>
                </Link>
                
                <Link href="/solutions/retail" className="flex items-center gap-2">
                  <div className="rounded-lg bg-[#40196D]/10 p-2">
                    <Store className="h-5 w-5 text-[#40196D]" />
                  </div>
                  <div>
                    <p className="font-medium">Retail</p>
                    <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet</p>
                  </div>
                </Link>
                
                <Link href="/solutions/telecommunications" className="flex items-center gap-2">
                  <div className="rounded-lg bg-[#40196D]/10 p-2">
                    <Phone className="h-5 w-5 text-[#40196D]" />
                  </div>
                  <div>
                    <p className="font-medium">Telecommunications</p>
                    <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet</p>
                  </div>
                </Link>
                
                <Link href="/solutions/financial-services" className="flex items-center gap-2">
                  <div className="rounded-lg bg-[#40196D]/10 p-2">
                    <BarChart3 className="h-5 w-5 text-[#40196D]" />
                  </div>
                  <div>
                    <p className="font-medium">Financial Services</p>
                    <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet</p>
                  </div>
                </Link>
                
                <Link href="/solutions/ecommerce" className="flex items-center gap-2">
                  <div className="rounded-lg bg-[#40196D]/10 p-2">
                    <ShoppingCart className="h-5 w-5 text-[#40196D]" />
                  </div>
                  <div>
                    <p className="font-medium">E-commerce</p>
                    <p className="text-xs text-gray-600">Lorem ipsum dolor sit amet</p>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Channels section */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Channels</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Other nav items */}
      <Link href="/partners" className="text-gray-900 hover:text-[#40196D]">Partners</Link>
      <Link href="/resources" className="text-gray-900 hover:text-[#40196D]">Resources</Link>
      <Link href="/pricing" className="text-gray-900 hover:text-[#40196D]">Pricing</Link>
      <Link href="/contact" className="text-gray-900 hover:text-[#40196D]">Contact</Link>
    </div>
  )
}