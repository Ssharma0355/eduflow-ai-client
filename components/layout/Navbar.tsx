"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Make sure to install lucide-react

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <span className="text-2xl font-bold text-blue-600">EduFlow AI</span>
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-gray-600 hover:text-blue-600 transition font-medium">Features</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition font-medium">Pricing</Link>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-gray-900 font-medium hover:text-blue-600">
                Log in
              </Link>
              <Link href="/signup">
                <button className="px-5 py-2.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-sm">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 py-6 space-y-4 flex flex-col">
            <Link 
              href="/features" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-blue-600"
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-blue-600"
            >
              Pricing
            </Link>
            <hr className="border-gray-100" />
            <Link 
              href="/login" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-900 hover:text-blue-600"
            >
              Log in
            </Link>
            <Link 
              href="/signup" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <button className="w-full mt-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-bold text-center hover:bg-blue-700 transition">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}