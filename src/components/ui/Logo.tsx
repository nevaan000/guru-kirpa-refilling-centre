import { cn } from "@/lib/utils";

export function LogoMark({
  variant = "ink",
  className,
}: {
  variant?: "ink" | "paper";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect
        width="48"
        height="48"
        rx="14"
        className={variant === "paper" ? "fill-paper" : "fill-ink"}
      />
      <path
        d="M24 9.5s-7.4 8.7-7.4 14.6a7.4 7.4 0 0 0 14.8 0C31.4 18.2 24 9.5 24 9.5Z"
        className={variant === "paper" ? "fill-ink" : "fill-paper"}
      />
      <path
        d="M20.4 25.2a3.4 3.4 0 0 0 3.4 3.4"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        className={variant === "paper" ? "stroke-paper/70" : "stroke-ink/50"}
      />
      <circle cx="14.4" cy="38.6" r="2.2" className="fill-brand-cyan" />
      <circle cx="24" cy="38.6" r="2.2" className="fill-brand-magenta" />
      <circle cx="33.6" cy="38.6" r="2.2" className="fill-brand-yellow" />
    </svg>
  );
}

export function Logo({
  tone = "ink",
  className,
}: {
  tone?: "ink" | "paper";
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark
        variant={tone === "paper" ? "paper" : "ink"}
        className="h-10 w-10 shrink-0 sm:h-11 sm:w-11"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.02rem] font-semibold tracking-[-0.025em] sm:text-[1.08rem]",
            tone === "paper" ? "text-paper" : "text-ink",
          )}
        >
          Guru Kirpa{" "}
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] font-medium tracking-[0.16em] sm:text-[0.65rem]",
            tone === "paper" ? "text-paper/60" : "text-ink/55",
          )}
        >
          Refilling Centre
        </span>
      </span>
    </span>
  );
}
