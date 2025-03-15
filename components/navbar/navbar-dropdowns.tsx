"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  MessageSquare,
  ShieldCheck,
  Layout,
  MessageCircle,
  Phone,
  MessageSquareDashed,
  PhoneCall,
  Building2,
  Briefcase,
  GraduationCap,
  Store,
  HeartPulse,
  Building,
  Rocket,
  Heart,
  Landmark,
} from "lucide-react"

// Define dropdown and hover state types
type DropdownState = {
  products: boolean
  solutions: boolean
  partners: boolean
  resources: boolean
}

type HoverState = {
  messaging: boolean
  verification: boolean
  selfHosted: boolean
  business: boolean
  industries: boolean
}

export function NavbarDropdowns() {
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
    products: false,
    solutions: false,
    partners: false,
    resources: false,
  })

  const [hoverState, setHoverState] = useState<HoverState>({
    messaging: false,
    verification: false,
    selfHosted: false,
    business: false,
    industries: false,
  })

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (dropdown: keyof DropdownState) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    setDropdownOpen((prev) => ({
      ...Object.keys(prev).reduce((acc, key) => {
        acc[key as keyof DropdownState] = false
        return acc
      }, {} as DropdownState),
      [dropdown]: true,
    }))
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen({
        products: false,
        solutions: false,
        partners: false,
        resources: false,
      })
      setHoverState({
        messaging: false,
        verification: false,
        selfHosted: false,
        business: false,
        industries: false,
      })
    }, 300)
  }

  const handleCategoryHover = (category: keyof HoverState) => {
    setHoverState((prev) => ({
      ...Object.keys(prev).reduce((acc, key) => {
        acc[key as keyof HoverState] = false
        return acc
      }, {} as HoverState),
      [category]: true,
    }))
  }

  return (
    <>
      {/* Products Dropdown */}
      <div className="relative" onMouseEnter={() => handleMouseEnter("products")} onMouseLeave={handleMouseLeave}>
        <button className="px-3 py-2 text-gray-800 hover:text-[#40196D] transition-colors flex items-center">
          Products
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <AnimatePresence>
          {dropdownOpen.products && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-[600px] bg-white rounded-[20px] shadow-lg border border-gray-200 p-6"
            >
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div
                      className="block p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors"
                      onMouseEnter={() => handleCategoryHover("messaging")}
                    >
                      <div className="flex items-center">
                        <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                          <MessageSquare className="w-5 h-5 text-[#40196D]" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Messaging</div>
                          <div className="text-sm text-gray-500">
                            Versatile communications with our messaging platform
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="block p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors"
                      onMouseEnter={() => handleCategoryHover("verification")}
                    >
                      <div className="flex items-center">
                        <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                          <ShieldCheck className="w-5 h-5 text-[#40196D]" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Verification</div>
                          <div className="text-sm text-gray-500">
                            Our verification solutions ensure user security and confidence
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="block p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors"
                      onMouseEnter={() => handleCategoryHover("selfHosted")}
                    >
                      <div className="flex items-center">
                        <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                          <Layout className="w-5 h-5 text-[#40196D]" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Self-Hosted</div>
                          <div className="text-sm text-gray-500">
                            Enhance customer connections with our versatile application suite
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Channels</h3>
                  </div>
                  <div className="space-y-4">
                    {/* Messaging hover content */}
                    {hoverState.messaging && (
                      <>
                        <Link href="/products/sms" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors">
                          <div className="flex items-center">
                            <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                              <MessageCircle className="w-5 h-5 text-[#40196D]" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">SMS</div>
                              <div className="text-sm text-gray-500">
                                Reliable text messaging for businesses
                              </div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/products/voice" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors">
                          <div className="flex items-center">
                            <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                              <Phone className="w-5 h-5 text-[#40196D]" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Voice</div>
                              <div className="text-sm text-gray-500">
                                Crystal-clear voice communication solutions
                              </div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/products/flash-call" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors">
                          <div className="flex items-center">
                            <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                              <PhoneCall className="w-5 h-5 text-[#40196D]" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Flash Call</div>
                              <div className="text-sm text-gray-500">
                                Quick verification through missed calls
                              </div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/signup" className="mt-4 block">
                          <button className="w-full bg-[#40196D] text-white border border-gray-300 px-6 py-2.5 rounded-full font-medium hover:bg-gray-50 transition-all">
                            Start for free
                          </button>
                        </Link>
                      </>
                    )}

                    {/* Verification hover content */}
                    {hoverState.verification && (
                      <>
                        <Link href="/products/sms-otp" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors">
                          <div className="flex items-center">
                            <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                              <MessageSquareDashed className="w-5 h-5 text-[#40196D]" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">SMS OTP</div>
                              <div className="text-sm text-gray-500">Instant verification codes via SMS</div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/products/flash-call" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors">
                          <div className="flex items-center">
                            <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                              <Phone className="w-5 h-5 text-[#40196D]" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Flash Call</div>
                              <div className="text-sm text-gray-500">Quick verification through missed calls</div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/signup" className="mt-4 block">
                          <button className="w-full bg-[#40196D] text-white border border-gray-300 px-6 py-2.5 rounded-full font-medium hover:bg-gray-50 transition-all">
                            Start for free
                          </button>
                        </Link>
                      </>
                    )}

                    {/* Self-Hosted hover content */}
                    {hoverState.selfHosted && (
                      <>
                        <Link href="/products/sms-mo" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors">
                          <div className="flex items-center">
                            <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                              <MessageSquareDashed className="w-5 h-5 text-[#40196D]" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">SMS MO</div>
                              <div className="text-sm text-gray-500">Mobile originated messaging solution</div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/products/ussd-pull" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors">
                          <div className="flex items-center">
                            <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                              <PhoneCall className="w-5 h-5 text-[#40196D]" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">USSD PULL</div>
                              <div className="text-sm text-gray-500">Interactive mobile service platform</div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/contact" className="mt-4 block">
                          <button className="w-full bg-[#40196D] text-white border border-gray-300 px-6 py-2.5 rounded-full font-medium  transition-all">
                            Contact Sales
                          </button>
                        </Link>
                      </>
                    )}

                    {/* Show nothing when no category is hovered */}
                    {!hoverState.messaging && !hoverState.verification && !hoverState.selfHosted && (
                      <div className="text-center py-8 text-gray-500">
                        <p>Hover over a category to see options</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Solutions Dropdown */}
      <div className="relative" onMouseEnter={() => handleMouseEnter("solutions")} onMouseLeave={handleMouseLeave}>
        <button className="px-3 py-2 text-gray-800 hover:text-[#40196D] transition-colors flex items-center">
          Solutions
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <AnimatePresence>
          {dropdownOpen.solutions && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-[600px] bg-white rounded-[20px] shadow-lg border border-gray-200 p-6"
            >
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div
                      className="block p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors"
                      onMouseEnter={() => handleCategoryHover("business")}
                    >
                      <div className="flex items-center">
                        <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                          <Building2 className="w-5 h-5 text-[#40196D]" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Business</div>
                          <div className="text-sm text-gray-500">Solutions for businesses of all sizes</div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="block p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors"
                      onMouseEnter={() => handleCategoryHover("industries")}
                    >
                      <div className="flex items-center">
                        <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                          <Briefcase className="w-5 h-5 text-[#40196D]" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Industries</div>
                          <div className="text-sm text-gray-500">Tailored solutions for specific industries</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Options</h3>
                  </div>
                  <div className="space-y-4">
                    {/* Business hover content */}
                    {hoverState.business && (
                      <>
                        <Link href="/solutions/startup" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors">
                          <div className="flex items-center">
                            <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                              <Rocket className="w-5 h-5 text-[#40196D]" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Startup</div>
                              <div className="text-sm text-gray-500">Solutions for growing businesses</div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/solutions/enterprise" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors">
                          <div className="flex items-center">
                            <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                              <Building className="w-5 h-5 text-[#40196D]" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Enterprise</div>
                              <div className="text-sm text-gray-500">Scalable solutions for large organizations</div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/solutions/non-profit" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors">
                          <div className="flex items-center">
                            <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                              <Heart className="w-5 h-5 text-[#40196D]" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Non-Profit</div>
                              <div className="text-sm text-gray-500">Special solutions for nonprofit organizations</div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/contact" className="mt-4 block">
                          <button className="w-full bg-[#40196D] text-white border border-gray-300 px-6 py-2.5 rounded-full font-medium hover:bg-gray-50 transition-all">
                            Contact Sales
                          </button>
                        </Link>
                      </>
                    )}

                    {/* Industries hover content */}
                    {hoverState.industries && (
                      <>
                        <Link href="/solutions/ecommerce" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors">
                          <div className="flex items-center">
                            <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                              <Store className="w-5 h-5 text-[#40196D]" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">E-commerce</div>
                              <div className="text-sm text-gray-500">Solutions for online retailers</div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/solutions/education" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors">
                          <div className="flex items-center">
                            <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                              <GraduationCap className="w-5 h-5 text-[#40196D]" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Education</div>
                              <div className="text-sm text-gray-500">Solutions for educational institutions</div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/solutions/healthcare" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors">
                          <div className="flex items-center">
                            <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                              <HeartPulse className="w-5 h-5 text-[#40196D]" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Healthcare</div>
                              <div className="text-sm text-gray-500">HIPAA-compliant solutions for healthcare</div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/solutions/industries" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors">
                          <div className="flex items-center">
                            <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                              <Landmark className="w-5 h-5 text-[#40196D]" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Financial Services</div>
                              <div className="text-sm text-gray-500">Secure solutions for financial institutions</div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/contact" className="mt-4 block">
                          <button className="w-full bg-[#40196D] text-black border border-gray-300 px-6 py-2.5 rounded-full font-medium hover:bg-gray-50 transition-all">
                            Contact Sales
                          </button>
                        </Link>
                      </>
                    )}

                    {/* Show nothing when no category is hovered */}
                    {!hoverState.business && !hoverState.industries && (
                      <div className="text-center py-8 text-gray-500">
                        <p>Hover over a category to see options</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Partners Dropdown */}
      <div className="relative" onMouseEnter={() => handleMouseEnter("partners")} onMouseLeave={handleMouseLeave}>
        <button className="px-3 py-2 text-gray-800 hover:text-[#40196D] transition-colors flex items-center">
          Partners
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <AnimatePresence>
          {dropdownOpen.partners && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-[300px] bg-white rounded-[20px] shadow-lg border border-gray-200 p-6"
            >
              <div className="space-y-4">
                <Link href="/partners/become-partner" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center">
                    <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                      <Briefcase className="w-5 h-5 text-[#40196D]" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Become a Partner</div>
                      <div className="text-sm text-gray-500">
                        Join our partner program
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/partners/find-partner" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center">
                    <div className="w-[34px] h-[34px] rounded-xl bg-[#40196D]/10 flex items-center justify-center mr-3">
                      <Building className="w-5 h-5 text-[#40196D]" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Find a Partner</div>
                      <div className="text-sm text-gray-500">
                        Locate a Brivas partner near you
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Resources Dropdown */}
      <div className="relative" onMouseEnter={() => handleMouseEnter("resources")} onMouseLeave={handleMouseLeave}>
        <button className="px-3 py-2 text-gray-800 hover:text-[#40196D] transition-colors flex items-center">
          Resources
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <AnimatePresence>
          {dropdownOpen.resources && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-[300px] bg-white rounded-[20px] shadow-lg border border-gray-200 p-6"
            >
              <div className="space-y-4">
                <Link href="/resources/documentation" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors text-gray-900">
                  Documentation
                </Link>
                <Link href="/resources/blog" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors text-gray-900">
                  Blog
                </Link>
                <Link href="/resources/case-studies" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors text-gray-900">
                  Case Studies
                </Link>
                <Link href="/resources/help-center" className="block p-3 hover:bg-gray-50 rounded-xl transition-colors text-gray-900">
                  Help Center
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Pricing */}
      <Link href="/pricing" className="px-3 py-2 text-gray-800 hover:text-[#40196D] transition-colors">
        Pricing
      </Link>
    </>
  )
} 