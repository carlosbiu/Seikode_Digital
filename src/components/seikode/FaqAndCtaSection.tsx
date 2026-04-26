"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "Tem alguma mensalidade escondida?",
    a: "Nos Planos Start e Pro, não. Você paga apenas o valor do desenvolvimento. Custos externos normais incluem apenas sua hospedagem básica e domínio (te orientamos em tudo).",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "Em poucos dias úteis, dependendo da sua agilidade em nos enviar as informações básicas do negócio (fotos, textos).",
  },
  {
    q: "E se eu já tiver um site antigo?",
    a: "Nós o substituímos por uma máquina de conversão moderna, mantendo o seu domínio atual intacto sem perder os acessos que você já tem.",
  },
];

const WHATSAPP_URL =
  "https://wa.me/5527997742494?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20gratuito%20para%20meu%20neg%C3%B3cio.";

export default function FaqAndCtaSection() {
  return (
    <section className="relative px-6 py-24 overflow-hidden" style={{ background: "#000105" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,123,255,0.15), transparent)" }}
      />

      <div className="mx-auto flex max-w-3xl flex-col gap-24">
        <FaqBlock />
        <CtaBlock />
      </div>
    </section>
  );
}

// ── FAQ ──────────────────────────────────────────────────────────────────────

function FaqBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="flex flex-col gap-10"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#fafafa" }}>
          Perguntas Frequentes
        </h2>
        <p className="max-w-xl text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
          Tudo o que você precisa saber antes de dar o próximo passo.
        </p>
      </div>

      {/* Accordion */}
      <div className="flex flex-col divide-y" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        {faqs.map((item, i) => (
          <AccordionItem
            key={i}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </motion.div>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="py-5">
      <button
        onClick={onToggle}
        className={cn(
          "flex w-full items-center justify-between gap-4 text-left",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bff] rounded-sm"
        )}
      >
        <span className="text-base font-semibold leading-snug" style={{ color: "#fafafa" }}>
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0"
          style={{ color: "#007bff" }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── CTA Final ────────────────────────────────────────────────────────────────

function CtaBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="flex flex-col items-center gap-8 rounded-3xl border p-10 text-center sm:p-14"
      style={{
        background: "#0b1021",
        borderColor: "rgba(0,123,255,0.3)",
        boxShadow: "0 0 60px rgba(0,123,255,0.07)",
      }}
    >
      {/* Decorative top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-12 left-1/2 h-24 w-72 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "rgba(0,123,255,0.1)" }}
      />

      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#fafafa" }}>
          Pronto para deixar a{" "}
          <span style={{ color: "#007bff" }}>concorrência para trás?</span>
        </h2>
        <p className="mx-auto max-w-lg text-sm leading-relaxed sm:text-base" style={{ color: "#a1a1aa" }}>
          Clique no botão abaixo, fale diretamente com nossa equipe no WhatsApp e receba um
          diagnóstico gratuito de como podemos profissionalizar sua marca no Google.
        </p>
      </div>

      {/* Heartbeat CTA */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-white"
        style={{
          background: "#007bff",
          boxShadow: "0 0 32px rgba(0,123,255,0.4)",
        }}
      >
        <MessageCircle size={20} />
        Falar com a Equipe no WhatsApp
      </motion.a>

      <p className="text-xs" style={{ color: "rgba(161,161,170,0.6)" }}>
        Diagnóstico 100% gratuito. Sem compromisso.
      </p>
    </motion.div>
  );
}
