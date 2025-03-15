"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavbarDropdowns } from "./navbar-dropdowns";
import { MobileMenu } from "./mobile-menu";
import logo from "@/components/Images/logos/brivaslogo.svg";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Brivas Logo" width={100} height={32} className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <NavbarDropdowns />
          </nav>

          {/* Login/Sign Up */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="px-5 py-2 border border-gray-400 text-gray-900 rounded-[24px] hover:bg-gray-100 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-[#40196D] text-white border border-gray-300 rounded-[24px] hover:[#40196D] transition"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden flex items-center" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && <MobileMenu />}
    </header>
  );
}
