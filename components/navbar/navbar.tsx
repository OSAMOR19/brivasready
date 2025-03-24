"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { MobileMenu } from "./mobile-menu"
import { DesktopMenu } from "./desktop-menu"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && (e.target as HTMLElement).id === 'overlay') {
        setIsMenuOpen(false)
      }
    }
    
    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('click', handleClickOutside)
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-[#40196D]">
              YourLogo
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <DesktopMenu />
          
          {/* Auth buttons (hidden on mobile) */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/stage.brivas.io" 
              className="py-2 px-4 text-[#40196D] hover:underline"
            >
              Log in
            </Link>
            <Link 
              href="/stage.brivas.io" 
              className="py-2 px-4 bg-[#40196D] text-white rounded-lg hover:bg-[#40196D]/90"
            >
              Sign up
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-gray-900" />
          </button>
        </div>
      </div>
      
      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div 
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
        />
      )}
      
      {/* Mobile menu slide-in */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Menu</h2>
          <button 
            className="p-2 rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-900" />
          </button>
        </div>
        
        <MobileMenu closeMenu={() => setIsMenuOpen(false)} />
      </div>
    </header>
  )
}