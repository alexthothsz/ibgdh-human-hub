import { createFileRoute } from "@tanstack/react-router";
import {
  Accessibility,
  ArrowRight,
  BookOpen,
  GraduationCap,
  HandHeart,
  Scale,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IBGDH — Instituto Brasil Global de Direitos Humanos" },
      {
        name: "description",
        content:
          "O IBGDH promove a defesa e a efetivação dos direitos humanos no Brasil, com foco em acessibilidade, assessoria jurídica e inclusão de pessoas com deficiência.",
      },
      { property: "og:title", content: "IBGDH — Instituto Brasil Global de Direitos Humanos" },
      {
        property: "og:description",
        content:
          "Defesa, difusão e efetivação dos direitos humanos no Brasil. Conheça nossos projetos, cursos e serviços.",
      },
    ],
  }),
  component: Index,
});

const PILLARS = [
  {
    icon: Accessibility,
    title: "Pessoas com Deficiência",
    description:
      "Atuação dedicada à garantia dos direitos, acessibilidade e plena inclusão das pessoas com deficiência.",
    href: "/direitos-e-servicos/pessoas-com-deficiencia",
  },
  {
    icon: Scale,
    title: "Assessoria Jurídica",
    description:
      "Orientação e suporte jurídico especializado em direitos humanos para quem mais precisa.",
    href: "/direitos-e-servicos/assessoria-juridica",
  },
  {
    icon: HandHeart,
    title: "Projetos Sociais",
    description:
      "Iniciativas comunitárias que transformam realidades e promovem justiça social em todo o Brasil.",
    href: "/direitos-e-servicos/projetos-sociais",
  },
  {
    icon: GraduationCap,
    title: "Escola IBGDH",
    description:
      "Cursos e eventos de formação em direitos humanos para profissionais, estudantes e a sociedade.",
    href: "/escola/cursos",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Instituto Brasil Global de Direitos Humanos
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Direitos humanos para todas as pessoas, sem exceção
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Trabalhamos pela defesa, difusão e efetivação dos direitos humanos no Brasil —
              com acessibilidade, transparência e compromisso com a justiça social.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contato"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-95 focus-visible:outline-2 focus-visible:outline-ring"
              >
                Solicite Orientação
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href="/instituto/quem-somos"
                className="inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-card px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-ring"
              >
                Conheça o Instituto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares de atuação */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nossas frentes de atuação
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Do atendimento jurídico à educação em direitos humanos, cada frente do IBGDH
            existe para garantir dignidade e cidadania.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, description, href }) => (
            <a
              key={href}
              href={href}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md focus-visible:outline-2 focus-visible:outline-ring"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Saiba mais
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Faixa de conhecimento */}
      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <BookOpen className="size-5" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-widest">Conhecimento</span>
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Artigos, pesquisas e publicações
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
              Produção de conhecimento em direitos humanos para informar, formar e transformar.
            </p>
          </div>
          <a
            href="/conhecimento/artigos"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-base font-semibold text-primary transition-all hover:brightness-95 focus-visible:outline-2 focus-visible:outline-ring"
          >
            Acessar conteúdos
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="rounded-2xl border border-border bg-secondary px-6 py-12 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Precisa de orientação em direitos humanos?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Nossa equipe está pronta para ouvir você e indicar os melhores caminhos.
            O atendimento é gratuito e acessível.
          </p>
          <a
            href="/contato"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-95 focus-visible:outline-2 focus-visible:outline-ring"
          >
            Solicite Orientação
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
