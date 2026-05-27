import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const certs = [
  {
    code: "E-ANUDAN",
    label: "Certified",
    desc: "Government grant management portal for transparent fund receipt and direct benefit tracking",
    cardCls: "bg-[#eef1f9]",
    codeCls: "text-trust-navy",
    badgeCls: "bg-trust-navy/10 text-trust-navy",
    descCls: "text-trust-navy/60",
  },
  {
    code: "CSR-1",
    label: "Registered",
    desc: "Eligible to receive Corporate Social Responsibility funding from private companies",
    cardCls: "bg-trust-green-pale",
    codeCls: "text-trust-green",
    badgeCls: "bg-trust-green/10 text-trust-green",
    descCls: "text-trust-green/60",
  },
  {
    code: "UDYAM",
    label: "MSME",
    desc: "Ministry of MSME recognition supporting our operational reach and regulatory compliance",
    cardCls: "bg-orange-50",
    codeCls: "text-orange-700",
    badgeCls: "bg-orange-100 text-orange-700",
    descCls: "text-orange-700/60",
  },
  {
    code: "NGO DARPAN",
    label: "Registered",
    desc: "NITI Aayog's official NGO directory — verified accountability and compliance reporting",
    cardCls: "bg-emerald-50",
    codeCls: "text-emerald-700",
    badgeCls: "bg-emerald-100 text-emerald-700",
    descCls: "text-emerald-700/60",
  },
  {
    code: "80G",
    label: "Tax Exemption",
    desc: "Donors receive income tax deduction on all contributions under Section 80G",
    cardCls: "bg-amber-50",
    codeCls: "text-amber-700",
    badgeCls: "bg-amber-100 text-amber-700",
    descCls: "text-amber-700/60",
  },
  {
    code: "12A",
    label: "Registered",
    desc: "Trust income is fully tax-exempt under Section 12A of the Income Tax Act 1961",
    cardCls: "bg-violet-50",
    codeCls: "text-violet-700",
    badgeCls: "bg-violet-100 text-violet-700",
    descCls: "text-violet-700/60",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Certifications"
          title="Certifications & Recognitions"
          subtitle="Registered with 6 government bodies — independently audited and annually renewed."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {certs.map((cert) => (
            <div
              key={cert.code}
              className={`${cert.cardCls} rounded-2xl p-6 md:p-7 md:py-12 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default`}
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className={`text-2xl md:text-4xl font- font-crimson tracking-tighter leading-none ${cert.codeCls}`}
                >
                  {cert.code}
                </span>
                <span
                  className={`flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${cert.badgeCls}`}
                >
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  {cert.label}
                </span>
              </div>
              <p className={`text-sm leading-relaxed ${cert.descCls}`}>
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
