"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Our Work", href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo1.webp"
              alt="Asroy Welfare Trust Logo"
              width={52}
              height={52}
              className="size-14 rounded-full"
            />
            <div className="leading-tight">
              <p className="font-bold text-trust-navy text-lg leading-none tracking-tight">
                Asroy
              </p>
              <p className="text-[10px] text-muted-foreground uppercase font-medium">
                Welfare Trust
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-trust-green transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-trust-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </Link>
            ))}
          </div>

          {/* Donate CTA */}
          <div className="hidden lg:flex">
            <Button variant="secondary" size="sm">
              <Heart className="w-4 h-4 fill-white stroke-0" />
              Donate Now
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-trust-green hover:bg-trust-green-pale rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-3">
              <Button variant="secondary" className="w-full">
                <Heart className="w-4 h-4 fill-white stroke-0" />
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
