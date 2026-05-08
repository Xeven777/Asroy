import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold ring-offset-background transition-all active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-trust-navy text-white shadow-lg shadow-trust-navy/25 hover:bg-trust-navy-dark hover:shadow-xl hover:shadow-trust-navy/30",
        secondary:
          "bg-trust-green text-white shadow-lg shadow-trust-green/30 hover:bg-trust-green-light hover:shadow-xl hover:shadow-trust-green-light/40",
        outline:
          "border border-trust-navy/20 bg-white/70 backdrop-blur-sm text-trust-navy hover:bg-white hover:border-trust-navy/40 hover:shadow-md",
        ghost: "text-trust-navy hover:bg-trust-navy/5",
        link: "text-trust-green underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90",
      },
      size: {
        default: "h-12 rounded-full px-7 gap-2",
        sm: "h-10 rounded-full px-5 gap-2 text-sm",
        lg: "h-14 rounded-full px-9 text-base gap-2.5",
        icon: "h-12 w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
