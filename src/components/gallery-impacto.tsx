import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "Cursos e Palestras" | "Atendimento Cidadão" | "Eventos Institucionais";

const FILTERS: Array<"Todos" | Category> = [
  "Todos",
  "Cursos e Palestras",
  "Atendimento Cidadão",
  "Eventos Institucionais",
];

const ITEMS: Array<{
  src: string;
  caption: string;
  category: Category;
  alt: string;
}> = [
  {
    src: "/images/galeria-curso-1.jpg",
    caption: "Capacitação em Direitos Humanos — Rio de Janeiro, 2026",
    category: "Cursos e Palestras",
    alt: "Turma participando de capacitação em direitos humanos em sala comunitária",
  },
  {
    src: "/images/galeria-atendimento-1.jpg",
    caption: "Orientação Jurídica Cidadã — Niterói, 2026",
    category: "Atendimento Cidadão",
    alt: "Advogada voluntária orientando cidadão idoso durante atendimento jurídico",
  },
  {
    src: "/images/galeria-evento-1.jpg",
    caption: "Audiência Pública sobre Políticas de Inclusão — Brasília, 2025",
    category: "Eventos Institucionais",
    alt: "Mesa de autoridades em audiência pública institucional",
  },
  {
    src: "/images/galeria-curso-2.jpg",
    caption: "Palestra BRINVEST: Educação Financeira para Trabalhadores — São Paulo, 2026",
    category: "Cursos e Palestras",
    alt: "Palestrante apresentando conteúdo de educação financeira para plateia de trabalhadores",
  },
  {
    src: "/images/galeria-atendimento-2.jpg",
    caption: "Ação Comunitária de Acessibilidade e Direitos das PCDs — Rio de Janeiro, 2026",
    category: "Atendimento Cidadão",
    alt: "Voluntários orientando moradores em praça pública, incluindo pessoa em cadeira de rodas",
  },
  {
    src: "/images/galeria-evento-2.jpg",
    caption: "Assinatura de Parceria Institucional com Universidades — Rio de Janeiro, 2025",
    category: "Eventos Institucionais",
    alt: "Representantes do IBGDH e de universidade em cerimônia de assinatura de parceria",
  },
];

export function GalleryImpacto() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Todos");
  const [selected, setSelected] = useState<number | null>(null);

  const visible = ITEMS.filter((item) => filter === "Todos" || item.category === filter);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section className="border-y border-border bg-background" aria-labelledby="galeria-titulo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Impacto Social
          </p>
          <h2
            id="galeria-titulo"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            O IBGDH em Ação
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Registros da nossa atuação em cursos, palestras, orientações jurídicas e ações
            comunitárias.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filtrar galeria por categoria"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-ring",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:bg-secondary",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setSelected(ITEMS.indexOf(item))}
                className="block w-full focus-visible:outline-2 focus-visible:outline-ring"
                aria-label={`Ampliar imagem: ${item.caption}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                />
              </button>
              <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {selected !== null && ITEMS[selected] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={ITEMS[selected]!.caption}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-card shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Fechar imagem ampliada"
              className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-full bg-foreground/70 text-background transition-colors hover:bg-foreground/90 focus-visible:outline-2 focus-visible:outline-ring"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            <img
              src={ITEMS[selected].src}
              alt={ITEMS[selected].alt}
              width={1024}
              height={768}
              className="max-h-[75vh] w-full object-contain bg-foreground/5"
            />
            <p className="p-4 text-center text-sm font-medium text-foreground sm:text-base">
              {ITEMS[selected].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
