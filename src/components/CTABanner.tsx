import { Heart, HandHeart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="py-16 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-trust-navy via-trust-navy to-trust-navy-dark px-6 py-12 sm:px-12 md:px-16 md:py-16 shadow-2xl shadow-trust-navy/25">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -left-16 w-72 h-72 bg-trust-green/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-10 w-96 h-96 bg-trust-green-light/10 rounded-full blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:text-left">
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center lg:gap-6">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-trust-green-light/30 blur-xl" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm md:h-20 md:w-20">
                  <HandHeart className="h-8 w-8 text-trust-green-light md:h-10 md:w-10" />
                </div>
              </div>
              <div className="max-w-xl">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-trust-green-light">
                  Make a Difference
                </span>
                <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white md:text-4xl">
                  Together, we can create a lasting impact
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                  Your support transforms lives, fuels education and healthcare,
                  and builds a brighter future for the communities we serve.
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
              <Button variant="secondary" size="lg">
                <Heart className="h-5 w-5 fill-white stroke-0" />
                Donate Now
              </Button>
              <Button size="lg" variant={"outline"}>
                Become a Volunteer
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
