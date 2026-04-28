"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function HeroSection() {
  return (
    <section
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
      )}
    >
      {/* Radial glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,123,255,0.12) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex w-full max-w-4xl flex-col items-center gap-6"
      >
        {/* Badge */}
        <motion.div variants={fadeUp}>
          <Badge />
        </motion.div>

        {/* Particle text — replaces the static H1 */}
        <motion.div variants={fadeUp} className="w-full">
          <ParticleTextEffect words={["SEIKODE", "CONVERSÃO", "ACELERAÇÃO"]} />
        </motion.div>

        {/* Subtitle H2 */}
        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-lg leading-relaxed sm:text-xl"
          style={{ color: "#a1a1aa" }}
        >
          Pare de perder clientes no Google Maps para concorrentes que parecem
          mais profissionais. Criamos o seu site em{" "}
          <strong style={{ color: "#fafafa" }}>poucos dias</strong> — direto ao
          ponto, focado em conversão.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp}>
          <motion.a
            href={`https://wa.me/5527998346547?text=${encodeURIComponent("Olá! Quero profissionalizar meu negócio hoje. Pode me dar mais detalhes?")}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="group flex cursor-pointer items-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg"
            style={{
              background: "#007bff",
              boxShadow: "0 0 28px rgba(0,123,255,0.35)",
            }}
          >
            Profissionalizar Meu Negócio Hoje
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Badge() {
  return (
    <div className="relative inline-flex items-center rounded-full px-4 py-1.5">
      {/* Animated border glow */}
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,123,255,0.6), transparent)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <span
        className="absolute inset-0 rounded-full border"
        style={{ borderColor: "rgba(0,123,255,0.35)" }}
      />
      <span
        className="absolute inset-0 rounded-full"
        style={{ background: "rgba(0,123,255,0.08)" }}
      />
      <span
        className="relative z-10 text-xs font-semibold uppercase tracking-widest"
        style={{ color: "#007bff" }}
      >
        Para Negócios Locais e Profissionais
      </span>
    </div>
  );
}
