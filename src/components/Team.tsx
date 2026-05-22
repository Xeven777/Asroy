import Image, { StaticImageData } from "next/image";
import { Mail, Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import sr from "@/assets/members/sr.webp";
import kg from "@/assets/members/sr.webp";
import ab from "@/assets/members/ab.webp";
import zk from "@/assets/members/zk.webp";

type Leader = {
  name: string;
  role: string;
  bio: string;
  image: string | StaticImageData;
};

type Volunteer = {
  name: string;
  role: string;
  image: string | StaticImageData;
};

const leaders: Leader[] = [
  {
    name: "Supriya Roy",
    role: "Founder & Secretary",
    bio: "Founded Asroy with a vision to ensure no child in Murshidabad is left behind.",
    image: sr,
  },
  {
    name: "Kuntak Ghosh",
    role: "Founder & Secretary",
    bio: "Leads day-to-day operations and steers our education and women empowerment drives.",
    image: kg,
  },
];

const volunteers: Volunteer[] = [
  {
    name: "Zinia Khatun",
    role: "Executive Member",
    image: zk,
  },
  {
    name: "Anish Biswas",
    role: "Project Developer",
    image: ab,
  },
];

function SectionLeaf() {
  return (
    <svg
      viewBox="0 0 20 24"
      className="w-4 h-5 text-trust-green"
      fill="currentColor"
    >
      <path d="M10 1C6 1 2 5 2 12C2 18 6 23 10 23C14 23 18 18 18 12C18 5 14 1 10 1Z" />
    </svg>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-24 bg-trust-blue-pale/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Leadership header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <SectionLeaf />
            <span className="text-trust-green font-bold text-sm tracking-widest uppercase">
              Our Leadership
            </span>
            <SectionLeaf />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-trust-navy">
            The hearts behind Asroy
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A dedicated team guiding our mission with compassion, integrity and
            an unwavering commitment to the communities we serve.
          </p>
        </div>

        {/* Leadership cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-trust-navy-dark/80 via-trust-navy-dark/10 to-transparent" />
                {/* Socials */}
                <div className="absolute bottom-4 right-4 flex gap-2 translate-y-2 sm:opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {[Phone, Mail].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label={`${leader.name} social link`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-trust-navy backdrop-blur-sm transition-colors hover:bg-trust-green hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-trust-navy">
                  {leader.name}
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-trust-green">
                  {leader.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {leader.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Volunteers header */}
        <div className="text-center mt-20 mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <SectionLeaf />
            <span className="text-trust-green font-bold text-sm tracking-widest uppercase">
              Our Community
            </span>
            <SectionLeaf />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-trust-navy">
            Volunteers &amp; Members
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The hands that turn intent into action, on the ground and by your
            side, every single day.
          </p>
        </div>

        {/* Volunteer cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {volunteers.map((person) => (
            <div
              key={person.name}
              className="flex items-center gap-4 rounded-2xl bg-white border border-gray-100 p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-trust-green/30"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-trust-green-pale">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <h3 className="truncate font-bold text-trust-navy">
                  {person.name}
                </h3>
                <p className="text-sm text-trust-green font-medium">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Join note */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <p className="text-gray-600">Want to lend a hand?</p>
          <Button variant="secondary" asChild>
            <a href="#contact">
              <Heart className="h-4 w-4 fill-current" />
              Join us as a volunteer
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
