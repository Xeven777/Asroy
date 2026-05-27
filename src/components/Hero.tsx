import Image from "next/image";
import { ArrowRight, Users, Briefcase, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import GetInvolvedDialog from "@/components/GetInvolvedDialog";
import abt1 from "@/assets/abt1.webp";
import abt2 from "@/assets/abt2.webp";
import abt3 from "@/assets/abt3.webp";
import abt4 from "@/assets/abt4.webp";

const images = [
  { src: abt1, alt: "Asroy Welfare Trust community outreach" },
  { src: abt2, alt: "Education programme for underprivileged children" },
  { src: abt3, alt: "Healthcare support by Asroy volunteers" },
  { src: abt4, alt: "Community gathering and welfare activities" },
];

const stats = [
  { icon: Users, value: "800+", label: "Lives Impacted" },
  { icon: Briefcase, value: "20+", label: "Projects" },
  { icon: Heart, value: "40+", label: "Volunteers" },
];

export default function Hero() {
  return (
    <section id="home" className="bg-linear-to-b min-h-svh from-green-600/10 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Image — top on mobile, right on desktop */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              {images.map(({ src, alt }, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority={i === 0}
                  placeholder="blur"
                  style={{
                    animation: "hero-slide 20s linear infinite",
                    animationDelay: `${i * 5}s`,
                    animationFillMode: "both",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Text — below image on mobile, left on desktop */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-trust-green-pale px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-trust-green opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-trust-green" />
              </span>
              <span className="text-trust-green font-semibold text-xs sm:text-sm">
                A Supriyo Roy Foundation Initiative
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-crimson tracking-tight text-trust-navy leading-[1.1]">
              Together we build
              <br />
              <span className="text-trust-green">a brighter future</span>
            </h1>

            {/* Description */}
            <p className="max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg">
              Asroy Welfare Trust stands beside struggling communities, bringing
              hope through education, healthcare, and brighter opportunities.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild className="group">
                <a href="#work">
                  Explore Our Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <GetInvolvedDialog
                defaultTab="donate"
                trigger={<Button variant="secondary">Donate</Button>}
              />
              <GetInvolvedDialog
                defaultTab="join"
                trigger={<Button variant="outline">Join Us</Button>}
              />
            </div>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12 pt-2 border-t border-gray-100">
              {stats.map(({ value, label }) => (
                <div key={label} className="pt-4">
                  <p className="text-2xl font-extrabold text-trust-navy">{value}</p>
                  <p className="mt-0.5 text-xs font-medium text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
