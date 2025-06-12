import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground antialiased relative overflow-hidden">
      {/* Plano cartesiano decorativo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Eixos principais */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-30"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-30"></div>
        {/* Linhas secundárias */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-muted to-transparent opacity-10"
            style={{ top: `${(i + 1) * 12.5}%` }}
          ></div>
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-muted to-transparent opacity-10"
            style={{ left: `${(i + 1) * 12.5}%` }}
          ></div>
        ))}
      </div>
      <div className="z-10 flex flex-col items-center px-6 py-12 rounded-xl bg-popover/50 backdrop-blur-md shadow-2xl border">
        <h1 className="text-8xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary-foreground drop-shadow-2xl mb-2 tracking-tight select-none">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-foreground tracking-tight">
          Página não encontrada
        </h2>
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 text-lg md:text-xl font-mono"></div>
          <div className="mt-2 text-muted-foreground text-center text-base md:text-lg max-w-md">
            O ponto que você tentou acessar não pertence ao conjunto de páginas
            da Axisor.
          </div>
        </div>
        <Link
          to="/"
          className="px-7 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg hover:scale-105 transition-transform text-lg"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}
