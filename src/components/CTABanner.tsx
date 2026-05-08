import { Heart, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="py-14 md:py-20 bg-trust-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-trust-green/10 rounded-full translate-x-1/2 translate-y-1/2" />
        {/* Subtle dots pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Icon + Text */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/15 flex items-center justify-center shrink-0">
              <HandHeart className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                Together, we can create a lasting impact.
              </h2>
              <p className="text-white/70 text-sm md:text-base mt-1">
                Your support can transform lives and build a better future for all.
              </p>
            </div>
          </div>

          {/* CTA */}
          <Button variant="secondary" size="lg" className="shrink-0 hover:scale-105">
            <Heart className="w-5 h-5 fill-white stroke-0" />
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
}
