import { cn } from "@/lib/utils";

export function ColorBar({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex items-center gap-[2px]", className)}
    >
      <span className="h-[3px] w-2 rounded-full bg-brand-cyan" />
      <span className="h-[3px] w-2 rounded-full bg-brand-magenta" />
      <span className="h-[3px] w-2 rounded-full bg-brand-yellow" />
      <span
        className={cn(
          "h-[3px] w-2 rounded-full",
          tone === "dark" ? "bg-paper/35" : "bg-ink/35",
        )}
      />
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  titleId?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <ColorBar tone={tone} />
        <p
          className={cn(
            "text-[0.68rem] font-semibold uppercase tracking-[0.18em]",
            tone === "dark" ? "text-brand-cyan" : "text-ink/55",
          )}
        >
          {eyebrow}
        </p>
      </div>
      <h2
        id={titleId}
        className={cn(
          "section-title mt-5 text-balance font-display text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.035em]",
          tone === "dark" ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[0.98rem] leading-[1.75] sm:text-lg",
            align === "center" && "mx-auto",
            tone === "dark" ? "text-paper/65" : "text-ink/65",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
