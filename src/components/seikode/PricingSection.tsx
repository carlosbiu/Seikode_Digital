"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface Plan {
  id: string;
  badge?: string;
  title: string;
  titleColor?: string;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  cta: string;
  ctaVariant: "outline" | "solid" | "dark";
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    id: "start",
    title: "Start",
    description: "Para quem precisa sair da invisibilidade hoje.",
    price: "R$ 300",
    priceNote: "pagamento único",
    features: [
      "Página Simples (One Page)",
      "Botão Flutuante de WhatsApp",
      "Otimizada para Celulares",
    ],
    cta: "Escolher Start",
    ctaVariant: "outline",
  },
  {
    id: "pro",
    badge: "MAIS ESCOLHIDO",
    title: "Pro",
    titleColor: "#007bff",
    description: "Para quem busca autoridade e design superior.",
    price: "R$ 500",
    priceNote: "pagamento único",
    features: [
      "Tudo do Start +",
      "Design Sofisticado",
      "Seções Extras de Conversão",
      "Detalhamento Avançado de Serviços",
    ],
    cta: "Escolher Pro",
    ctaVariant: "solid",
    highlighted: true,
  },
  {
    id: "ecosystem",
    title: "Ecossistema",
    description: "Para quem quer escalar e automatizar o atendimento.",
    price: "R$ 1.000",
    priceNote: "setup + R$ 300/mês",
    features: [
      "Página Pro +",
      "Integração Direta com WhatsApp (n8n)",
      "Automação de Atendimento 24h",
      "Gestão Eficiente de Leads",
    ],
    cta: "Aplicar para o Ecossistema",
    ctaVariant: "dark",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function PricingSection() {
  return (
    <section className="relative px-6 py-24 overflow-hidden bg-transparent">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,123,255,0.15), transparent)" }}
      />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-16 flex flex-col items-center gap-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#fafafa" }}>
            Escolha o projeto ideal para o seu momento.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
            Sem taxas ocultas. Transparência total para profissionalizar seu negócio.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={cn(plan.highlighted && "lg:scale-105")}
            >
              <PlanCard plan={plan} />
            </motion.div>
          ))}
        </motion.div>

        {/* Scarcity banner */}
        <ScarcityBanner />
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const borderStyle = plan.highlighted
    ? { borderColor: "#007bff" }
    : { borderColor: "rgba(255,255,255,0.08)" };

  const shadowStyle = plan.highlighted
    ? { boxShadow: "0 8px 40px rgba(0,123,255,0.18)" }
    : {};

  return (
    <div
      className="relative flex flex-col gap-8 rounded-2xl border p-8"
      style={{ background: "#0b1021", ...borderStyle, ...shadowStyle }}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className="inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest text-white"
            style={{ background: "#007bff" }}
          >
            {plan.badge}
          </span>
        </div>
      )}

      {/* Top: title + description */}
      <div className="flex flex-col gap-2">
        <h3
          className="text-2xl font-bold tracking-tight"
          style={{ color: plan.titleColor ?? "#fafafa" }}
        >
          {plan.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-1">
        <span className="text-4xl font-extrabold tracking-tight" style={{ color: "#fafafa" }}>
          {plan.price}
        </span>
        <span className="text-xs" style={{ color: "#a1a1aa" }}>
          {plan.priceNote}
        </span>
      </div>

      {/* Divider */}
      <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.07)" }} />

      {/* Features */}
      <ul className="flex flex-col gap-3">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
              style={{ background: "rgba(0,123,255,0.12)" }}
            >
              <Check size={11} style={{ color: "#007bff" }} />
            </span>
            <span className="text-sm leading-relaxed" style={{ color: "#fafafa" }}>
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto flex flex-col gap-3">
        <CtaButton variant={plan.ctaVariant} label={plan.cta} />
        {plan.ctaVariant !== "dark" && (
          <div className="flex items-center justify-center gap-1.5">
            <ShieldCheck size={13} className="flex-shrink-0 text-green-500" />
            <span className="text-xs" style={{ color: "#a1a1aa" }}>
              Risco Zero: Sua página no ar ou seu dinheiro de volta.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function CtaButton({ variant, label }: { variant: Plan["ctaVariant"]; label: string }) {
  const base =
    "w-full cursor-pointer rounded-full py-3 text-sm font-semibold transition-all duration-200";

  if (variant === "solid") {
    return (
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(base, "text-white")}
        style={{ background: "#007bff", boxShadow: "0 0 20px rgba(0,123,255,0.3)" }}
      >
        {label}
      </motion.button>
    );
  }

  if (variant === "outline") {
    return (
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(base, "border bg-transparent")}
        style={{ borderColor: "rgba(255,255,255,0.15)", color: "#fafafa" }}
      >
        {label}
      </motion.button>
    );
  }

  // dark
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(base, "border")}
      style={{
        background: "rgba(0,123,255,0.08)",
        borderColor: "rgba(0,123,255,0.35)",
        color: "#007bff",
      }}
    >
      {label}
    </motion.button>
  );
}

function ScarcityBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="relative mt-16 mx-auto max-w-2xl overflow-hidden rounded-2xl"
    >
      {/* Gradient border via pseudo-layer */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          padding: "1px",
          background: "linear-gradient(135deg, rgba(0,123,255,0.4) 0%, rgba(255,255,255,0.06) 50%, rgba(0,123,255,0.15) 100%)",
        }}
      >
        <div className="h-full w-full rounded-2xl" style={{ background: "#0b1021" }} />
      </div>

      {/* Top ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-1/2 h-20 w-48 -translate-x-1/2 rounded-full blur-2xl"
        style={{ background: "rgba(0,123,255,0.12)" }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-5 px-8 py-8 text-center sm:px-12">

        {/* Live dot + label row */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#a1a1aa" }}>
            Disponibilidade em tempo real
          </span>
        </div>

        {/* Main message */}
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold leading-snug sm:text-2xl" style={{ color: "#fafafa" }}>
            Vagas limitadas esta semana
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
            Para garantir qualidade máxima e entrega em poucos dias, atendemos{" "}
            <span className="font-bold" style={{ color: "#ffffff" }}>apenas 4 novos projetos por semana.</span>{" "}
            Verifique a disponibilidade antes de fechar.
          </p>
        </div>

        {/* Slot indicators */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4].map((slot) => (
              <span
                key={slot}
                className={cn(
                  "h-2.5 w-8 rounded-full transition-all",
                  slot <= 3 ? "bg-red-500/70" : "bg-green-500"
                )}
              />
            ))}
          </div>
          <span className="text-xs" style={{ color: "#a1a1aa" }}>
            <span style={{ color: "#fafafa", fontWeight: 600 }}>1 vaga</span> disponível
          </span>
        </div>

        {/* Footer stat row */}
        <div
          className="flex items-center gap-2 rounded-full border px-4 py-1.5"
          style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}
        >
          <Users size={13} style={{ color: "#007bff" }} />
          <span className="text-xs" style={{ color: "#a1a1aa" }}>
            +47 negócios locais profissionalizados este mês
          </span>
        </div>
      </div>
    </motion.div>
  );
}
