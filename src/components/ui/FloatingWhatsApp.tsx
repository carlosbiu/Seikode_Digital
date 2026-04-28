"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5527998346547?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20gratuito%20para%20meu%20neg%C3%B3cio.";

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
        <svg viewBox="0 0 24 24" fill="white" className="relative z-10 w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
