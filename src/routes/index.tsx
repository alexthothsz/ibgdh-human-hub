import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  HeartHandshake,
  Scale,
  Search,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IBGDH — Instituto Brasil Global de Direitos Humanos" },
      {
        name: "description",
        content:
          "O IBGDH atua na promoção da cidadania, defesa de direitos e desenvolvimento humano por meio de educação, pesquisa, assistência jurídica e projetos sociais.",
      },
      { property: "og:title", content: "IBGDH — Instituto Brasil Global de Direitos Humanos" },
      {
        property: "og:description",
        content:
          "Direitos humanos na prática. Justiça, inclusão e transformação social. Conheça o IBGDH e solicite atendimento.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PILLARS = [
  {
    icon: Scale,
    title: "Justiça e Direitos",
    description:
      "Assistência jurídica e acesso à justiça para garantir que todos tenham seus direitos respeitados.",
    href: "/direitos-e-servicos#assessoria-juridica",
  },
  {
    icon: GraduationCap,
    title: "Educação e Formação",
    description:
      "Cursos, capacitação e formação cidadã para fortalecer uma sociedade mais consciente de seus direitos.",
    href: "/cursos",
  },
  {
    icon: Search,
    title: "Pesquisa e Conhecimento",
    description:
      "Produção científica e estudos técnicos que subsidiam políticas públicas e ações em direitos humanos.",
    href: "/artigos",
  },
  {
    icon: HeartHandshake,
    title: "Inclusão e Diversidade",
    description:
      "Defesa dos direitos das pessoas com deficiência e grupos vulneráveis para uma sociedade mais inclusiva.",
    href: "/direitos-e-servicos#pessoas-com-deficiencia",
  },
  {
    icon: TrendingUp,
    title: "Cidadania Econômica",
    description:
      "Educação financeira e inclusão produtiva que transformam trabalhadores em protagonistas da própria economia.",
    href: "/direitos-e-servicos/projetos-sociais",
  },
  {
    icon: Building2,
    title: "Fortalecimento Institucional",
    description:
      "Atuação em políticas públicas e controle social para fortalecer instituições e ampliar o impacto social.",
    href: "/instituto/parceiros",
  },
];

const ARTICLES = [
  {
    title: "Acessibilidade como direito fundamental",
    excerpt:
      "Entenda como a acessibilidade vai além de rampas e elevadores e se configura como condição essencial para a cidadania.",
    category: "Direitos das PCDs",
    href: "/artigos",
  },
  {
    title: "Educação financeira para inclusão produtiva",
    excerpt:
      "Como a educação financeira pode transformar a realidade de trabalhadores e suas famílias, promovendo autonomia.",
    category: "Cidadania Econômica",
    href: "/artigos",
  },
  {
    title: "Controle social e políticas públicas",
    excerpt:
      "A participação da sociedade na formulação, implementação e fiscalização de políticas públicas de direitos humanos.",
    category: "Fortalecimento Institucional",
    href: "/artigos",
  },
];

function Button({
  to,
  href,
  variant = "primary",
  children,
}: {
  to?: string;
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition-all focus-visible:outline-2 focus-visible:outline-ring";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-foreground shadow-sm hover:brightness-95"
      : "border border-primary/25 bg-card text-primary hover:bg-secondary";

  if (to) {
    return (
      <Link to={to} className={`${base} ${styles}`}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

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
              Direitos Humanos na prática. Justiça, inclusão e transformação social.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              O IBGDH atua na promoção da cidadania, defesa de direitos e desenvolvimento humano por
              meio de educação, pesquisa, assistência jurídica e projetos sociais.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contato" variant="primary">
                Solicite Atendimento
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button to="/instituto/quem-somos" variant="secondary">
                Conheça o IBGDH
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Quem Somos</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Uma instituição comprometida com a dignidade humana
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              O Instituto Brasil Global de Direitos Humanos nasceu para transformar realidades.
              Reunimos juristas, educadores, pesquisadores e ativistas em uma rede que promove
              justiça, inclusão e desenvolvimento humano em todo o Brasil.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Atuamos com transparência, acessibilidade e impacto social mensurável, garantindo que
              direitos sejam mais do que letras escritas: sejam prática cotidiana.
            </p>
            <div className="mt-8">
              <Button to="/instituto/quem-somos" variant="secondary">
                Saiba mais sobre o Instituto
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="/images/quem-somos.jpg"
              alt="Ilustração de um grupo diverso de pessoas representando inclusão e direitos humanos"
              width={1024}
              height={768}
              loading="lazy"
              className="rounded-2xl border border-border bg-card shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Pilares de Atuação */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Pilares de Atuação
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Seis frentes para transformar a sociedade
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Do atendimento jurídico ao fortalecimento institucional, cada pilar do IBGDH existe
              para garantir dignidade, cidadania e justiça social.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, description, href }) => (
              <Link
                key={href}
                to={href}
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projeto em Destaque */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <img
                src="/images/brinvest.jpg"
                alt="Ilustração de trabalhador segurando moedas com planta crescendo, simbolizando educação financeira e investimento"
                width={1024}
                height={768}
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <span className="w-fit rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent-foreground">
                Projeto em Destaque
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                BRINVEST — Trabalhador Investidor
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                O BRINVEST é um programa de educação financeira e inclusão produtiva que capacita
                trabalhadores a compreenderem e utilizarem ferramentas econômicas para conquistar
                autonomia, segurança e novas oportunidades.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Através de oficinas, mentorias e conteúdos acessíveis, transformamos a relação das
                pessoas com o dinheiro, promovendo cidadania econômica e dignidade.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/direitos-e-servicos/projetos-sociais" variant="primary">
                  Conheça o BRINVEST
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button to="/contato" variant="secondary">
                  Quero Participar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Últimos Artigos */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Conhecimento
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Últimos Artigos
              </h2>
            </div>
            <Button to="/artigos" variant="secondary">
              Ver Portal de Conhecimento
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map(({ title, excerpt, category, href }) => (
              <article
                key={href}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {category}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  <Link to={href} className="hover:text-primary focus-visible:outline-2 focus-visible:outline-ring">
                    {title}
                  </Link>
                </h3>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
                  {excerpt}
                </p>
                <Link
                  to={href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-ring"
                >
                  Ler artigo
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="rounded-2xl border border-border bg-card px-6 py-12 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Precisa de orientação em direitos humanos?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Nossa equipe está pronta para ouvir você e indicar os melhores caminhos. O atendimento é
            gratuito e acessível.
          </p>
          <Button to="/contato" variant="primary">
            Solicite Orientação
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </section>
    </>
  );
}
