"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  ChevronDown, 
  ChevronRight,
  MessageSquare,
  ShieldCheck,
  Layout,
  MessageCircle,
  Phone,
  PhoneCall,
  Building2,
  Briefcase,
  GraduationCap,
  Store,
  HeartPulse,
  Building,
  Rocket,
  Heart,
  MessageSquareDashed,
} from "lucide-react"

export function MobileMenu() {
  const [openSections, setOpenSections] = useState({
    products: false,
    solutions: false,
    partners: false,
    resources: false,
  })

  const [openSubSections, setOpenSubSections] = useState({
    messaging: false,
    verification: false,
    selfHosted: false,
    businessTypes: false,
    industries: false,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const toggleSubSection = (subSection: keyof typeof openSubSections) => {
    setOpenSubSections(prev => ({
      ...prev,
      [subSection]: !prev[subSection]
    }))
  }

  return (
    <div className="lg:hidden bg-white border-t border-gray-200 overflow-y-auto max-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4 py-4 space-y-4">
        {/* Products Section */}
        <div>
          <button 
            className="flex items-center justify-between w-full py-2 text-left"
            onClick={() => toggleSection("products")}
          >
            <span className="font-medium text-gray-900">Products</span>
            {openSections.products ? <ChevronDown className="w-5 h-5 text-gray-500" /> : <ChevronRight className="w-5 h-5 text-gray-500" />}
          </button>
          
          {openSections.products && (
            <div className="pl-4 mt-2 space-y-4">
              {/* Messaging */}
              <div>
                <button 
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => toggleSubSection("messaging")}
                >
                  <div className="flex items-center">
                    <div className="w-[30px] h-[30px] rounded-lg bg-[#40196D]/10 flex items-center justify-center mr-3">
                      <MessageSquare className="w-4 h-4 text-[#40196D]" />
                    </div>
                    <span className="text-gray-900">Messaging</span>
                  </div>
                  {openSubSections.messaging ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />}
                </button>
                
                {openSubSections.messaging && (
                  <div className="pl-9 mt-2 space-y-3">
                    <Link href="/products/sms" className="block py-2">
                      <div className="flex items-center">
                        <div className="w-[24px] h-[24px] rounded-md bg-[#40196D]/10 flex items-center justify-center mr-3">
                          <MessageCircle className="w-3 h-3 text-[#40196D]" />
                        </div>
                        <span className="text-sm text-gray-900">SMS</span>
                      </div>
                    </Link>
                    <Link href="/products/voice" className="block py-2">
                      <div className="flex items-center">
                        <div className="w-[24px] h-[24px] rounded-md bg-[#40196D]/10 flex items-center justify-center mr-3">
                          <Phone className="w-3 h-3 text-[#40196D]" />
                        </div>
                        <span className="text-sm text-gray-900">Voice</span>
                      </div>
                    </Link>
                    <Link href="/products/flash-call" className="block py-2">
                      <div className="flex items-center">
                        <div className="w-[24px] h-[24px] rounded-md bg-[#40196D]/10 flex items-center justify-center mr-3">
                          <PhoneCall className="w-3 h-3 text-[#40196D]" />
                        </div>
                        <span className="text-sm text-gray-900">Flash Call</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Verification */}
              <div>
                <button 
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => toggleSubSection("verification")}
                >
                  <div className="flex items-center">
                    <div className="w-[30px] h-[30px] rounded-lg bg-[#40196D]/10 flex items-center justify-center mr-3">
                      <ShieldCheck className="w-4 h-4 text-[#40196D]" />
                    </div>
                    <span className="text-gray-900">Verification</span>
                  </div>
                  {openSubSections.verification ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />}
                </button>
                
                {openSubSections.verification && (
                  <div className="pl-9 mt-2 space-y-3">
                    <Link href="/products/sms-otp" className="block py-2">
                      <div className="flex items-center">
                        <div className="w-[24px] h-[24px] rounded-md bg-[#40196D]/10 flex items-center justify-center mr-3">
                          <MessageSquareDashed className="w-3 h-3 text-[#40196D]" />
                        </div>
                        <span className="text-sm text-gray-900">SMS OTP</span>
                      </div>
                    </Link>
                    <Link href="/products/flash-call" className="block py-2">
                      <div className="flex items-center">
                        <div className="w-[24px] h-[24px] rounded-md bg-[#40196D]/10 flex items-center justify-center mr-3">
                          <PhoneCall className="w-3 h-3 text-[#40196D]" />
                        </div>
                        <span className="text-sm text-gray-900">Flash Call</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Self-Hosted */}
              <div>
                <button 
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => toggleSubSection("selfHosted")}
                >
                  <div className="flex items-center">
                    <div className="w-[30px] h-[30px] rounded-lg bg-[#40196D]/10 flex items-center justify-center mr-3">
                      <Layout className="w-4 h-4 text-[#40196D]" />
                    </div>
                    <span className="text-gray-900">Self-Hosted</span>
                  </div>
                  {openSubSections.selfHosted ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />}
                </button>
                
                {openSubSections.selfHosted && (
                  <div className="pl-9 mt-2 space-y-3">
                    <Link href="/products/sms-mo" className="block py-2">
                      <div className="flex items-center">
                        <div className="w-[24px] h-[24px] rounded-md bg-[#40196D]/10 flex items-center justify-center mr-3">
                          <MessageSquareDashed className="w-3 h-3 text-[#40196D]" />
                        </div>
                        <span className="text-sm text-gray-900">SMS MO</span>
                      </div>
                    </Link>
                    <Link href="/products/ussd-pull" className="block py-2">
                      <div className="flex items-center">
                        <div className="w-[24px] h-[24px] rounded-md bg-[#40196D]/10 flex items-center justify-center mr-3">
                          <PhoneCall className="w-3 h-3 text-[#40196D]" />
                        </div>
                        <span className="text-sm text-gray-900">USSD PULL</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* Solutions Section */}
        <div>
          <button 
            className="flex items-center justify-between w-full py-2 text-left"
            onClick={() => toggleSection("solutions")}
          >
            <span className="font-medium text-gray-900">Solutions</span>
            {openSections.solutions ? <ChevronDown className="w-5 h-5 text-gray-500" /> : <ChevronRight className="w-5 h-5 text-gray-500" />}
          </button>
          
          {openSections.solutions && (
            <div className="pl-4 mt-2 space-y-4">
              {/* Business Types */}
              <div>
                <button 
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => toggleSubSection("businessTypes")}
                >
                  <span className="text-gray-900">By Business Type</span>
                  {openSubSections.businessTypes ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />}
                </button>
                
                {openSubSections.businessTypes && (
                  <div className="pl-4 mt-2 space-y-3">
                    <Link href="/solutions/enterprise" className="flex items-center py-2">
                      <div className="w-[24px] h-[24px] rounded-md bg-[#40196D]/10 flex items-center justify-center mr-3">
                        <Building2 className="w-3 h-3 text-[#40196D]" />
                      </div>
                      <span className="text-sm text-gray-900">Enterprise</span>
                    </Link>
                    <Link href="/solutions/startup" className="flex items-center py-2">
                      <div className="w-[24px] h-[24px] rounded-md bg-[#40196D]/10 flex items-center justify-center mr-3">
                        <Rocket className="w-3 h-3 text-[#40196D]" />
                      </div>
                      <span className="text-sm text-gray-900">Startups</span>
                    </Link>
                    <Link href="/solutions/non-profit" className="flex items-center py-2">
                      <div className="w-[24px] h-[24px] rounded-md bg-[#40196D]/10 flex items-center justify-center mr-3">
                        <Heart className="w-3 h-3 text-[#40196D]" />
                      </div>
                      <span className="text-sm text-gray-900">Non-Profit</span>
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Industries */}
              <div>
                <button 
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => toggleSubSection("industries")}
                >
                  <span className="text-gray-900">By Industry</span>
                  {openSubSections.industries ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />}
                </button>
                
                {openSubSections.industries && (
                  <div className="pl-4 mt-2 space-y-3">
                    <Link href="/solutions/healthcare" className="flex items-center py-2">
                      <div className="w-[24px] h-[24px] rounded-md bg-[#40196D]/10 flex items-center justify-center mr-3">
                        <HeartPulse className="w-3 h-3 text-[#40196D]" />
                      </div>
                      <span className="text-sm text-gray-900">Healthcare</span>
                    </Link>
                    <Link href="/solutions/education" className="flex items-center py-2">
                      <div className="w-[24px] h-[24px] rounded-md bg-[#40196D]/10 flex items-center justify-center mr-3">
                        <GraduationCap className="w-3 h-3 text-[#40196D]" />
                      </div>
                      <span className="text-sm text-gray-900">Education</span>
                    </Link>
                    <Link href="/solutions/ecommerce" className="flex items-center py-2">
                      <div className="w-[24px] h-[24px] rounded-md bg-[#40196D]/10 flex items-center justify-center mr-3">
                        <Store className="w-3 h-3 text-[#40196D]" />
                      </div>
                      <span className="text-sm text-gray-900">E-commerce</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* Partners Section */}
        <div>
          <button 
            className="flex items-center justify-between w-full py-2 text-left"
            onClick={() => toggleSection("partners")}
          >
            <span className="font-medium text-gray-900">Partners</span>
            {openSections.partners ? <ChevronDown className="w-5 h-5 text-gray-500" /> : <ChevronRight className="w-5 h-5 text-gray-500" />}
          </button>
          
          {openSections.partners && (
            <div className="pl-4 mt-2 space-y-3">
              <Link href="/partners/become-partner" className="flex items-center py-2">
                <div className="w-[30px] h-[30px] rounded-lg bg-[#40196D]/10 flex items-center justify-center mr-3">
                  <Briefcase className="w-4 h-4 text-[#40196D]" />
                </div>
                <span className="text-gray-900">Become a Partner</span>
              </Link>
              <Link href="/partners/find-partner" className="flex items-center py-2">
                <div className="w-[30px] h-[30px] rounded-lg bg-[#40196D]/10 flex items-center justify-center mr-3">
                  <Building className="w-4 h-4 text-[#40196D]" />
                </div>
                <span className="text-gray-900">Find a Partner</span>
              </Link>
            </div>
          )}
        </div>
        
        {/* Resources Section */}
        <div>
          <button 
            className="flex items-center justify-between w-full py-2 text-left"
            onClick={() => toggleSection("resources")}
          >
            <span className="font-medium text-gray-900">Resources</span>
            {openSections.resources ? <ChevronDown className="w-5 h-5 text-gray-500" /> : <ChevronRight className="w-5 h-5 text-gray-500" />}
          </button>
          
          {openSections.resources && (
            <div className="pl-4 mt-2 space-y-3">
              <Link href="/resources/documentation" className="block py-2 text-gray-900">Documentation</Link>
              <Link href="/resources/blog" className="block py-2 text-gray-900">Blog</Link>
              <Link href="/resources/case-studies" className="block py-2 text-gray-900">Case Studies</Link>
              <Link href="/resources/help-center" className="block py-2 text-gray-900">Help Center</Link>
            </div>
          )}
        </div>
        
        {/* Pricing */}
        <div>
          <Link href="/pricing" className="block py-2 font-medium text-gray-900">
            Pricing
          </Link>
        </div>
        
        {/* Contact */}
        <div>
          <Link href="/contact" className="block py-2 font-medium text-gray-900">
            Contact
          </Link>
        </div>
        
        {/* Login/Sign Up */}
        <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
          <Link 
            href="/login" 
            className="py-2 px-4 text-center bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Log in
          </Link>
          <Link 
            href="/signup" 
            className="py-2 px-4 text-center bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
} 