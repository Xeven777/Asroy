import { cn } from "@/lib/utils";
import { LeafIcon } from "lucide-react";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  className = "mb-12",
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="flex items-center justify-center gap-2 mb-3">
        <LeafIcon className="-scale-x-100 fill-trust-green text-trust-green size-4" />
        <span className="text-trust-green font-bold text-sm tracking-widest uppercase">
          {label}
        </span>
        <LeafIcon className="fill-trust-green text-trust-green size-4" />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter text-trust-navy font-crimson">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-sm md:text-lg max-w-4xl text-center mx-auto mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}
