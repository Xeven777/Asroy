import Image, { StaticImageData } from "next/image";
import { Mail, Heart, Phone, Quote, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import sr from "@/assets/members/sr.webp";
import kg from "@/assets/members/kg.webp";
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
  bio: string;
  email: string;
  website: string;
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
    role: "Advisor",
    bio: "Leads day-to-day operations and steers our education and women empowerment drives.",
    image: kg,
  },
];

const volunteers: Volunteer[] = [
  {
    name: "Zinia Khatun",
    role: "Executive Officer",
    bio: "Coordinates field programmes and keeps day-to-day operations running across our community initiatives.",
    email: "zinia@auradevs.co",
    website: "https://kurozinia.netlify.app",
    image: zk,
  },
  {
    name: "Anish Biswas",
    role: "Project Developer",
    bio: "Builds the digital backbone of Asroy — from this very website to the tools our team uses on the ground.",
    email: "anish@auradevs.co",
    website: "https://anish7.me",
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
        <div className="text-center mb-14 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-2">
            <SectionLeaf />
            <span className="text-trust-green font-bold text-sm tracking-widest uppercase">
              Our Leadership
            </span>
            <SectionLeaf />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-trust-navy">
            The hearts behind Asroy
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A dedicated team guiding our mission with compassion, integrity and
            an unwavering commitment to the communities we serve.
          </p>
        </div>

        {/* Leadership cards — image left, content right */}
        <div className="space-y-10 md:space-y-14">
          {leaders.map((leader, idx) => (
            <article
              key={leader.name}
              className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12">
                {/* Image */}
                <div className="relative md:col-span-2 lg:col-span-5 aspect-4/5 md:aspect-auto md:min-h-115 lg:min-h-130 overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 42vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-trust-navy/40 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:via-transparent md:to-white/0" />

                  {/* Role pill on image */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-4 py-1.5 text-xs font-bold tracking-wide uppercase text-trust-navy shadow-sm">
                      <span className="size-1.5 rounded-full bg-trust-green" />
                      {leader.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative md:col-span-3 lg:col-span-7 p-7 sm:p-10 lg:p-14 flex flex-col justify-center">
                  {/* Decorative quote */}
                  <Quote
                    className="absolute top-8 right-8 size-16 text-trust-green-pale"
                    strokeWidth={1}
                  />

                  <p className="text-sm font-semibold uppercase tracking-widest text-trust-green mb-3">
                    {leader.role}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-trust-navy leading-tight">
                    {leader.name}
                  </h3>

                  <div className="mt-5 h-1 w-14 rounded-full bg-trust-green" />

                  <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700 max-w-xl">
                    {leader.bio}
                  </p>

                  {/* Contact */}
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href="#contact"
                      aria-label={`Email ${leader.name}`}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-trust-navy transition-all hover:border-trust-green hover:text-trust-green hover:-translate-y-0.5"
                    >
                      <Mail className="size-4" />
                      Email
                    </a>
                    <a
                      href="#contact"
                      aria-label={`Call ${leader.name}`}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-trust-navy transition-all hover:border-trust-green hover:text-trust-green hover:-translate-y-0.5"
                    >
                      <Phone className="size-4" />
                      Connect
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Volunteers header */}
        <div className="text-center mt-24 mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <SectionLeaf />
            <span className="text-trust-green font-bold text-sm tracking-widest uppercase">
              Our Community
            </span>
            <SectionLeaf />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-trust-navy">
            Volunteers &amp; Members
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The hands that turn intent into action, on the ground and by your
            side, every single day.
          </p>
        </div>

        {/* Volunteer cards */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 gap-6">
          {volunteers.map((person) => (
            <article
              key={person.name}
              className="group relative flex flex-col sm:flex-row gap-4 rounded-2xl bg-white border border-gray-100 p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-trust-green/30"
            >
              <div className="relative mx-auto size-48 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="150px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <p className="text-[10px] font-bold uppercase tracking-widest text-trust-green">
                  {person.role}
                </p>
                <h3 className="mt-0.5 text-lg font-extrabold text-trust-navy leading-tight">
                  {person.name}
                </h3>
                <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-gray-600">
                  {person.bio}
                </p>

                <div className="mt-auto pt-3 flex flex-wrap items-center gap-1.5">
                  <a
                    href={`mailto:${person.email}`}
                    aria-label={`Email ${person.name}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-semibold text-trust-navy transition-colors hover:border-trust-green hover:text-trust-green"
                  >
                    <Mail className="size-3" />
                    Email
                  </a>
                  <a
                    href={person.website}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${person.name} website`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-semibold text-trust-navy transition-colors hover:border-trust-green hover:text-trust-green"
                  >
                    <Globe className="size-3" />
                    Website
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Join note */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
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
