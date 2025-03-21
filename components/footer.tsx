"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, Phone, MapPin, Clock } from "lucide-react";
import Logo from "@/components/Images/logos/brivaslogo.svg";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#f8f9fc] pb-10 pt-40">
      {/* Empowering Communication Section */}
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#40196D] mb-6">
            Empowering Communication, Building Connections.
          </h2>
          <Link href="/contact">
            <button className="bg-[#a4031f] text-white px-6 py-3 rounded-full hover:bg-[#a4031f]/90 transition-colors">
              Talk to an expert
            </button>
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and Social Links */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={Logo}
                alt="Brivas Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex text-black space-x-3 mb-6">
              <a
                href="brivas.io/login"
                className="bg-white w-8 h-8 rounded-full flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="brivas.io/login"
                className="bg-white w-8 h-8 rounded-full flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                </svg>
              </a>
              <a
                href="brivas.io/login"
                className="bg-white w-8 h-8 rounded-full flex items-center justify-center"
                aria-label="X (Twitter)"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="brivas.io/login"
                className="bg-white w-8 h-8 rounded-full flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="flex text-black items-center cursor-pointer hover:text-[#40196D] transition-colors"
            >
              <ArrowUp className="w-5 h-5 mr-2" />
              <span className="text-sm">Back to top</span>
            </button>
          </div>
          {/* Products Column */}
          <div>
            <h3 className="text-gray-600 font-medium mb-4 lowercase">
              products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/bulk-sms"
                  className="text-gray-700 hover:text-[#40196D] text-sm"
                >
                  Bulk SMS
                </Link>
              </li>
              <li>
                <Link
                  href="/products/sms-otp"
                  className="text-gray-700 hover:text-[#40196D] text-sm"
                >
                  SMS OTP
                </Link>
              </li>
              <li>
                <Link
                  href="/products/flash-call"
                  className="text-gray-700 hover:text-[#40196D] text-sm"
                >
                  Flash Call
                </Link>
              </li>
              <li>
                <Link
                  href="/products/ussd-pull"
                  className="text-gray-700 hover:text-[#40196D] text-sm"
                >
                  USSD Pull
                </Link>
              </li>
              <li>
                <Link
                  href="/products/sms-mo"
                  className="text-gray-700 hover:text-[#40196D] text-sm"
                >
                  SMS MO
                </Link>
              </li>
            </ul>
          </div>
          {/* Resources Column */}
          <div>
            <h3 className="text-gray-600 font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-[#40196D] text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/help-center"
                  className="text-gray-700 hover:text-[#40196D] text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/api-documentation"
                  className="text-gray-700 hover:text-[#40196D] text-sm"
                >
                  API Documentation
                </Link>
              </li>
            </ul>

            <h3 className="text-gray-600 mt-3 font-medium mb-2">Additional</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms-privacy"
                  className="text-gray-700 hover:text-[#40196D] text-sm"
                >
                  Terms & Privacy
                </Link>
              </li>
            </ul>
          </div>
          {/* Additional Column */}
          <div>
            <h3 className="text-gray-600 font-medium mb-4">Contact us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 mt-0.5 text-gray-600" />
                <a
                  href="mailto:support@brivas.io"
                  className="text-gray-700 text-sm"
                >
                  support@brivas.io
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 mt-0.5 text-gray-600" />
                <a href="tel:+2348094449545" className="text-gray-700 text-sm">
                  +234 809 444 9545
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-gray-600" />
                <span className="text-gray-700 text-sm">
                  40 Alh. Basheer Shittu Avenue, Magodo GRA Phase 2, Lagos,
                  Nigeria
                </span>
              </li>
              <li className="flex items-center mt-8">
                <Clock className="w-5 h-5 mr-2 text-gray-600" />
                <p className="text-gray-600 text-sm">
                  2025 BRIVAS. All Rights Reserved.
                </p>
              </li>
            </ul>
          </div>
          {/* stay update Column */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
            <ul>
              <div className="md:col-span-1">
                <h1 className="text-gray-500 font-medium text-xl mb-2">
                  Stay Updated!
                </h1>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-3xl border border-grey-100 bg-white text-black focus:outline-none"
                  />
                </div>
                <p className="text-gray-600 text-sm mb-5">
                  Subscribe to our newsletter and never miss updates on our
                  latest products and solutions.
                </p>
                <button className="bg-black text-white px-10 py-3 rounded-full hover:bg-gray-800 transition-colors text-lg w-full">
                  Subscribe
                </button>
              </div>
            </ul>
            {/* Copyright */}
          </div>

          {/* Stay Updated Column */}
        </div>
      </div>
    </footer>
  );
}
