import Image from "next/image";
import { ArrowRight, Play, Users, Briefcase, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.webp";

const stats = [
  { icon: Users, value: "10K+", label: "Lives Impacted" },
  { icon: Briefcase, value: "50+", label: "Projects" },
  { icon: Heart, value: "100+", label: "Volunteers" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br min-h-screen"
    >
      <Image
        src={heroImage}
        alt="Children running joyfully — Asroy Welfare Trust empowers underprivileged communities"
        width={1200}
        height={900}
        className="object-cover hidden md:block md:object-left absolute inset-0 h-full w-full brightness-120 saturate-110"
        priority
        loading="eager"
        placeholder="blur"
      />
      <div className="absolute bg-white inset-0 mask-r-from-30% mask-r-to-60% hidden md:block"></div>
      <div className="relative mx-auto px-4 sm:px-12 pt-12 pb-24 sm:pt-16 lg:pt-20 lg:pb-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12 xl:gap-16">
          {/* Left – Text */}
          <div className="flex flex-col gap-7 order-2 lg:order-1">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/70 px-4 py-1.5 ring-1 ring-trust-green/15 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-trust-green opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-trust-green" />
              </span>
              <span className="text-trust-green font-semibold text-xs sm:text-sm tracking-wide">
                Together, We Can Build a Better Tomorrow
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-trust-navy font-crimson">
              Empowering Lives.
              <br />
              <span className="bg-gradient-to-r from-trust-green to-trust-green-light bg-clip-text text-transparent">
                Building Hope.
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              Asroy Welfare Trust works for the upliftment of underprivileged
              communities through education, healthcare, and sustainable
              development initiatives.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild className="group">
                <a href="#work">
                  Explore Our Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button variant="secondary">Donate</Button>
            </div>

            {/* Stats */}
            <div className="mt-2 grid grid-cols-3 gap-3 sm:gap-4 rounded-2xl border border-white/70 bg-white/60 p-3 sm:p-4 shadow-sm backdrop-blur-sm">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 sm:gap-3 rounded-xl px-2 py-1.5 sm:px-3 sm:py-2 transition hover:bg-white"
                >
                  <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-trust-green to-trust-green-light shadow-md shadow-trust-green/30">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg sm:text-2xl font-extrabold leading-none text-trust-navy">
                      {value}
                    </p>
                    <p className="mt-1 truncate text-[10px] sm:text-xs font-medium text-gray-500">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Image */}
          <div className="relative order-1 lg:order-2 md:hidden">
            <div className="relative aspect-5/4 sm:aspect-[16/11] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
              <Image
                src={heroImage}
                alt="Children running joyfully — Asroy Welfare Trust empowers underprivileged communities"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-right brightness-110"
                priority
                placeholder="blur"
              />
            </div>

            <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 flex items-center gap-3 rounded-2xl bg-trust-navy px-4 py-3 sm:px-5 sm:py-4 text-white shadow-xl shadow-trust-navy/30 ring-1 ring-white/10">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                <Heart className="h-5 w-5 fill-white text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-[11px] sm:text-xs font-medium text-white/80">
                  Be the reason
                  <br className="hidden sm:block" /> for someone&apos;s smile
                </p>
                <p className="mt-1 text-base sm:text-lg font-bold italic text-trust-green-light">
                  Join Us Today!
                </p>
              </div>
              <Heart className="absolute -top-2 -right-2 h-5 w-5 fill-trust-green-light text-trust-green-light drop-shadow" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom green wave */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block h-20 w-full sm:h-54"
          aria-hidden="true"
        >
          <path
            d="M0,64 C240,120 480,16 720,40 C960,64 1200,112 1440,72 L1440,120 L0,120 Z"
            fill="url(#hero-wave)"
          />
          <defs>
            <linearGradient id="hero-wave" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#4caf50" />
              <stop offset="100%" stopColor="#2e7d32" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
