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
    <div className={`text-center ${className}`}>
      <div className="flex items-center justify-center gap-2 mb-3">
        <LeafIcon className="-scale-x-100 fill-trust-green text-trust-green w-4 h-4" />
        <span className="text-trust-green font-bold text-sm tracking-widest uppercase">
          {label}
        </span>
        <LeafIcon className="fill-trust-green text-trust-green w-4 h-4" />
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-trust-navy font-crimson">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-sm mt-2">{subtitle}</p>
      )}
    </div>
  );
}
