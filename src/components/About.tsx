import Image from "next/image";
import { ArrowRight, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const aboutImages = [
  {
    src: "https://images.unsplash.com/photo-1529245856630-f4853233d2ea?w=400&q=80&auto=format&fit=crop",
    alt: "Children learning together",
  },
  {
    src: "https://images.unsplash.com/photo-1466629873903-92551a6ceef9?w=400&q=80&auto=format&fit=crop",
    alt: "Nature and sustainability",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80&auto=format&fit=crop",
    alt: "Healthcare services",
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80&auto=format&fit=crop",
    alt: "Community development",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left – Text */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="h-1 w-10 bg-trust-green rounded-full" />
              <span className="text-trust-green font-bold text-sm tracking-widest uppercase">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-trust-navy leading-snug">
              We Believe in Humanity and Service
            </h2>

            <div className="h-1 w-16 bg-trust-green rounded-full" />

            <p className="text-gray-600 leading-relaxed">
              Asroy Welfare Trust is a non-profit organization committed to
              creating a positive change in society. We focus on education,
              healthcare, women empowerment, child welfare and community
              development.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our dedicated team of volunteers and professionals work tirelessly
              to reach the most vulnerable communities, ensuring that no one is
              left behind in the journey toward a better tomorrow.
            </p>

            <Button variant="secondary" className="self-start" asChild>
              <a href="#work">
                Know More About Us <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Right – Image grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {aboutImages.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Mission overlay card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-trust-navy text-white rounded-2xl px-5 py-4 shadow-2xl w-44 text-center z-10">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                <Target className="w-5 h-5 text-white" />
              </div>
              <p className="font-bold text-sm leading-tight mb-1">Our Mission</p>
              <p className="text-xs text-white/80 leading-snug">
                To empower individuals and communities by providing resources,
                education, and opportunities for a better life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
