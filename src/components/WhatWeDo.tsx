import Image from "next/image";
import { BookOpen, Stethoscope, Users, Baby, TreePine } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    iconBg: "bg-blue-500",
    title: "Education",
    description:
      "Providing quality education and skill development opportunities for children and youth in Murshidabad.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80&auto=format&fit=crop",
    imageAlt:
      "Education program by Asroy Welfare Trust NGO for children in Murshidabad, West Bengal",
  },
  {
    icon: Stethoscope,
    iconBg: "bg-red-500",
    title: "Healthcare",
    description:
      "Organizing free health camps and making healthcare accessible to underprivileged families in West Bengal.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80&auto=format&fit=crop",
    imageAlt:
      "Free healthcare camp organized by Asroy NGO in Murshidabad, West Bengal",
  },
  {
    icon: Users,
    iconBg: "bg-pink-500",
    title: "Women Empowerment",
    description:
      "Encouraging women through skill training, resources and livelihood opportunities across West Bengal.",
    image:
      "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=500&q=80&auto=format&fit=crop",
    imageAlt:
      "Women empowerment program by Asroy Welfare Trust in West Bengal",
  },
  {
    icon: Baby,
    iconBg: "bg-orange-500",
    title: "Child Welfare",
    description:
      "Supporting the growth, protection and education of underprivileged children in Murshidabad.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&q=80&auto=format&fit=crop",
    imageAlt:
      "Child welfare initiative by Asroy Welfare Trust NGO in Murshidabad, West Bengal",
  },
  {
    icon: TreePine,
    iconBg: "bg-trust-green",
    title: "Community Development",
    description:
      "Working on sustainable projects for a stronger and self-reliant community in Raghunathganj.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&q=80&auto=format&fit=crop",
    imageAlt:
      "Community development project by Asroy Welfare Trust in Raghunathganj, Murshidabad",
  },
];

function SectionLeaf() {
  return (
    <svg viewBox="0 0 20 24" className="w-4 h-5 text-trust-green" fill="currentColor">
      <path d="M10 1C6 1 2 5 2 12C2 18 6 23 10 23C14 23 18 18 18 12C18 5 14 1 10 1Z" />
    </svg>
  );
}

export default function WhatWeDo() {
  return (
    <section id="work" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <SectionLeaf />
            <span className="text-trust-green font-bold text-sm tracking-widest uppercase">
              What We Do
            </span>
            <SectionLeaf />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-trust-navy">
            We work for a better tomorrow
          </h2>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {programs.map((prog) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.title}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={prog.image}
                    alt={prog.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Icon badge */}
                  <div
                    className={`absolute top-3 left-3 w-10 h-10 rounded-full ${prog.iconBg} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-trust-navy text-base mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
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
