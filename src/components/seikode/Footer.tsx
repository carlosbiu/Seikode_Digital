export default function Footer() {
  return (
    <footer
      className="border-t px-6 py-10"
      style={{ background: "#000105", borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        {/* Logotype */}
        <span className="font-mono text-sm font-bold tracking-widest" style={{ color: "#fafafa" }}>
          {"< >"}{" "}
          <span style={{ color: "#007bff" }}>SEIKODE</span>
        </span>

        {/* Copyright */}
        <p className="text-xs leading-relaxed" style={{ color: "#a1a1aa" }}>
          © 2026 Seikode. Todos os direitos reservados.{" "}
          <span style={{ color: "rgba(161,161,170,0.55)" }}>
            Transformando negócios locais.
          </span>
        </p>
      </div>
    </footer>
  );
}
