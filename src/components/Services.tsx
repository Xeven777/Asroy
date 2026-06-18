"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  GraduationCap,
  Handshake,
  HeartPulse,
  Loader2,
  MessageCircle,
  Send,
  Sprout,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";

const WHATSAPP_LINK =
  "https://wa.me/919732643449?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Asroy%20Welfare%20Trust%27s%20consultancy%20services.";

const fieldClass =
  "h-11 rounded-xl border-gray-200 bg-white focus-visible:ring-trust-green focus-visible:ring-2 focus-visible:border-trust-green";

const labelClass = "text-xs font-semibold text-trust-navy uppercase tracking-wide";

const services = [
  {
    icon: FileCheck2,
    title: "NGO Registration & Compliance",
    summary:
      "Registration, 12A, 80G, CSR registration, NGO Darpan, FCRA guidance and statutory documentation.",
    points: ["Society, Trust, Section 8", "PAN, TAN, NGO Darpan", "Audit and annual returns"],
  },
  {
    icon: ClipboardList,
    title: "Proposal Development & Fundraising",
    summary:
      "Concept notes, DPRs, LogFrames, theory of change models and donor-ready funding applications.",
    points: ["CSR and donor proposals", "M&E frameworks", "SDG-aligned project design"],
  },
  {
    icon: Building2,
    title: "Strategic Planning",
    summary:
      "Institutional development support for NGOs moving from informal work to managed organizations.",
    points: ["Vision and mission planning", "Policies and SOPs", "Governance systems"],
  },
  {
    icon: BarChart3,
    title: "Research & Impact Assessment",
    summary:
      "Baseline surveys, need assessments, social audits, impact evaluation and documentation.",
    points: ["Qualitative and quantitative studies", "Data analysis", "Report writing"],
  },
  {
    icon: Handshake,
    title: "CSR Consulting",
    summary:
      "CSR strategy, NGO due diligence, partnership development, monitoring and impact reporting.",
    points: ["CSR planning", "ESG alignment", "Impact measurement"],
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity Building",
    summary:
      "Practical workshops for NGO professionals, community leaders, youth groups and development teams.",
    points: ["Project management", "Proposal writing", "Leadership and communication"],
  },
  {
    icon: HeartPulse,
    title: "Public Health Consultancy",
    summary:
      "Community-based public health, WASH, nutrition, adolescent health and wellness interventions.",
    points: ["Health program design", "Community mobilization", "Rights-based approach"],
  },
  {
    icon: Sprout,
    title: "Livelihood & Social Enterprise",
    summary:
      "Skill development, SHG strengthening, FPO support, value chains and rural enterprise models.",
    points: ["Women economic empowerment", "Market linkage", "Enterprise development"],
  },
];

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center px-2 py-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-trust-green-pale text-trust-green ring-8 ring-trust-green-pale/50">
        <CheckCircle2 className="h-8 w-8" />
      </div>
      <h3 className="mt-5 text-2xl font-extrabold text-trust-navy">
        Request received
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-600">
        Thank you for sharing the details. Our team will review your requirement
        and contact you with the next steps.
      </p>
      <Button onClick={onClose} className="mt-6" size="sm">
        Close
      </Button>
    </div>
  );
}

function ServiceInquiryDialog({
  trigger,
  initialService,
}: {
  trigger: ReactNode;
  initialService: string;
}) {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(initialService);
  const [state, handleSubmit] = useForm("mvzyqzzj");

  const compactServices = useMemo(
    () => services.map((service) => service.title),
    []
  );

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        if (nextOpen) setSelectedService(initialService);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[92vh] overflow-y-auto rounded-3xl border-0 p-0 shadow-2xl shadow-trust-navy/20 sm:max-w-2xl">
        <div className="bg-trust-navy px-5 pb-8 pt-7 text-white sm:px-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
            <ClipboardList className="h-3.5 w-3.5 text-trust-green-light" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-trust-green-light">
              Service Request
            </span>
          </div>
          <DialogHeader className="mt-3 text-left">
            <DialogTitle className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              Tell us what support you need
            </DialogTitle>
            <DialogDescription className="max-w-xl text-sm leading-relaxed text-white/70">
              Share your organization details and the service you are looking
              for. We will respond with a clear way forward.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-5 pb-6 pt-5 sm:px-7">
          {state.succeeded ? (
            <SuccessState onClose={() => setOpen(false)} />
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="hidden"
                name="service"
                value={selectedService}
                readOnly
              />

              <div>
                <Label className={labelClass}>Service needed</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {compactServices.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`rounded-full border px-3 py-2 text-left text-xs font-semibold transition ${
                        selectedService === service
                          ? "border-trust-green bg-trust-green text-white shadow-md shadow-trust-green/20"
                          : "border-gray-200 bg-white text-trust-navy hover:border-trust-green/40 hover:bg-trust-green-pale/50"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="service-name" className={labelClass}>
                    Full name
                  </Label>
                  <Input
                    id="service-name"
                    name="name"
                    required
                    placeholder="Your name"
                    className={`${fieldClass} mt-2`}
                  />
                </div>
                <div>
                  <Label htmlFor="service-phone" className={labelClass}>
                    Phone
                  </Label>
                  <Input
                    id="service-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 ..."
                    className={`${fieldClass} mt-2`}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="service-email" className={labelClass}>
                    Email
                  </Label>
                  <Input
                    id="service-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={`${fieldClass} mt-2`}
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
                <div>
                  <Label htmlFor="service-organization" className={labelClass}>
                    Organization
                  </Label>
                  <Input
                    id="service-organization"
                    name="organization"
                    placeholder="NGO, CSR, institution..."
                    className={`${fieldClass} mt-2`}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="service-location" className={labelClass}>
                    Location
                  </Label>
                  <Input
                    id="service-location"
                    name="location"
                    placeholder="City / district"
                    className={`${fieldClass} mt-2`}
                  />
                </div>
                <div>
                  <Label htmlFor="service-timeline" className={labelClass}>
                    Expected timeline
                  </Label>
                  <Input
                    id="service-timeline"
                    name="timeline"
                    placeholder="Urgent, this month, planning stage..."
                    className={`${fieldClass} mt-2`}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="service-message" className={labelClass}>
                  Requirement details
                </Label>
                <Textarea
                  id="service-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Briefly describe what you need, current status, deadlines and any documents already available."
                  className="mt-2 rounded-xl border-gray-200 bg-white focus-visible:border-trust-green focus-visible:ring-2 focus-visible:ring-trust-green"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-1 text-xs text-red-500"
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button
                  type="submit"
                  size="lg"
                  disabled={state.submitting}
                  className="w-full sm:flex-1"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send request
                    </>
                  )}
                </Button>
                <Button
                  asChild
                  type="button"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:flex-1"
                >
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 fill-white stroke-0" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-trust-blue-pale/45 px-4 py-16 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Our Services"
          title="Professional support for social impact work"
          subtitle="We help NGOs, CSR teams, donor agencies, academic institutions and social entrepreneurs build compliant, fundable and measurable development programs."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-trust-navy/10 hover:ring-trust-green/25"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-trust-green-pale text-trust-green transition group-hover:bg-trust-green group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-trust-blue-pale px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-trust-navy">
                    Service
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-extrabold leading-tight text-trust-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {service.summary}
                </p>

                <div className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-trust-green" />
                      <span className="text-sm font-semibold leading-relaxed text-trust-navy">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <ServiceInquiryDialog
                    initialService={service.title}
                    trigger={
                      <Button variant="outline" size="sm" className="w-full">
                        Get this service
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    }
                  />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl bg-trust-navy p-5 text-white shadow-xl shadow-trust-navy/15 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-trust-green-light">
                How to get a service
              </p>
              <p className="mt-2 text-lg font-extrabold text-white">
                Choose a service, send your details, then our team will guide
                you on documents, scope, timeline and next steps.
              </p>
            </div>
            <Button asChild variant="secondary" size="lg">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 fill-white stroke-0" />
                WhatsApp us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
