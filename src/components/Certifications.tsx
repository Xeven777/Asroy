import { Award, BadgeCheck, Leaf, Building2, LeafIcon } from "lucide-react";

const certs = [
  {
    icon: <span className="text-2xl font-black text-trust-navy">ISO</span>,
    bg: "bg-trust-blue-pale",
    title: "ISO 9001:2015",
    subtitle: "Certified",
    color: "text-trust-navy",
  },
  {
    icon: <Award className="w-8 h-8 text-amber-600" />,
    bg: "bg-amber-50",
    title: "12A Registration",
    subtitle: "Certified",
    color: "text-amber-700",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-purple-600" />,
    bg: "bg-purple-50",
    title: "80G Tax Exemption",
    subtitle: "Certified",
    color: "text-purple-700",
  },
  {
    icon: <Leaf className="w-8 h-8 text-trust-green" />,
    bg: "bg-trust-green-pale",
    title: "CSR Approved",
    subtitle: "Organization",
    color: "text-trust-green",
  },
  {
    icon: <Building2 className="w-8 h-8 text-trust-navy" />,
    bg: "bg-trust-blue-pale",
    title: "Government",
    subtitle: "Registered Trust",
    color: "text-trust-navy",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <LeafIcon className="-scale-x-100 fill-trust-green text-trust-green" />
            <span className="text-trust-navy font-bold text-2xl md:text-4xl font-crimson">
              Certifications &amp; Recognitions
            </span>
            <LeafIcon className="fill-trust-green text-trust-green" />
          </div>
          <p className="text-muted-foreground text-sm">
            Our commitment to transparency and excellence
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col items-center gap-3 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-full ${cert.bg} flex items-center justify-center`}
              >
                {cert.icon}
              </div>
              <div className="text-center">
                <p
                  className={`font-bold text-base leading-tight ${cert.color}`}
                >
                  {cert.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {cert.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
