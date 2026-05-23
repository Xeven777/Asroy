"use client";

import { useState } from "react";
import { Heart, HandHeart, Mail, Phone, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DonateDetails, JoinForm } from "@/components/GetInvolvedDialog";

type Tab = "donate" | "join";

const contactInfo = [
  {
    icon: Mail,
    label: "Email us",
    value: "asroywelfaretrust@gmail.com",
    href: "mailto:asroywelfaretrust@gmail.com",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+91 97326 43449",
    href: "tel:+919732643449",
  },
  {
    icon: MapPin,
    label: "Visit",
    value: "Indira Pally, Raghunathganj, Murshidabad, PIN - 742225",
  },
];

export default function ContactSection() {
  const [tab, setTab] = useState<Tab>("donate");

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 py-16 md:py-24 bg-linear-to-b from-white to-trust-green-pale/40"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14 items-start">
          {/* Left — info */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-trust-green/10 px-3 py-1 ring-1 ring-trust-green/15">
                <HandHeart className="h-3.5 w-3.5 text-trust-green" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-trust-green">
                  Get Involved
                </span>
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-medium tracking-tight text-trust-navy font-crimson">
                Be part of the change
                <br />
                <span className="bg-linear-to-r from-trust-green to-trust-green-light bg-clip-text text-transparent">
                  we want to see.
                </span>
              </h2>
              <p className="mt-4 max-w-md text-base text-gray-600 leading-relaxed">
                Whether you contribute a little or a lot, give time or
                resources — every act of kindness builds a stronger community.
              </p>
            </div>

            <div className="grid gap-3">
              {contactInfo.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:border-trust-green/30 hover:shadow-md">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-trust-green-pale text-trust-green">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-trust-navy">
                        {value}
                      </p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>
          </div>

          {/* Right — form card */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-4xl bg-linear-to-br from-trust-green/10 via-transparent to-trust-navy/10 blur-2xl pointer-events-none" />
            <div className="relative rounded-3xl border border-white bg-white p-5 sm:p-7 shadow-2xl shadow-trust-navy/10 ring-1 ring-gray-100">
              <Tabs
                value={tab}
                onValueChange={(v) => setTab(v as Tab)}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 h-12 rounded-2xl bg-trust-green-pale/60 p-1">
                  <TabsTrigger
                    value="donate"
                    className="rounded-xl h-full data-[state=active]:bg-trust-green data-[state=active]:text-white data-[state=active]:shadow-md text-trust-navy font-semibold gap-2"
                  >
                    <Heart className="h-4 w-4" />
                    Donate
                  </TabsTrigger>
                  <TabsTrigger
                    value="join"
                    className="rounded-xl h-full data-[state=active]:bg-trust-navy data-[state=active]:text-white data-[state=active]:shadow-md text-trust-navy font-semibold gap-2"
                  >
                    <HandHeart className="h-4 w-4" />
                    Join Us
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="donate" className="mt-6">
                  <DonateDetails />
                </TabsContent>
                <TabsContent value="join" className="mt-6">
                  <JoinForm />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
