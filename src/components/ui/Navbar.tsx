"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/5527997742494?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento.";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 z-50 w-full border-b"
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          background: "rgba(0,1,5,0.75)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <a href="#inicio" className="flex-shrink-0 focus-visible:outline-none">
            <Image
              src="/logo-seikode.svg"
              alt="Seikode"
              width={140}
              height={36}
              priority
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 hover:text-white",
                    "focus-visible:outline-none focus-visible:underline"
                  )}
                  style={{ color: "#a1a1aa" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden md:inline-flex items-center rounded-full border px-5 py-2 text-sm font-semibold",
              "transition-all duration-200",
              "hover:border-[#007bff] hover:bg-[#007bff] hover:text-white",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bff]"
            )}
            style={{ borderColor: "rgba(255,255,255,0.15)", color: "#fafafa" }}
          >
            Fazer Orçamento
          </a>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center rounded-md p-2 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bff]"
            style={{ color: "#a1a1aa" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t md:hidden"
              style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(0,1,5,0.95)" }}
            >
              <ul className="flex flex-col px-6 py-4 gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-white/5 hover:text-white"
                      style={{ color: "#a1a1aa" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-full border px-5 py-2.5 text-center text-sm font-semibold text-white"
                    style={{ background: "#007bff", borderColor: "#007bff" }}
                  >
                    Fazer Orçamento
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer so content doesn't hide behind the fixed bar */}
      <div className="h-16" aria-hidden />
    </>
  );
}
