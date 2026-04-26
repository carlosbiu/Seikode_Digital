"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
        className="flex max-w-4xl flex-col items-center gap-8"
      >
        {/* Badge */}
        <motion.div variants={fadeUp}>
          <Badge />
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          style={{ color: "#fafafa" }}
        >
          Pare de Perder{" "}
          <span style={{ color: "#007bff" }}>Clientes no Google Maps</span>{" "}
          para Concorrentes que{" "}
          <span style={{ color: "#007bff" }}>Parecem Mais Profissionais.</span>
        </motion.h1>

        {/* H2 */}
        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-lg leading-relaxed sm:text-xl"
          style={{ color: "#a1a1aa" }}
        >
          Criamos um site profissional para o seu negócio local em{" "}
          <strong style={{ color: "#fafafa" }}>poucos dias</strong> — sem
          complicação, sem mensalidade absurda, com resultado real em
          conversão e autoridade digital.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp}>
          <motion.button
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
          </motion.button>
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
        Sistema de Aceleração B2B
      </span>
    </div>
  );
}
