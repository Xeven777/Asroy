import Image from "next/image";
import { ArrowRight, PlayCircle, Users, Briefcase, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "10K+", label: "Lives Impacted" },
  { icon: Briefcase, value: "50+", label: "Projects" },
  { icon: Heart, value: "100+", label: "Volunteers" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-trust-blue-pale/30 to-trust-green-pale/20 py-16 md:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-trust-green-pale/40 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-trust-blue-pale/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – Text */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className="h-px w-8 bg-trust-green" />
              <span className="text-trust-green font-semibold text-sm tracking-wide">
                Together, We Can Build a Better Tomorrow
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-trust-navy">
              Empowering Lives.{" "}
              <span className="text-trust-green">Building Hope.</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
              Asroy Welfare Trust works for the upliftment of underprivileged
              communities through education, healthcare, and sustainable
              development initiatives.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-trust-navy hover:bg-trust-navy/90 text-white gap-2 px-6 h-11 rounded-full font-semibold shadow-md"
                asChild
              >
                <a href="#work">
                  Explore Our Work <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-trust-navy text-trust-navy hover:bg-trust-navy/5 gap-2 px-6 h-11 rounded-full font-semibold"
              >
                <PlayCircle className="w-4 h-4 text-trust-green" />
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-gray-200">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-trust-green-pale flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-trust-green" />
                  </div>
                  <div>
                    <p className="font-bold text-trust-navy text-xl leading-none">
                      {value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Image */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-dashed border-trust-green/20" />
            </div>

            {/* Leaf decorations */}
            <div className="absolute top-4 right-8 text-trust-green opacity-60">
              <svg viewBox="0 0 40 50" className="w-8 h-10" fill="currentColor">
                <path d="M20 2 C12 2 4 10 4 25 C4 38 12 48 20 48 C28 48 36 38 36 25 C36 10 28 2 20 2Z" />
              </svg>
            </div>
            <div className="absolute top-10 right-4 text-trust-green-light opacity-40">
              <svg viewBox="0 0 24 30" className="w-5 h-6" fill="currentColor">
                <path d="M12 1 C7 1 2 6 2 15 C2 22 7 29 12 29 C17 29 22 22 22 15 C22 6 17 1 12 1Z" />
              </svg>
            </div>
            <div className="absolute bottom-8 left-4 text-trust-green opacity-50">
              <svg viewBox="0 0 40 50" className="w-7 h-9" fill="currentColor">
                <path d="M20 2 C12 2 4 10 4 25 C4 38 12 48 20 48 C28 48 36 38 36 25 C36 10 28 2 20 2Z" />
              </svg>
            </div>

            {/* Main image */}
            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80&auto=format&fit=crop"
                alt="Children benefiting from Asroy Welfare Trust programs"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating join card */}
            <div className="absolute bottom-4 right-0 md:right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 max-w-[200px] border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-trust-navy flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-700 leading-snug">
                  Be the reason for someone&apos;s smile
                </p>
                <p className="text-trust-green text-sm font-bold italic mt-0.5">
                  Join Us Today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
