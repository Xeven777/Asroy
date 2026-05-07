"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-300",
        scrolled ? "shadow-md" : "shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-trust-green-pale shrink-0">
              <svg
                viewBox="0 0 40 40"
                className="w-9 h-9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#e8f5e9" />
                {/* Leaf */}
                <path
                  d="M20 8 C14 8 9 14 9 22 C9 28 14 33 20 34 C26 33 31 28 31 22 C31 14 26 8 20 8Z"
                  fill="#2e7d32"
                  opacity="0.85"
                />
                {/* Small figure */}
                <circle cx="20" cy="16" r="3" fill="white" />
                <path
                  d="M14 28 Q17 22 20 21 Q23 22 26 28"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            <div className="leading-tight">
              <p className="font-bold text-trust-navy text-lg leading-none tracking-tight">
                Asroy
              </p>
              <p className="text-[10px] text-muted-foreground tracking-widest uppercase font-medium">
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
            <Button
              className="bg-trust-green hover:bg-trust-green/90 text-white gap-2 px-5 rounded-full font-semibold shadow-sm"
              size="default"
            >
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
              <Button className="w-full bg-trust-green hover:bg-trust-green/90 text-white gap-2 rounded-full font-semibold">
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
