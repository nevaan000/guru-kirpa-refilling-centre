import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function StrokeIcon({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.1-.24c1.2.48 2.5.74 3.8.74a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.3a1 1 0 0 1 1 1c0 1.3.26 2.6.74 3.8a1 1 0 0 1-.24 1.1Z" />
    </StrokeIcon>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.26.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.22-1.46-1.37-1.71-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.86-.87 2.1 0 1.24.9 2.43 1.03 2.6.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </StrokeIcon>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </StrokeIcon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </StrokeIcon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5V12l3 2" />
    </StrokeIcon>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </StrokeIcon>
  );
}

export function XIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </StrokeIcon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </StrokeIcon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m5 12 4.5 4.5L19 7" />
    </StrokeIcon>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8 12 2.8 2.8L16.5 9" />
    </StrokeIcon>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m7 9.5 5 5 5-5" />
    </StrokeIcon>
  );
}

export function PrinterIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M7 8V4h10v4" />
      <path d="M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
      <path d="M7 14h10v6H7z" />
    </StrokeIcon>
  );
}

export function DropletIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 3s6 6.2 6 10a6 6 0 0 1-12 0c0-3.8 6-10 6-10Z" />
      <path d="M9.4 13.5a2.6 2.6 0 0 0 2.6 2.6" />
    </StrokeIcon>
  );
}

export function TonerIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="5" y="5" width="14" height="7" rx="3.5" />
      <path d="M7.5 12v5.5A2.5 2.5 0 0 0 10 20h4a2.5 2.5 0 0 0 2.5-2.5V12M9 8.5h6" />
    </StrokeIcon>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </StrokeIcon>
  );
}

export function CableIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M9 7V3M15 7V3M7 7h10v4a5 5 0 0 1-10 0V7ZM12 16v5" />
    </StrokeIcon>
  );
}

export function BoxesIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
    </StrokeIcon>
  );
}

export function WalletIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H19v14H6.5A2.5 2.5 0 0 1 4 16.5v-9Z" />
      <path d="M4 8h15" />
      <circle cx="16" cy="13" r="1.2" />
    </StrokeIcon>
  );
}

export function TimerIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 1.5M9 2h6M12 2v3" />
    </StrokeIcon>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M20 4C12 4 5 7 5 14a6 6 0 0 0 6 6c7 0 9-7 9-16Z" />
      <path d="M5 20c3-6 7-9 12-11" />
    </StrokeIcon>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </StrokeIcon>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16M15 9h3a2 2 0 0 1 2 2v10M2 21h20" />
      <path d="M8 7h3M8 11h3M8 15h3" />
    </StrokeIcon>
  );
}

export function StoreIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 10v10h16V10M3 10l2-6h14l2 6a3 3 0 0 1-5 0 3 3 0 0 1-4 0 3 3 0 0 1-4 0 3 3 0 0 1-5 0Z" />
      <path d="M9 20v-5h6v5" />
    </StrokeIcon>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m3 11 9-8 9 8M5 10v11h14V10" />
      <path d="M10 21v-6h4v6" />
    </StrokeIcon>
  );
}

export function InfoIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5M12 8h.01" />
    </StrokeIcon>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M14 4h6v6M20 4l-9 9M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
    </StrokeIcon>
  );
}

export function TagIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m20 13-7 7-9-9V4h7l9 9Z" />
      <circle cx="7.5" cy="7.5" r="1.2" />
    </StrokeIcon>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
    </StrokeIcon>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 3 5 6v5c0 4.5 3 8.1 7 10 4-1.9 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </StrokeIcon>
  );
}
