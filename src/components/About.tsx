import Image from "next/image";
import { ArrowRight, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import abt1 from "@/assets/abt1.webp";
import abt2 from "@/assets/abt2.webp";
import abt3 from "@/assets/abt3.webp";
import abt4 from "@/assets/abt4.webp";



const aboutImages = [
  {
    src: abt1,
    alt: "Asroy Welfare Trust volunteers with underprivileged children in Murshidabad, West Bengal",
  },
  {
    src: abt2,
    alt: "Community sustainability initiative by Asroy NGO in West Bengal",
  },
  {
    src: abt3,
    alt: "Free healthcare camp organized by Asroy Welfare Trust in Murshidabad",
  },
  {
    src: abt4,
    alt: "Community development project by Asroy Welfare Trust, Raghunathganj",
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

            <h2 className="text-3xl md:text-5xl tracking-tighter text-trust-navy font-crimson">
              Together we bring hope
              <br />
              <span className="text-trust-green">where it's needed most</span>
            </h2>

            <div className="h-1 w-16 bg-trust-green rounded-full" />

            <p className="text-gray-600 leading-relaxed">
              Asroy Welfare Trust is a non-profit organization committed to
              creating a positive change in society. We helped the
              underprivileged children in Murshidabad giving them a chance to
              dream and achieve their goals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are not just an organization we are a family of people who
              believe that small acts of kindness can change lives forever With
              every helping hand every smile and every life we touch we work
              toward building a future where no one feels forgotten or alone.
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
                  className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={350}
                    height={300}
                    loading="lazy"
                    className="object-cover size-full brightness-105 saturate-110 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
