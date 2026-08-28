import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/artigos")({
  head: () => ({
    meta: [
      { title: "Portal de Conhecimento — Artigos do IBGDH" },
      {
        name: "description",
        content:
          "Artigos, análises e conteúdos em linguagem simples sobre direitos humanos, PCDs, previdência, saúde, cidadania econômica e educação.",
      },
      { property: "og:title", content: "Portal de Conhecimento — IBGDH" },
      {
        property: "og:description",
        content:
          "Conteúdos do IBGDH sobre direitos humanos, inclusão, previdência, saúde e cidadania econômica — inclusive em linguagem simples.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortalConhecimento,
});

const CATEGORIES = [
  "Todos",
  "Direitos Humanos",
  "PCDs",
  "Previdência e Saúde",
  "Cidadania Econômica",
  "Educação",
  "Linguagem Simples",
] as const;

type Category = (typeof CATEGORIES)[number];

type Article = {
  title: string;
  excerpt: string;
  category: Exclude<Category, "Todos">;
  readingTime: number;
  image: string;
  imageAlt: string;
};

const ARTICLES: Article[] = [
  {
    title: "Controle social e políticas públicas de direitos humanos",
    excerpt:
      "Como a participação da sociedade civil qualifica a formulação e a fiscalização das políticas públicas no Brasil.",
    category: "Direitos Humanos",
    readingTime: 7,
    image: "/images/artigo-direitos-humanos.jpg",
    imageAlt: "Pessoas diversas reunidas em audiência pública com documentos em mãos",
  },
  {
    title: "Acessibilidade como direito fundamental",
    excerpt:
      "Acessibilidade vai além de rampas e elevadores: é condição essencial para o exercício pleno da cidadania.",
    category: "PCDs",
    readingTime: 6,
    image: "/images/pcd-banner.jpg",
    imageAlt: "Ambiente urbano acessível com pessoas com deficiência circulando",
  },
  {
    title: "BPC/LOAS: quem tem direito e como solicitar",
    excerpt:
      "Requisitos, documentos e etapas do benefício assistencial para pessoas com deficiência e pessoas idosas.",
    category: "Previdência e Saúde",
    readingTime: 8,
    image: "/images/artigo-previdencia.jpg",
    imageAlt: "Pessoa idosa sendo atendida em balcão de atendimento previdenciário",
  },
  {
    title: "Educação financeira para inclusão produtiva",
    excerpt:
      "Como o conhecimento financeiro transforma a realidade de trabalhadores e amplia autonomia econômica das famílias.",
    category: "Cidadania Econômica",
    readingTime: 5,
    image: "/images/brinvest.jpg",
    imageAlt: "Trabalhador organizando finanças pessoais com gráficos de crescimento",
  },
  {
    title: "Formação cidadã: educar para garantir direitos",
    excerpt:
      "A educação em direitos humanos como estratégia de prevenção de violações e de fortalecimento comunitário.",
    category: "Educação",
    readingTime: 6,
    image: "/images/artigo-educacao.jpg",
    imageAlt: "Sala de aula com pessoas adultas participando de curso de formação",
  },
  {
    title: "Seus direitos explicados de forma simples",
    excerpt:
      "Um guia direto, sem juridiquês, com as respostas mais buscadas por quem precisa acessar direitos básicos.",
    category: "Linguagem Simples",
    readingTime: 4,
    image: "/images/artigo-linguagem-simples.jpg",
    imageAlt: "Voluntários explicando um guia impresso de direitos para cidadãos",
  },
  {
    title: "Mercado de trabalho e a Lei de Cotas",
    excerpt:
      "O que empresas e trabalhadores precisam saber sobre a contratação de pessoas com deficiência.",
    category: "PCDs",
    readingTime: 7,
    image: "/images/quem-somos.jpg",
    imageAlt: "Equipe diversa e inclusiva trabalhando em ambiente corporativo",
  },
  {
    title: "Acesso a medicamentos e tratamentos pelo SUS",
    excerpt:
      "Caminhos administrativos e judiciais para garantir tratamentos negados pelo sistema de saúde.",
    category: "Previdência e Saúde",
    readingTime: 9,
    image: "/images/artigo-previdencia.jpg",
    imageAlt: "Atendimento de saúde com profissional orientando paciente",
  },
];

const SIMPLE_ANSWERS = [
  {
    question: "O que é o BPC/LOAS?",
    answer:
      "É um benefício de um salário mínimo por mês para pessoas com deficiência ou com 65 anos ou mais que têm baixa renda familiar. Não precisa ter contribuído para o INSS.",
  },
  {
    question: "Posso trabalhar e receber aposentadoria por invalidez?",
    answer:
      "Não. Se você voltar a trabalhar, o benefício por incapacidade permanente é cancelado. Existem outras opções — procure orientação antes de decidir.",
  },
  {
    question: "A empresa pode me demitir por ter deficiência?",
    answer:
      "Não pode demitir por causa da deficiência. Em empresas obrigadas pela Lei de Cotas, a dispensa só é válida se houver contratação de outra pessoa com deficiência.",
  },
  {
    question: "O SUS negou meu remédio. E agora?",
    answer:
      "Peça a negativa por escrito e guarde o laudo médico. Com esses documentos é possível recorrer administrativamente ou buscar a via judicial.",
  },
  {
    question: "O que é capacitismo?",
    answer:
      "É a discriminação contra pessoas com deficiência, tratando-as como incapazes. É crime e pode ser denunciado pelo Disque 100.",
  },
  {
    question: "Preciso de advogado para pedir o BPC?",
    answer:
      "Não para o pedido inicial, que pode ser feito pelo Meu INSS. Se houver negativa, a orientação jurídica ajuda a recorrer com mais segurança.",
  },
];

function PortalConhecimento() {
  const [active, setActive] = useState<Category>("Todos");

  const filtered = useMemo(
    () => (active === "Todos" ? ARTICLES : ARTICLES.filter((a) => a.category === active)),
    [active],
  );

  return (
    <div className="bg-background">
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Portal de Conhecimento
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Conhecimento que transforma direitos em realidade
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Artigos, análises e conteúdos em linguagem simples produzidos pelo IBGDH sobre
            direitos humanos, inclusão, previdência, saúde e cidadania econômica.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filtrar artigos por categoria"
        >
          {CATEGORIES.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-ring ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground/80 hover:bg-secondary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <article
              key={article.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={article.image}
                alt={article.imageAlt}
                loading="lazy"
                width={1024}
                height={640}
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                  {article.category}
                </span>
                <h2 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                  {article.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="size-4" aria-hidden="true" />
                  <span>{article.readingTime} min de leitura</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-sm text-muted-foreground">
            Ainda não há artigos publicados nesta categoria.
          </p>
        )}
      </section>

      <section
        id="linguagem-simples"
        className="border-t border-border bg-secondary/40 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <HelpCircle className="mt-1 size-6 text-primary" aria-hidden="true" />
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Direitos em Linguagem Simples
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Respostas rápidas e sem juridiquês para as dúvidas mais comuns sobre direitos
                cidadãos.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SIMPLE_ANSWERS.map((item) => (
              <div key={item.question} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground">{item.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/direitos-e-servicos"
              hash="formulario-orientacao"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-95"
            >
              Solicite orientação cidadã
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
