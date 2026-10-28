import { cn } from "@/lib/utils";

export function CartridgeGlyph({
  className,
  strokeWidth = 1.6,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 120 84"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("text-current", className)}
    >
      <rect
        x="7"
        y="15"
        width="88"
        height="54"
        rx="12"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path
        d="M95 31h12a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H95"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <circle cx="30" cy="42" r="8.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="30" cy="42" r="2.4" fill="currentColor" opacity="0.65" />
      <path
        d="M49 31h30M49 42h22M49 53h27"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray="2.5 5"
      />
    </svg>
  );
}

export function RegistrationMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <circle cx="12" cy="12" r="6.2" />
      <path d="M12 1.5v6M12 16.5v6M1.5 12h6M16.5 12h6" />
    </svg>
  );
}
