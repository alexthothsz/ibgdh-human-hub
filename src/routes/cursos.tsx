import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Laptop, MapPin, Users } from "lucide-react";

export const Route = createFileRoute("/cursos")({
  head: () => ({
    meta: [
      { title: "Escola IBGDH — Cursos e Capacitações" },
      {
        name: "description",
        content:
          "Cursos e capacitações da Escola IBGDH em direitos humanos, educação financeira para trabalhadores e gestão de organizações sociais.",
      },
      { property: "og:title", content: "Escola IBGDH — Cursos e Capacitações" },
      {
        property: "og:description",
        content:
          "Formação cidadã, direitos humanos e educação financeira: conheça os cursos EAD e presenciais da Escola IBGDH.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EscolaIbgdh,
});

type Course = {
  title: string;
  description: string;
  workload: string;
  audience: string;
  format: "EAD" | "Presencial" | "Híbrido";
  cta: "Saiba Mais" | "Inscreva-se";
};

const COURSES: Course[] = [
  {
    title: "Formação em Direitos Humanos",
    description:
      "Fundamentos, marcos normativos e aplicação prática dos direitos humanos no cotidiano comunitário e institucional.",
    workload: "40 horas",
    audience: "Estudantes, lideranças comunitárias e profissionais do direito",
    format: "EAD",
    cta: "Inscreva-se",
  },
  {
    title: "Educação Financeira para Trabalhadores",
    description:
      "Programa do BRINVEST: orçamento familiar, uso consciente do crédito e primeiros passos em investimentos.",
    workload: "24 horas",
    audience: "Trabalhadores formais e informais e suas famílias",
    format: "EAD",
    cta: "Inscreva-se",
  },
  {
    title: "Capacitação para Organizações Sociais",
    description:
      "Governança, prestação de contas, captação de recursos e gestão de projetos para OSCs e associações.",
    workload: "32 horas",
    audience: "Gestores e equipes de OSCs, associações e coletivos",
    format: "Híbrido",
    cta: "Saiba Mais",
  },
  {
    title: "Direitos das Pessoas com Deficiência na Prática",
    description:
      "BPC/LOAS, acessibilidade, Lei de Cotas e enfrentamento ao capacitismo, com estudos de caso reais.",
    workload: "20 horas",
    audience: "Pessoas com deficiência, familiares e profissionais de atendimento",
    format: "EAD",
    cta: "Inscreva-se",
  },
  {
    title: "Assessoria Jurídica Popular",
    description:
      "Formação para atuação em orientação de comunidades no acesso a direitos previdenciários, sociais e de saúde.",
    workload: "60 horas",
    audience: "Estudantes de Direito, advogados e agentes comunitários",
    format: "Presencial",
    cta: "Saiba Mais",
  },
  {
    title: "Controle Social e Políticas Públicas",
    description:
      "Participação em conselhos, conferências e mecanismos de fiscalização das políticas públicas.",
    workload: "16 horas",
    audience: "Conselheiros, lideranças sociais e servidores públicos",
    format: "EAD",
    cta: "Saiba Mais",
  },
];

function EscolaIbgdh() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Escola IBGDH
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cursos e capacitações para transformar conhecimento em direitos
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Formações acessíveis, práticas e voltadas ao impacto social — para cidadãos,
            profissionais e organizações que atuam na defesa de direitos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Cursos disponíveis
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => {
            const FormatIcon = course.format === "Presencial" ? MapPin : Laptop;
            return (
              <article
                key={course.title}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                  {course.format}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{course.description}</p>

                <dl className="mt-5 space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <dt className="sr-only">Carga horária</dt>
                    <dd className="text-foreground/80">{course.workload}</dd>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <dt className="sr-only">Público-alvo</dt>
                    <dd className="text-foreground/80">{course.audience}</dd>
                  </div>
                  <div className="flex items-start gap-2">
                    <FormatIcon
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <dt className="sr-only">Modalidade</dt>
                    <dd className="text-foreground/80">{course.format}</dd>
                  </div>
                </dl>

                <Link
                  to="/contato"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-95"
                  aria-label={`${course.cta} — ${course.title}`}
                >
                  {course.cta}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Quer levar uma capacitação para sua organização?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Desenvolvemos turmas fechadas e programas sob medida para empresas, escolas,
            prefeituras e organizações da sociedade civil.
          </p>
          <Link
            to="/contato"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110"
          >
            Falar com a Escola IBGDH
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
