"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Project {
  name: string;
  niche: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    name: "Clínica Bucomax Clinic",
    niche: "Odontologia",
    image: "/projeto-clinica.png",
    url: "https://clinica-seven-mu.vercel.app/",
  },
  {
    name: "Aurum Barbershop",
    niche: "Barbearia",
    image: "/projeto-barbearia.png",
    url: "https://barbearia-corleone-oedyhwbci-carlosbius-projects.vercel.app/",
  },
  {
    name: "Lorena Dias Saúde Estética",
    niche: "Estética",
    image: "/projeto-estetica.png",
    url: "https://sensational-crepe-ea6f2a.netlify.app/",
  },
  {
    name: "Goodman",
    niche: "Advocacia",
    image: "/projeto-advocacia.png",
    url: "https://advocacia-eight.vercel.app/",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function PortfolioSection() {
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
          className="mb-14 flex flex-col items-center gap-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#fafafa" }}>
            Veja o Nível das Nossas Entregas.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
            Aviso: Os projetos abaixo são demonstrações técnicas para atestar nossa qualidade de
            design e conversão. Clique para ver ao vivo.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.url} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block h-[450px] overflow-hidden rounded-xl border",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#000105]"
      )}
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      {/* Scrolling image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.image}
        alt={`Preview do site ${project.name}`}
        className="w-full h-auto translate-y-0 transition-transform duration-[4000ms] ease-in-out group-hover:-translate-y-[70%]"
        draggable={false}
      />

      {/* Bottom overlay gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
        style={{ background: "linear-gradient(to top, rgba(0,1,5,0.95) 0%, transparent 100%)" }}
      />

      {/* Card footer info */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
        <div className="flex flex-col gap-1">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#007bff" }}
          >
            {project.niche}
          </span>
          <span className="text-base font-semibold leading-snug" style={{ color: "#fafafa" }}>
            {project.name}
          </span>
        </div>

        {/* ExternalLink icon with hover glow */}
        <span
          className={cn(
            "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border",
            "transition-all duration-300",
            "group-hover:border-[#007bff] group-hover:shadow-[0_0_14px_rgba(0,123,255,0.5)]"
          )}
          style={{ borderColor: "rgba(255,255,255,0.15)", color: "#a1a1aa" }}
        >
          <ExternalLink
            size={15}
            className="transition-colors duration-300 group-hover:text-[#007bff]"
          />
        </span>
      </div>

      {/* Blue border glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 0 1px rgba(0,123,255,0.35)" }}
      />
    </Link>
  );
}
