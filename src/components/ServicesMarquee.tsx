import {
  ArrowRight,
  BarChart3,
  Building2,
  ClipboardList,
  FileCheck2,
  GraduationCap,
  Handshake,
  HeartPulse,
  Sprout,
} from "lucide-react";

const serviceItems = [
  { icon: FileCheck2, label: "NGO Registration" },
  { icon: ClipboardList, label: "Project Proposals" },
  { icon: Building2, label: "Strategic Planning" },
  { icon: BarChart3, label: "Impact Assessment" },
  { icon: Handshake, label: "CSR Consulting" },
  { icon: GraduationCap, label: "Capacity Building" },
  { icon: HeartPulse, label: "Public Health" },
  { icon: Sprout, label: "Livelihood Support" },
];

export default function ServicesMarquee() {
  const repeatedItems = [...serviceItems, ...serviceItems];

  return (
    <section
      aria-label="Asroy consultancy services"
      className="relative overflow-hidden border-y border-trust-navy/10 bg-trust-navy py-4 text-white"
    >
      <div className="absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-trust-navy to-transparent sm:w-28" />
      <div className="absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-trust-navy to-transparent sm:w-28" />

      <div className="flex items-center gap-5">
        <a
          href="#services"
          className="relative z-20 ml-4 hidden shrink-0 items-center gap-2 rounded-full bg-trust-green px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg shadow-trust-green/25 transition hover:bg-trust-green-light sm:ml-6 md:inline-flex"
        >
          Services
          <ArrowRight className="h-3.5 w-3.5" />
        </a>

        <div className="group/marquee flex min-w-0 flex-1 overflow-hidden">
          <div className="services-marquee-track flex min-w-max items-center gap-3 pr-3">
            {repeatedItems.map(({ icon: Icon, label }, index) => (
              <a
                key={`${label}-${index}`}
                href="#services"
                className="inline-flex h-12 items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 text-sm font-bold text-white shadow-sm transition hover:border-trust-green-light/70 hover:bg-white/14"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-trust-green-light/18 text-trust-green-light">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="whitespace-nowrap">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
