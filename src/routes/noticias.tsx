import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { GalleryImpacto } from "@/components/gallery-impacto";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — IBGDH" },
      {
        name: "description",
        content:
          "Acompanhe as notícias, eventos e ações do IBGDH: cursos, palestras, atendimentos cidadãos e iniciativas institucionais em direitos humanos.",
      },
      { property: "og:title", content: "Notícias — IBGDH" },
      {
        property: "og:description",
        content:
          "Acompanhe as notícias, eventos e ações do IBGDH em direitos humanos, educação e inclusão.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NoticiasPage,
});

const NEWS = [
  {
    title: "IBGDH lança nova turma de Formação em Direitos Humanos",
    excerpt:
      "A Escola IBGDH abriu inscrições para a nova turma do curso de formação, com aulas gratuitas e certificação para estudantes, profissionais e lideranças comunitárias.",
    category: "Cursos e Palestras",
    date: "20 de agosto de 2026",
    location: "Rio de Janeiro — RJ",
    image: "/images/galeria-curso-1.jpg",
    alt: "Turma participando de capacitação em direitos humanos em sala comunitária",
    href: "/cursos",
  },
  {
    title: "Mutirão de Orientação Jurídica atende centenas de famílias em Niterói",
    excerpt:
      "Ação cidadã reuniu advogados voluntários para orientar a população sobre BPC/LOAS, direitos previdenciários e acesso à saúde pública.",
    category: "Atendimento Cidadão",
    date: "12 de agosto de 2026",
    location: "Niterói — RJ",
    image: "/images/galeria-atendimento-1.jpg",
    alt: "Advogada voluntária orientando cidadão idoso durante atendimento jurídico",
    href: "/direitos-e-servicos#assessoria-juridica",
  },
  {
    title: "IBGDH participa de audiência pública sobre políticas de inclusão",
    excerpt:
      "O instituto apresentou contribuições técnicas sobre acessibilidade e controle social em audiência com representantes de órgãos públicos e da sociedade civil.",
    category: "Eventos Institucionais",
    date: "28 de julho de 2026",
    location: "Brasília — DF",
    image: "/images/galeria-evento-1.jpg",
    alt: "Mesa de autoridades em audiência pública institucional",
    href: "/instituto/parceiros",
  },
  {
    title: "Palestra BRINVEST leva educação financeira a trabalhadores em São Paulo",
    excerpt:
      "O programa Trabalhador Investidor realizou encontro sobre organização financeira, previdência e primeiros investimentos para dezenas de participantes.",
    category: "Cursos e Palestras",
    date: "15 de julho de 2026",
    location: "São Paulo — SP",
    image: "/images/galeria-curso-2.jpg",
    alt: "Palestrante apresentando conteúdo de educação financeira para plateia de trabalhadores",
    href: "/direitos-e-servicos/projetos-sociais",
  },
  {
    title: "Ação comunitária promove acessibilidade e direitos das pessoas com deficiência",
    excerpt:
      "Em praça pública, equipe do IBGDH ofereceu orientações sobre acessibilidade, inclusão no mercado de trabalho e combate ao capacitismo.",
    category: "Atendimento Cidadão",
    date: "05 de julho de 2026",
    location: "Rio de Janeiro — RJ",
    image: "/images/galeria-atendimento-2.jpg",
    alt: "Voluntários orientando moradores em praça pública, incluindo pessoa em cadeira de rodas",
    href: "/direitos-e-servicos#pessoas-com-deficiencia",
  },
  {
    title: "IBGDH firma parceria com universidades para pesquisa em direitos humanos",
    excerpt:
      "Acordo institucional prevê produção científica conjunta, intercâmbio acadêmico e ampliação do portal de conhecimento do instituto.",
    category: "Eventos Institucionais",
    date: "22 de junho de 2026",
    location: "Rio de Janeiro — RJ",
    image: "/images/galeria-evento-2.jpg",
    alt: "Representantes do IBGDH e de universidade em cerimônia de assinatura de parceria",
    href: "/instituto/parceiros",
  },
];

const [FEATURED, ...GRID] = NEWS;

function NoticiasPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Notícias e Atualidades
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            O que move o IBGDH
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Acompanhe nossas ações, eventos, mutirões de atendimento e iniciativas institucionais
            em defesa dos direitos humanos em todo o Brasil.
          </p>
        </div>
      </section>

      {/* Destaque */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <img
                src={FEATURED.image}
                alt={FEATURED.alt}
                width={1024}
                height={768}
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Destaque
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {FEATURED.category}
                </span>
              </div>
              <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {FEATURED.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{FEATURED.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  {FEATURED.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4" aria-hidden="true" />
                  {FEATURED.location}
                </span>
              </div>
              <div className="mt-6">
                <Link
                  to={FEATURED.href}
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-95 focus-visible:outline-2 focus-visible:outline-ring"
                >
                  Saiba mais
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Grid de notícias */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GRID.map((news) => (
            <article
              key={news.title}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <img
                src={news.image}
                alt={news.alt}
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="flex flex-grow flex-col p-6">
                <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {news.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                  {news.title}
                </h3>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
                  {news.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" aria-hidden="true" />
                    {news.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {news.location}
                  </span>
                </div>
                <Link
                  to={news.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-ring"
                >
                  Ler notícia
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Galeria de Eventos e Impacto Social */}
      <GalleryImpacto />

      {/* CTA final */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="rounded-2xl border border-border bg-card px-6 py-12 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quer participar das nossas próximas ações?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Entre em contato para saber como participar de cursos, mutirões e eventos do IBGDH na
            sua cidade.
          </p>
          <div className="mt-8">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-95 focus-visible:outline-2 focus-visible:outline-ring"
            >
              Fale com o IBGDH
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
