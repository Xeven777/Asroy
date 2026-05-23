import Image, { StaticImageData } from "next/image";
import { Mail, Heart, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import sr from "@/assets/members/sr.webp";
import kg from "@/assets/members/kg.webp";
import ab from "@/assets/members/ab.webp";
import zk from "@/assets/members/zk.webp";

type Member = {
  name: string;
  role: string;
  bio: string;
  image: string | StaticImageData;
  email?: string;
  phone?: string;
  website?: string;
};

const members: Member[] = [
  {
    name: "Supriya Roy",
    role: "Founder & Secretary",
    phone: "+919732643449",
    bio: "Founded Asroy with a vision to ensure no child in Murshidabad is left behind.",
    image: sr,
  },
  {
    name: "Kuntak Ghosh",
    role: "Chief Advisor",
    bio: "Leads day-to-day operations and steers our education and women empowerment drives.",
    image: kg,
  },
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

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-24 bg-trust-blue-pale/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Our Team"
          title="The People behind Asroy"
          subtitle="A dedicated team guiding our mission with compassion, integrity and an unwavering commitment to the communities we serve."
          className="mb-14 md:mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {members.map((person) => (
            <article
              key={person.name}
              className="group relative flex flex-col sm:flex-row gap-4 rounded-2xl bg-white border border-gray-100 p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-trust-green/30"
            >
              <div className="relative mx-auto sm:mx-0 size-44 md:size-60 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  loading="lazy"
                  sizes="300px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <p className="text-xs font-bold uppercase tracking-widest text-trust-green">
                  {person.role}
                </p>
                <h3 className="my-2 md:text-3xl font-crimson text-lg text-trust-navy leading-tight tracking-tight">
                  {person.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600 line-clamp-4">
                  {person.bio}
                </p>

                {(person.email || person.phone || person.website) && (
                  <div className="mt-auto pt-3 flex flex-wrap items-center gap-1.5">
                    {person.email && (
                      <a
                        href={`mailto:${person.email}`}
                        aria-label={`Email ${person.name}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-semibold text-trust-navy transition-colors hover:border-trust-green hover:text-trust-green"
                      >
                        <Mail className="size-3" />
                        Email
                      </a>
                    )}
                    {person.phone && (
                      <a
                        href={`tel:${person.phone}`}
                        aria-label={`Call ${person.name}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-semibold text-trust-navy transition-colors hover:border-trust-green hover:text-trust-green"
                      >
                        <Phone className="size-3" />
                        Call
                      </a>
                    )}
                    {person.website && (
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
                    )}
                  </div>
                )}
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
