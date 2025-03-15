import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, Phone, MapPin, Clock } from "lucide-react";
import Logo from "@/components/Images/logos/brivaslogo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#f8f9fc] py-16">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Social Links */}
          <div>
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
                href="#"
                className="bg-white w-8 h-8 rounded-full flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white w-8 h-8 rounded-full flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white w-8 h-8 rounded-full flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 5.16c-.94.42-1.95.7-3 .82 1.08-.64 1.9-1.66 2.3-2.88-1.01.6-2.13 1.03-3.32 1.27-1.95-2.06-5.23-2.15-7.3-.22-1.42 1.3-2.02 3.26-1.58 5.13-4.3-.22-8.3-2.25-11-5.63-.75 1.3-.73 2.9.08 4.17.56.89 1.33 1.63 2.24 2.17-.83-.03-1.63-.24-2.36-.61v.06c0 1.93 1.36 3.56 3.24 3.93-.76.2-1.56.23-2.34.08.53 1.65 2.05 2.78 3.83 2.82-1.45 1.13-3.26 1.74-5.1 1.74-.33 0-.66-.02-.98-.06 1.87 1.2 4.06 1.83 6.29 1.83 7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.53.8-.58 1.5-1.3 2.05-2.12z" />
                </svg>
              </a>
            </div>
            <div className="flex text-black items-center">
              <ArrowUp className="w-5 h-5 mr-2" />
              <span className="text-sm">Back to top</span>
            </div>
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
              <li>
                <Link
                  href="/additional"
                  className="text-gray-700 hover:text-[#40196D] text-sm"
                >
                  Additional
                </Link>
              </li>
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

          {/* Contact Us Column */}
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
            </ul>
          </div>
        </div>

        {/* Newsletter and Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Newsletter Subscription */}
          <div className="md:col-start-2">
            <h3 className="text-gray-700 font-medium text-xl mb-2">
              Stay Updated!
            </h3>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-3xl border border-[#F5F6FA] bg-[#F5F6FA] text-black focus:outline-[#F5F6FA"
              />
            </div>

            <p className="text-gray-600 text-sm mb-5">
              Subscribe to our newsletter and never miss updates on our latest
              products and solutions.
            </p>
            <button className="bg-black text-white px-10 py-3 rounded-full hover:bg-gray-800 transition-colors text-lg">
              Subscribe
            </button>
          </div>

          {/* Copyright */}
          <div className="flex items-center md:order-1">
            <Clock className="w-5 h-5 mr-2 text-gray-600" />
            <p className="text-gray-600 text-sm">
              2025 BRIVAS. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
