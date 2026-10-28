"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import type { RefObject } from "react";
import { useLanguage } from "@/lib/i18n";
import { ColorBar } from "@/components/ui/SectionHeading";
import { CartridgeGlyph, RegistrationMark } from "@/components/ui/PrintMarks";

const dropPath =
  "M190 58c0 0-54 66-54 110a54 54 0 1 0 108 0c0-44-54-110-54-110Z";

const dropletPath =
  "M0 -28C0 -28 -17 -8 -17 5a17 17 0 1 0 34 0C17 -8 0 -28 0 -28Z";

function Droplet({ fill, glow }: { fill: string; glow: string }) {
  return (
    <g transform="scale(1.22)">
      <circle r="46" fill={`url(#${glow})`} />
      <path d={dropletPath} fill={fill} />
      <ellipse cx="-5" cy="-1" rx="3.6" ry="6.2" fill="white" fillOpacity="0.32" />
    </g>
  );
}

export function InkDrop({ scrollTarget }: { scrollTarget: RefObject<HTMLElement | null> }) {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end start"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const mainY = useTransform(progress, [0, 0.45, 0.82], [0, 14, 74]);
  const mainOpacity = useTransform(progress, [0.5, 0.72], [1, 0]);
  const splitOpacity = useTransform(progress, [0.52, 0.74], [0, 1]);
  const cyanX = useTransform(progress, [0.52, 1], [0, -92]);
  const cyanY = useTransform(progress, [0.52, 1], [0, 50]);
  const magentaY = useTransform(progress, [0.52, 1], [0, 86]);
  const yellowX = useTransform(progress, [0.52, 1], [0, 92]);
  const yellowY = useTransform(progress, [0.52, 1], [0, 50]);

  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[460px]">
      <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(120%_100%_at_50%_0%,#183363_0%,#0b1b3a_56%,#06101f_100%)] shadow-[0_40px_90px_-40px_rgba(11,27,58,0.7)]">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -left-14 top-[30%] h-44 w-44 rounded-full bg-brand-cyan/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-[12%] h-36 w-36 rounded-full bg-brand-magenta/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[10%] left-[38%] h-32 w-32 rounded-full bg-brand-yellow/10 blur-3xl" />

        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="drift absolute left-[3%] top-[19%] w-[72px] text-paper/[0.09]">
            <CartridgeGlyph className="w-full -rotate-12" />
          </div>
          <div className="drift drift-slow drift-delayed absolute right-[2%] top-[50%] w-[88px] text-paper/[0.07]">
            <CartridgeGlyph className="w-full rotate-[9deg]" />
          </div>
          <div className="drift absolute bottom-[26%] left-[12%] w-[54px] text-paper/[0.06]">
            <CartridgeGlyph className="w-full -rotate-6" />
          </div>
        </div>

        <RegistrationMark className="absolute left-4 top-4 h-6 w-6 text-paper/20" />
        <RegistrationMark className="absolute bottom-4 right-4 h-6 w-6 text-paper/20" />

        <svg
          viewBox="0 0 380 460"
          fill="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="heroDropFill" x1="0" y1="0" x2="0.35" y2="1">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="0.5" stopColor="#eaf3ff" />
              <stop offset="1" stopColor="#9cc4e6" />
            </linearGradient>
            <radialGradient id="heroCyanGlow">
              <stop stopColor="#00B7EB" stopOpacity="0.5" />
              <stop offset="1" stopColor="#00B7EB" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heroMagentaGlow">
              <stop stopColor="#E6007E" stopOpacity="0.45" />
              <stop offset="1" stopColor="#E6007E" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heroYellowGlow">
              <stop stopColor="#FFD500" stopOpacity="0.4" />
              <stop offset="1" stopColor="#FFD500" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heroHalo">
              <stop stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g stroke="#ffffff" strokeOpacity="0.09" strokeDasharray="2 8">
            <circle cx="190" cy="216" r="146" />
            <circle cx="190" cy="216" r="100" />
          </g>

          <g>
            <rect
              x="112"
              y="25"
              width="156"
              height="15"
              rx="7.5"
              fill="#ffffff"
              fillOpacity="0.08"
              stroke="#ffffff"
              strokeOpacity="0.16"
            />
            <circle cx="148" cy="32.5" r="2.1" fill="#00B7EB" />
            <circle cx="190" cy="32.5" r="2.1" fill="#E6007E" />
            <circle cx="232" cy="32.5" r="2.1" fill="#FFD500" />
            <path
              d="M190 42v14"
              stroke="#ffffff"
              strokeOpacity="0.22"
              strokeDasharray="2 4"
            />
          </g>

          <circle cx="190" cy="212" r="132" fill="url(#heroHalo)" />

          <motion.g
            style={
              reduce
                ? { y: 0, opacity: 1 }
                : { y: mainY, opacity: mainOpacity }
            }
          >
            <path d={dropPath} fill="url(#heroDropFill)" />
            <ellipse
              cx="172"
              cy="178"
              rx="12"
              ry="22"
              fill="#ffffff"
              fillOpacity="0.55"
              transform="rotate(-18 172 178)"
            />
            <path
              d="M214 232a42 42 0 0 1-36 38"
              stroke="#0b1b3a"
              strokeOpacity="0.15"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.g>

          <g transform="translate(190 312)">
            <motion.g
              style={
                reduce
                  ? { x: -92, y: 52, opacity: 1 }
                  : { x: cyanX, y: cyanY, opacity: splitOpacity }
              }
            >
              <Droplet fill="#00B7EB" glow="heroCyanGlow" />
            </motion.g>
            <motion.g
              style={
                reduce
                  ? { x: 0, y: 88, opacity: 1 }
                  : { x: 0, y: magentaY, opacity: splitOpacity }
              }
            >
              <Droplet fill="#E6007E" glow="heroMagentaGlow" />
            </motion.g>
            <motion.g
              style={
                reduce
                  ? { x: 92, y: 52, opacity: 1 }
                  : { x: yellowX, y: yellowY, opacity: splitOpacity }
              }
            >
              <Droplet fill="#FFD500" glow="heroYellowGlow" />
            </motion.g>
          </g>

          <g fill="#ffffff" fillOpacity="0.22">
            <circle cx="92" cy="120" r="1.6" />
            <circle cx="300" cy="92" r="2" />
            <circle cx="316" cy="190" r="1.2" />
            <circle cx="70" cy="250" r="1.4" />
          </g>
        </svg>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-[#06101f]/90 to-transparent" />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4 px-1.5">
        <div>
          <div className="flex items-center gap-2">
            <ColorBar />
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-ink/45">
              {t.hero.visualLabel}
            </span>
          </div>
          <p className="mt-2 max-w-[17rem] text-xs leading-relaxed text-ink/55">
            {t.hero.visualCaption}
          </p>
        </div>
        <span className="mt-1 hidden items-center gap-2 text-[0.58rem] uppercase tracking-[0.18em] text-ink/30 sm:flex">
          {t.hero.scrollCue}
          <span className="block h-9 w-px bg-linear-to-b from-ink/30 to-transparent" />
        </span>
      </div>
    </div>
  );
}
