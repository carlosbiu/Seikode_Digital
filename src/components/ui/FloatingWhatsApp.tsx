"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5527997742494?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20gratuito%20para%20meu%20neg%C3%B3cio.";

export default function FloatingWhatsApp() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setTooltipVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTooltipVisible(false);
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip balloon */}
      <AnimatePresence>
        {tooltipVisible && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-64 rounded-xl bg-white p-4 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={handleDismiss}
              aria-label="Fechar"
              className="absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full transition-colors hover:bg-gray-100 text-gray-400 hover:text-gray-600 focus-visible:outline-none"
            >
              <X size={12} />
            </button>

            <p className="pr-5 text-sm font-bold leading-snug text-gray-900">
              Fale com a Equipe Seikode 💬
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
              Tire suas dúvidas ou agende sua avaliação diretamente pelo WhatsApp.
            </p>

            {/* Arrow pointing down */}
            <div
              className="absolute -bottom-2 right-7 h-4 w-4 rotate-45 bg-white"
              style={{ boxShadow: "2px 2px 4px rgba(0,0,0,0.08)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Seikode pelo WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        style={{ background: "#25D366" }}
        onClick={() => setTooltipVisible(false)}
      >
        {/* Ping ring */}
        <span
          className="absolute inset-0 animate-ping rounded-full opacity-40"
          style={{ background: "#25D366" }}
        />
        <MessageCircle size={26} className="relative z-10" />
      </a>
    </div>
  );
}
