import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1529245856630-f4853233d2ea?w=500&q=80&auto=format&fit=crop",
    alt: "Education program",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&q=80&auto=format&fit=crop",
    alt: "Children welfare",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&auto=format&fit=crop",
    alt: "Healthcare camp",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=500&q=80&auto=format&fit=crop",
    alt: "Women empowerment workshop",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&q=80&auto=format&fit=crop",
    alt: "Community gathering",
    span: "col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1466629873903-92551a6ceef9?w=600&q=80&auto=format&fit=crop",
    alt: "Sustainable development",
    span: "col-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Gallery"
          title="Moments of Impact"
          subtitle="Real stories, real change - glimpses from our work across communities"
        />

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative ${img.span} aspect-square rounded-2xl overflow-hidden shadow-md group`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-trust-navy/0 group-hover:bg-trust-navy/30 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <Button>
            View More Photos <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
