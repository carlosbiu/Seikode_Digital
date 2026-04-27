"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "A Seikode entregou o site da minha clínica em 4 dias. Profissionalizou 100% a forma como os pacientes me veem no Google. Já recuperei o investimento na primeira semana.",
    name: "Dr. Rafael",
    role: "Odontologia",
    initials: "DR",
  },
  {
    quote:
      "Fugi das agências que queriam fazer 5 reuniões só pra aprovar uma cor. Com eles foi direto ao ponto. O botão do WhatsApp na página não para de tocar.",
    name: "Carlos",
    role: "Barbearia",
    initials: "CA",
  },
  {
    quote:
      "Surreal a qualidade. Meu escritório de advocacia agora tem uma presença digital que bate de frente com as maiores bancas da cidade.",
    name: "Mariana",
    role: "Advogada",
    initials: "MA",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function TestimonialsSection() {
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
          className="mb-14 flex flex-col items-center gap-3 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#fafafa" }}>
            O que dizem sobre nossa{" "}
            <span style={{ color: "#007bff" }}>velocidade e entrega:</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={cardVariants}>
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="relative flex flex-col gap-5 rounded-2xl border p-6"
      style={{
        background: "#0b1021",
        borderColor: "rgba(255,255,255,0.07)",
      }}
    >
      {/* Opening quote mark */}
      <span
        className="absolute -top-4 left-6 font-serif text-6xl leading-none select-none"
        style={{ color: "rgba(0,123,255,0.25)" }}
        aria-hidden
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div className="flex gap-1 pt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={13} fill="#007bff" stroke="none" />
        ))}
      </div>

      {/* Quote text */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "#d4d4d8" }}>
        {testimonial.quote}
      </p>

      {/* Divider */}
      <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }} />

      {/* Author row — WhatsApp-style */}
      <div className="flex items-center gap-3">
        {/* Avatar bubble */}
        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
          style={{ background: "rgba(0,123,255,0.2)", border: "1px solid rgba(0,123,255,0.3)" }}
        >
          {testimonial.initials}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold" style={{ color: "#fafafa" }}>
            {testimonial.name}
          </span>
          <span className="text-xs" style={{ color: "#007bff" }}>
            {testimonial.role}
          </span>
        </div>

        {/* WhatsApp verified tick */}
        <div className="ml-auto flex-shrink-0">
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
            <path d="M3 8.5l3.5 3.5 6.5-7" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
