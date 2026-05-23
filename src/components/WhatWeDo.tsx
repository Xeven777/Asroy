import Image from "next/image";
import { BookOpen, Stethoscope, Users, Baby, TreePine } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import img1 from "@/assets/work/1.webp";
import img2 from "@/assets/work/2.webp";
import img3 from "@/assets/work/3.webp";
import img4 from "@/assets/work/4.webp";
import img5 from "@/assets/work/5.webp";

const programs = [
  {
    icon: BookOpen,
    iconBg: "bg-blue-500",
    title: "Education",
    description:
      "Providing quality education and skill development opportunities for children and youth in Murshidabad.",
    image: img4,
    imageAlt:
      "Education program by Asroy Welfare Trust NGO for children in Murshidabad, West Bengal",
  },
  {
    icon: Stethoscope,
    iconBg: "bg-red-500",
    title: "Healthcare",
    description:
      "Organizing free health camps and making healthcare accessible to underprivileged families in West Bengal.",
    image: img5,
    imageAlt:
      "Free healthcare camp organized by Asroy NGO in Murshidabad, West Bengal",
  },
  {
    icon: Users,
    iconBg: "bg-pink-500",
    title: "Women Empowerment",
    description:
      "Encouraging women through skill training, resources and livelihood opportunities across West Bengal.",
    image: img2,
    imageAlt: "Women empowerment program by Asroy Welfare Trust in West Bengal",
  },
  {
    icon: Baby,
    iconBg: "bg-orange-500",
    title: "Child Welfare",
    description:
      "Supporting the growth, protection and education of underprivileged children in Murshidabad.",
    image: img3,
    imageAlt:
      "Child welfare initiative by Asroy Welfare Trust NGO in Murshidabad, West Bengal",
  },
  {
    icon: TreePine,
    iconBg: "bg-trust-green",
    title: "Community Development",
    description:
      "Working on sustainable projects for a stronger and self-reliant community in Raghunathganj.",
    image: img1,
    imageAlt:
      "Community development project by Asroy Welfare Trust in Raghunathganj, Murshidabad",
  },
];

export default function WhatWeDo() {
  return (
    <section id="work" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="What We Do"
          title="We work for a better tomorrow"
        />

        {/* Program cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((prog) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.title}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-44 md:h-60 overflow-hidden">
                  <Image
                    src={prog.image}
                    alt={prog.imageAlt}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-all brightness-130 duration-500"
                  />
                  {/* Icon badge */}
                  <div
                    className={`absolute top-3 left-3 w-10 h-10 rounded-full ${prog.iconBg} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="size-5 text-white" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-trust-navy text-base mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {prog.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
