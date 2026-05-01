"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const WA_NUMBER = "5527998346547";
const wa = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

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
  whatsappHref: string;
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    id: "start",
    title: "Start",
    description: "Para quem ainda não tem site e precisa parar de perder cliente pra quem aparece melhor no Google.",
    price: "R$ 300",
    priceNote: "pagamento único",
    features: [
      "Página única completa: serviços, sobre você e contato em uma rolagem",
      "Botão de WhatsApp fixo na tela (cliente fala com você de qualquer parte do site)",
      "Otimizada pra celular, onde 9 em cada 10 clientes vão acessar",
      "Hospedagem e domínio configurados pra você (sem dor de cabeça técnica)",
    ],
    cta: "Escolher Start",
    ctaVariant: "outline",
    whatsappHref: wa("Olá! Tenho interesse no plano *Start* (R$ 300 — pagamento único). Pode me dar mais detalhes?"),
  },
  {
    id: "pro",
    badge: "MAIS ESCOLHIDO",
    title: "Pro",
    titleColor: "#007bff",
    description: "Para quem cobra bem pelo serviço e precisa de presença digital à altura. Ideal pra clínicas, consultórios e profissionais que querem se posicionar como referência.",
    price: "R$ 500",
    priceNote: "pagamento único",
    features: [
      "Tudo do plano Start, mais:",
      "Design personalizado com a identidade do seu negócio (cores, tipografia, sensação visual)",
      "Seções extras pensadas pra converter: depoimentos, antes e depois, perguntas frequentes",
      "Apresentação detalhada de cada serviço, com fotos e descrições",
      "Integração com Google Maps e seu perfil do Google Meu Negócio",
    ],
    cta: "Escolher Pro",
    ctaVariant: "solid",
    highlighted: true,
    whatsappHref: wa("Olá! Tenho interesse no plano *Pro* (R$ 500 — pagamento único). Pode me dar mais detalhes?"),
  },
  {
    id: "ecosystem",
    title: "Ecossistema",
    description: "Para quem já tem fluxo de clientes e perde venda por não responder mensagem a tempo. O site trabalha junto com automações que atendem 24h e organizam todos os contatos.",
    price: "R$ 1.000",
    priceNote: "setup + R$ 300/mês",
    features: [
      "Tudo do plano Pro, mais:",
      "Atendimento automático no WhatsApp: responde dúvidas comuns, agenda horários e qualifica o cliente antes de chegar em você",
      "Funcionamento 24h, inclusive fora do horário comercial e nos fins de semana",
      "Painel com todos os leads organizados num só lugar (nada se perde)",
      "Manutenção mensal inclusa: ajustes, atualizações e suporte contínuo",
    ],
    cta: "Aplicar para o Ecossistema",
    ctaVariant: "dark",
    whatsappHref: wa("Olá! Tenho interesse no plano *Ecossistema* (R$ 1.000 setup + R$ 300/mês). Pode me dar mais detalhes?"),
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
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ color: "#fafafa" }}>
            Escolha o projeto ideal para o seu momento.
          </h2>
          <p className="max-w-xl text-base leading-relaxed" style={{ color: "#9ca3af" }}>
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
  const isHighlighted = plan.highlighted;

  return (
    <div className="relative flex flex-col gap-8 rounded-2xl p-8"
      style={{
        background: isHighlighted ? "rgba(0,123,255,0.04)" : "#0b1021",
        border: `1px solid ${isHighlighted ? "rgba(0,123,255,0.55)" : "rgba(255,255,255,0.07)"}`,
        boxShadow: isHighlighted
          ? "0 0 0 1px rgba(0,123,255,0.15), 0 8px 60px rgba(0,123,255,0.22), 0 0 120px rgba(0,123,255,0.08)"
          : "none",
      }}
    >
      {/* Highlighted top glow strip */}
      {isHighlighted && (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-px inset-x-8 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,123,255,0.7), transparent)" }}
        />
      )}

      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span
            className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
            style={{
              background: "linear-gradient(90deg, #005bc0, #007bff)",
              boxShadow: "0 4px 14px rgba(0,123,255,0.4)",
            }}
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
        <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-1">
        <span
          className="text-4xl font-extrabold tracking-tight"
          style={{ color: isHighlighted ? "#60a5fa" : "#fafafa" }}
        >
          {plan.price}
        </span>
        <span className="text-xs" style={{ color: "#6b7280" }}>
          {plan.priceNote}
        </span>
      </div>

      {/* Divider */}
      <div
        className="h-px w-full"
        style={{
          background: isHighlighted
            ? "linear-gradient(90deg, transparent, rgba(0,123,255,0.25), transparent)"
            : "rgba(255,255,255,0.06)",
        }}
      />

      {/* Features */}
      <ul className="flex flex-col gap-3.5">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
              style={{
                background: isHighlighted ? "rgba(0,123,255,0.18)" : "rgba(0,123,255,0.1)",
                boxShadow: isHighlighted ? "0 0 8px rgba(0,123,255,0.3)" : "none",
              }}
            >
              <Check size={11} style={{ color: "#007bff" }} />
            </span>
            <span className="text-sm leading-relaxed" style={{ color: "#e5e7eb" }}>
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto flex flex-col gap-3">
        <CtaButton variant={plan.ctaVariant} label={plan.cta} href={plan.whatsappHref} />
        {plan.ctaVariant !== "dark" && (
          <div className="flex items-center justify-center gap-1.5">
            <ShieldCheck size={13} className="flex-shrink-0 text-green-500" />
            <span className="text-xs" style={{ color: "#6b7280" }}>
              Risco Zero: Sua página no ar ou seu dinheiro de volta.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function CtaButton({ variant, label, href }: { variant: Plan["ctaVariant"]; label: string; href: string }) {
  const base =
    "w-full cursor-pointer rounded-full py-3 text-sm font-semibold transition-all duration-200 text-center block";

  if (variant === "solid") {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(base, "text-white font-bold")}
        style={{
          background: "linear-gradient(135deg, #005bc0 0%, #007bff 60%, #3b9eff 100%)",
          boxShadow: "0 0 24px rgba(0,123,255,0.45), 0 4px 20px rgba(0,91,192,0.3)",
        }}
      >
        {label}
      </motion.a>
    );
  }

  if (variant === "outline") {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(base, "border bg-transparent")}
        style={{ borderColor: "rgba(255,255,255,0.15)", color: "#fafafa" }}
      >
        {label}
      </motion.a>
    );
  }

  // dark
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
    </motion.a>
  );
}

function ScarcityBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="relative mt-20 mx-auto max-w-3xl"
    >
      {/* Outer ambient glow — wide diffuse halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-3xl"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,123,255,0.18) 0%, transparent 70%)",
          filter: "blur(12px)",
        }}
      />

      {/* Gradient border shell */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          padding: "1.5px",
          background:
            "linear-gradient(135deg, rgba(0,123,255,0.55) 0%, rgba(255,255,255,0.08) 45%, rgba(0,123,255,0.25) 100%)",
          borderRadius: "inherit",
        }}
      >
        <div className="h-full w-full rounded-3xl" style={{ background: "rgba(11,16,33,0.92)" }} />
      </div>

      {/* Glassmorphism inner content */}
      <div
        className="relative overflow-hidden rounded-3xl"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        {/* Top inner highlight line */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,123,255,0.35), transparent)" }}
        />

        {/* Content */}
        <div className="flex flex-col items-center gap-6 px-10 py-12 text-center sm:px-16 sm:py-14">

          {/* Live dot + label */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </span>
            <span
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: "#6b7280" }}
            >
              Disponibilidade em tempo real
            </span>
          </div>

          {/* Main headline */}
          <div className="flex flex-col gap-3">
            <p
              className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
              style={{ color: "#fafafa" }}
            >
              Vagas limitadas esta semana
            </p>
            <p className="max-w-lg text-base leading-relaxed" style={{ color: "#9ca3af" }}>
              Para garantir qualidade máxima e entrega em poucos dias, atendemos{" "}
              <span className="font-bold" style={{ color: "#ffffff" }}>
                apenas 4 novos projetos por semana.
              </span>{" "}
              Verifique a disponibilidade antes de fechar.
            </p>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
