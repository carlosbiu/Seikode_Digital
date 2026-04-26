"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Settings, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
});

const painPoints = [
  "Agências tradicionais cobram caro,",
  "para fazer reuniões inúteis,",
  "e entregam projetos genéricos.",
];

const solutionPoints = [
  "Landing Pages de alto nível em poucos dias,",
  "Foco absoluto em conversão (CRO),",
  "Sem enrolação, direto ao ponto.",
];

export default function ContrastSection() {
  return (
    <section className="relative px-6 py-24 overflow-hidden" style={{ background: "#000105" }}>
      {/* Subtle section divider glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,123,255,0.2), transparent)" }}
      />

      <div className="mx-auto max-w-6xl">
        {/* Section eyebrow */}
        <motion.p
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 text-center text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#a1a1aa" }}
        >
          Por que a Seikode?
        </motion.p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* ── Card 1: A Dor ── */}
          <PainCard />

          {/* ── Card 2: A Solução ── */}
          <SolutionCard />
        </div>
      </div>
    </section>
  );
}

function PainCard() {
  return (
    <motion.div
      variants={fadeUp(0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ backgroundColor: "rgba(80,20,20,0.18)" }}
      transition={{ duration: 0.25 }}
      className={cn(
        "group relative flex flex-col gap-8 rounded-2xl border p-8",
        "overflow-hidden"
      )}
      style={{
        background: "#0b1021",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      {/* Hover red tint overlay */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(180,30,30,0.07) 0%, transparent 70%)" }}
      />

      {/* Badge */}
      <CardBadge label="A Realidade B2B" variant="neutral" />

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight leading-snug" style={{ color: "#fafafa" }}>
        O mercado é{" "}
        <span style={{ color: "#007bff" }}>lento.</span>
      </h2>

      {/* Bullets */}
      <ul className="flex flex-col gap-3">
        {painPoints.map((point) => (
          <BulletItem key={point} text={point} variant="pain" />
        ))}
      </ul>

      {/* Visual placeholder */}
      <AssetPlaceholder
        icon={<Settings size={56} strokeWidth={1} />}
        label="[Gráfico de engrenagens — asset via Gemini API]"
        variant="neutral"
      />
    </motion.div>
  );
}

function SolutionCard() {
  return (
    <motion.div
      variants={fadeUp(0.18)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="group relative flex flex-col gap-8 rounded-2xl border p-8 overflow-hidden"
      style={{
        background: "#0b1021",
        borderColor: "rgba(0,123,255,0.3)",
      }}
    >
      {/* Hover blue glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,123,255,0.12) 0%, transparent 70%)" }}
      />
      {/* Static corner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl"
        style={{ background: "rgba(0,123,255,0.08)" }}
      />

      {/* Badge */}
      <CardBadge label="O Padrão Seikode" variant="primary" />

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight leading-snug" style={{ color: "#fafafa" }}>
        Sua presença{" "}
        <span style={{ color: "#007bff" }}>impecável.</span>
      </h2>

      {/* Bullets */}
      <ul className="flex flex-col gap-3">
        {solutionPoints.map((point) => (
          <BulletItem key={point} text={point} variant="solution" />
        ))}
      </ul>

      {/* Visual placeholder */}
      <AssetPlaceholder
        icon={<TrendingUp size={56} strokeWidth={1} />}
        label="[Interface de alta conversão — asset via Gemini API]"
        variant="primary"
      />
    </motion.div>
  );
}

// ── Shared sub-components ──────────────────────────────────────────────────

type Variant = "primary" | "neutral";

function CardBadge({ label, variant }: { label: string; variant: Variant }) {
  const borderColor = variant === "primary" ? "rgba(0,123,255,0.4)" : "rgba(255,255,255,0.12)";
  const bgColor = variant === "primary" ? "rgba(0,123,255,0.08)" : "rgba(255,255,255,0.04)";
  const textColor = variant === "primary" ? "#007bff" : "#a1a1aa";

  return (
    <div
      className="inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1"
      style={{ borderColor, background: bgColor }}
    >
      <span className="font-mono text-xs" style={{ color: textColor }}>
        {"< >"}
      </span>
      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: textColor }}>
        {label}
      </span>
    </div>
  );
}

function BulletItem({ text, variant }: { text: string; variant: "pain" | "solution" }) {
  const isPain = variant === "pain";

  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
        style={{
          background: isPain ? "rgba(255,255,255,0.06)" : "rgba(0,123,255,0.12)",
        }}
      >
        {isPain ? (
          <ArrowRight size={11} style={{ color: "#a1a1aa" }} />
        ) : (
          <Check size={11} style={{ color: "#007bff" }} />
        )}
      </span>
      <span className="text-sm leading-relaxed" style={{ color: isPain ? "#a1a1aa" : "#fafafa" }}>
        {text}
      </span>
    </li>
  );
}

function AssetPlaceholder({
  icon,
  label,
  variant,
}: {
  icon: React.ReactNode;
  label: string;
  variant: Variant;
}) {
  const borderColor = variant === "primary" ? "rgba(0,123,255,0.15)" : "rgba(255,255,255,0.06)";
  const iconColor = variant === "primary" ? "rgba(0,123,255,0.25)" : "rgba(255,255,255,0.1)";

  return (
    <div
      className="mt-auto flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed py-8"
      style={{ borderColor, background: "rgba(0,0,0,0.2)" }}
      data-asset-placeholder
    >
      <span style={{ color: iconColor }}>{icon}</span>
      <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
        {label}
      </p>
    </div>
  );
}
