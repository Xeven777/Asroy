import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import img1 from "@/assets/gallery/1.webp";
import img2 from "@/assets/gallery/2.webp";
import img3 from "@/assets/gallery/3.webp";
import img4 from "@/assets/gallery/4.webp";
import img5 from "@/assets/gallery/5.webp";
import img6 from "@/assets/gallery/6.webp";
import img7 from "@/assets/gallery/7.webp";
import img8 from "@/assets/gallery/8.webp";
import img9 from "@/assets/gallery/9.webp";


const galleryImages = [
  { src: img1, alt: "Asroy Community moment 1" },
  { src: img2, alt: "Asroy Community moment 2" },
  { src: img3, alt: "Asroy Community moment 3" },
  { src: img4, alt: "Asroy Community moment 4" },
  { src: img5, alt: "Asroy Community moment 5" },
  { src: img6, alt: "Asroy Community moment 6" },
  { src: img7, alt: "Asroy Community moment 7" },
  { src: img8, alt: "Asroy Community moment 8" },
  { src: img9, alt: "Asroy Community moment 9" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative aspect-8/5 rounded-2xl overflow-hidden shadow-md group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={225}
                loading="lazy"
                className="object-cover size-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
