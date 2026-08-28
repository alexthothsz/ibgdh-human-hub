import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  Building2,
  GraduationCap,
  HeartHandshake,
  Quote,
  Scale,
} from "lucide-react";

import presidenteImgAsset from "../assets/presidente-fabio.jpg.asset.json";
import heroPresidencia from "../../public/images/hero-presidencia.jpg";

const presidenteImg = presidenteImgAsset.url;

export const Route = createFileRoute("/instituto/presidencia")({
  head: () => ({
    meta: [
      { title: "Presidência — IBGDH" },
      {
        name: "description",
        content:
          "Conheça a liderança do IBGDH: trajetória acadêmica, gestão pública e compromisso social do presidente do Instituto Brasil Global de Direitos Humanos.",
      },
      { property: "og:title", content: "Presidência — IBGDH" },
      {
        property: "og:description",
        content:
          "Liderança, rigor científico e compromisso social na condução do Instituto Brasil Global de Direitos Humanos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:image",
        content: "https://ibgdh-human-hub.lovable.app/__l5e/assets-v1/2c5727a8-f304-4ecb-8040-24024fcad4c5/presidente-fabio.jpg",
      },
      {
        name: "twitter:image",
        content: "https://ibgdh-human-hub.lovable.app/__l5e/assets-v1/2c5727a8-f304-4ecb-8040-24024fcad4c5/presidente-fabio.jpg",
      },
    ],
  }),
  component: PresidenciaPage,
});

const PILARES = [
  {
    icon: GraduationCap,
    title: "Formação & Pesquisa",
    items: [
      "Doutorado na Universidade de Salamanca",
      "Mestrado na Universidade Portucalense",
      "Pós-graduação na PUC-Rio",
      "Pesquisador FAPERJ",
    ],
  },
  {
    icon: Building2,
    title: "Gestão Pública",
    items: [
      "Ex-Subsecretário-Geral da Casa Civil/RJ",
      "GSI-RJ e PGE-RJ",
      "Ex-Secretário de Meio Ambiente de Búzios",
      "Procurador Municipal",
    ],
  },
  {
    icon: Scale,
    title: "Advocacia & Entidades",
    items: [
      "Membro Efetivo do IAB",
      "Escritório Evaristo de Moraes",
      "Escritório Villemor Amaral",
      "Fundação Bio-Rio",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Direitos Humanos & Impacto",
    items: [
      "Advogado da EDUCAFRO Brasil",
      "Fundador e Presidente do IBGDH",
      "Atuação em inclusão e cidadania",
      "Projeto BRINVEST e educação financeira",
    ],
  },
];

function PresidenciaPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section
        className="relative flex min-h-[420px] items-center justify-center bg-cover bg-center text-center"
        style={{ backgroundImage: `url(${heroPresidencia})` }}
        aria-label="Apresentação da Presidência"
      >
        <div className="absolute inset-0 bg-primary/80" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
            Instituto Brasil Global de Direitos Humanos
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Liderança, Rigor Científico e Compromisso Social
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/85">
            Conheça a trajetória, os pilares acadêmicos e a visão institucional
            da presidência do IBGDH.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contato"
              className="rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-95 focus-visible:outline-2 focus-visible:outline-ring"
            >
              Solicite Orientação
            </Link>
            <a
              href="#trajetoria"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-base font-medium text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10 focus-visible:outline-2 focus-visible:outline-ring"
            >
              <ArrowDown className="size-4" aria-hidden="true" />
              Conheça a trajetória
            </a>
          </div>
        </div>
      </section>

      {/* Citação Principal */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="relative rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-12">
          <Quote
            className="absolute left-6 top-6 size-10 text-primary/20 sm:left-10 sm:top-10 sm:size-14"
            aria-hidden="true"
          />
          <blockquote className="relative z-10 pt-8 text-center">
            <p className="text-xl font-medium leading-relaxed text-card-foreground sm:text-2xl">
              “O Estado Social de Direito só se realiza plenamente quando o
              conhecimento científico e a justiça alcançam a vida de cada
              cidadão.”
            </p>
            <footer className="mt-8">
              <p className="text-base font-semibold text-primary">
                Dr. Fábio Jorge Dantas de Sousa
              </p>
              <p className="text-sm text-muted-foreground">
                Presidente do IBGDH
              </p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Trajetória & Perfil */}
      <section
        id="trajetoria"
        className="bg-muted/40 px-4 py-16 sm:px-6 lg:py-24"
        aria-labelledby="trajetoria-heading"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Coluna Esquerda — Foto */}
          <div className="flex flex-col items-start">
            <div className="w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <img
                src={presidenteImg}
                alt="Retrato oficial do Dr. Alexandre Silva de Souza, presidente do IBGDH"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="border-t border-border p-6">
                <p className="text-lg font-bold text-foreground">
                  Dr. Fábio Jorge Dantas de Sousa
                </p>
                <p className="text-sm font-medium text-primary">
                  Presidente do IBGDH | Doutorando em Direito (Salamanca) |
                  Membro Efetivo do IAB
                </p>
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-95 focus-visible:outline-2 focus-visible:outline-ring"
                onClick={(e) => {
                  e.preventDefault();
                  alert(
                    "O currículo completo será disponibilizado em breve. Entre em contato conosco para mais informações.",
                  );
                }}
              >
                <ArrowDown className="size-4" aria-hidden="true" />
                Baixar Currículo Completo
              </a>
              <Link
                to="/contato"
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-primary bg-transparent px-6 py-3 text-base font-semibold text-primary shadow-sm transition-all hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-ring"
              >
                Solicitar Agenda Institucional
              </Link>
            </div>
          </div>

          {/* Coluna Direita — Texto */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Perfil Institucional
            </p>
            <h2
              id="trajetoria-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Conheça a Trajetória
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
              <p>
                A formação acadêmica do presidente do IBGDH consolidou-se ao
                longo de mais de duas décadas dedicadas ao estudo aprofundado do
                Direito Constitucional, da Teoria dos Direitos Humanos e da
                relação entre Estado, cidadania e políticas públicas. Doutorando
                em Direito pela Universidade de Salamanca, mestre pela
                Universidade Portucalense e pós-graduado pela PUC-Rio, construiu
                uma sólida trajetória que une a rigorosidade da pesquisa
                científica à prática transformadora da gestão pública e do
                advocacy social.
              </p>
              <p>
                Na gestão pública, acumulou experiências estratégicas como
                Subsecretário-Geral da Casa Civil do Estado do Rio de Janeiro,
                integrando o Gabinete de Segurança Institucional (GSI-RJ) e a
                Procuradoria-Geral do Estado (PGE-RJ). Também exerceu o cargo de
                Secretário de Meio Ambiente de Búzios e atuou como Procurador
                Municipal, desenvolvendo uma visão integrada entre direito,
                políticas públicas e desenvolvimento sustentável voltado ao
                interesse coletivo.
              </p>
              <p>
                Na advocacia e na sociedade civil, é Membro Efetivo do Instituto
                dos Advogados Brasileiros (IAB), passou por escritórios de
                referência como Evaristo de Moraes e Villemor Amaral, e colaborou
                com a Fundação Bio-Rio. Como advogado da EDUCAFRO Brasil e
                pesquisador da FAPERJ, dedicou-se à inclusão social, ao acesso à
                justiça e à cidadania econômica. Essa trajetória culminou na
                fundação e condução do IBGDH, onde articula educação, pesquisa,
                assessoria jurídica e projetos sociais para ampliar o acesso à
                justiça e fortalecer o controle social no Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares da Trajetória */}
      <section
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24"
        aria-labelledby="pilares-heading"
      >
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Pilares da Trajetória
          </p>
          <h2
            id="pilares-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Formação, Gestão e Impacto Social
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Quatro dimensões que estruturam a atuação do presidente do IBGDH e
            guiam a missão institucional.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILARES.map((pilar) => {
            const Icon = pilar.icon;
            return (
              <div
                key={pilar.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-card-foreground">
                  {pilar.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {pilar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-primary px-4 py-14 text-primary-foreground sm:px-6 lg:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Quer conhecer mais sobre o IBGDH?
          </h2>
          <p className="mt-3 text-primary-foreground/85">
            Entre em contato e descubra como o Instituto pode colaborar com
            você, sua organização ou sua comunidade.
          </p>
          <Link
            to="/contato"
            className="mt-6 inline-flex rounded-lg bg-accent px-6 py-3 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-95 focus-visible:outline-2 focus-visible:outline-ring"
          >
            Fale com a Presidência
          </Link>
        </div>
      </section>
    </main>
  );
}
