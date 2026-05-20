import Link from "next/link";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Our Work", href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

const programs = [
  { label: "Education", href: "#work" },
  { label: "Healthcare", href: "#work" },
  { label: "Women Empowerment", href: "#work" },
  { label: "Child Welfare", href: "#work" },
  { label: "Community Development", href: "#work" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-trust-navy-dark text-white">
      <div className="x-4 sm:px-12 mx-auto px-4">
        {/* Main footer */}
        <div className="flex gap-10 md:gap-20 py-14 border-b border-white/10">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo1.webp"
                alt="Asroy Welfare Trust Logo"
                width={52}
                height={52}
                className="size-14 rounded-full"
              />
              <div className="leading-tight">
                <p className="font-bold text-white text-lg leading-none">
                  Asroy
                </p>
                <p className="text-[10px] text-white/60 tracking-widest uppercase">
                  Welfare Trust
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Empowering lives and building hope through service, compassion and
              sustainable development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="ml-auto">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-trust-green-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Our Programs
            </h4>
            <ul className="flex flex-col gap-2.5">
              {programs.map((prog) => (
                <li key={prog.label}>
                  <Link
                    href={prog.href}
                    className="text-white/70 text-sm hover:text-trust-green-light transition-colors"
                  >
                    {prog.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-trust-green-light mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">+91 80017 32493</span>
              </li>
              <li>
                <a
                  href="mailto:asroywelfaretrust@gmail.com"
                  className="flex items-start gap-3"
                >
                  <Mail className="w-4 h-4 text-trust-green-light mt-0.5 shrink-0" />
                  <span className="text-white/70 text-sm break-all">
                    asroywelfaretrust@gmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-trust-green-light mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  Indira Pally, Raghunathganj, Murshidabad, PIN - 742225
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-xs text-white/50">
          <p className="flex items-center gap-1">
            © 2026 Asroy Welfare Trust. Made by{" "}
            <a
              href="http://auradevs.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              AuraDevs
            </a>{" "}
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
