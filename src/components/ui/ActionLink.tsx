import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "whatsapp" | "light" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  external?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white shadow-[0_18px_35px_-20px_rgba(11,27,58,0.9)] hover:bg-ink-soft hover:-translate-y-0.5",
  secondary:
    "border border-ink/10 bg-white text-ink shadow-[0_14px_40px_-30px_rgba(11,27,58,0.7)] hover:border-ink/25 hover:-translate-y-0.5",
  whatsapp:
    "bg-[#0b6b52] text-white shadow-[0_18px_35px_-22px_rgba(11,107,82,0.9)] hover:bg-[#085540] hover:-translate-y-0.5",
  light: "bg-paper text-ink hover:bg-white hover:-translate-y-0.5",
  outline:
    "border border-white/20 bg-white/[0.02] text-paper hover:border-white/40 hover:bg-white/[0.06]",
  ghost: "text-ink hover:bg-ink/[0.05]",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-[0.8rem]",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-6 text-[0.95rem]",
};

export function ActionLink({
  variant = "primary",
  size = "md",
  external,
  className,
  target,
  rel,
  children,
  ...props
}: ActionLinkProps) {
  const isExternal = external ?? /^https?:\/\//.test(props.href ?? "");

  return (
    <a
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        variants[variant],
        sizes[size],
        className,
      )}
      target={isExternal ? (target ?? "_blank") : target}
      rel={isExternal ? (rel ?? "noopener noreferrer") : rel}
      {...props}
    >
      {children}
    </a>
  );
}
