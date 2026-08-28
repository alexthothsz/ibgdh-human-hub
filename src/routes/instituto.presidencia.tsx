import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, Quote } from "lucide-react";

import presidenteImg from "../../public/images/presidente.jpg";
import heroPresidencia from "../../public/images/hero-presidencia.jpg";

export const Route = createFileRoute("/instituto/presidencia")({
  head: () => ({
    meta: [
      { title: "Presidência — IBGDH" },
      {
        name: "description",
        content:
          "Conheça a liderança do IBGDH: trajetória, compromisso acadêmico e visão institucional da presidência do Instituto Brasil Global de Direitos Humanos.",
      },
      { property: "og:title", content: "Presidência — IBGDH" },
      {
        property: "og:description",
        content:
          "Liderança, compromisso e transformação social na condução do Instituto Brasil Global de Direitos Humanos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:image",
        content: "https://ibgdh-human-hub.lovable.app/images/presidente.jpg",
      },
      {
        name: "twitter:image",
        content: "https://ibgdh-human-hub.lovable.app/images/presidente.jpg",
      },
    ],
  }),
  component: PresidenciaPage,
});

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
            Liderança, Compromisso e Transformação Social
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

      {/* Mensagem do Presidente */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="relative rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-12">
          <Quote
            className="absolute left-6 top-6 size-10 text-primary/20 sm:left-10 sm:top-10 sm:size-14"
            aria-hidden="true"
          />
          <blockquote className="relative z-10 pt-8 text-center">
            <p className="text-xl font-medium leading-relaxed text-card-foreground sm:text-2xl">
              “O IBGDH nasceu do sonho de aproximar o Direito e os Direitos
              Humanos da vida real das pessoas. Nossa missão é transformar
              conhecimento em ação, garantindo que cada cidadão — especialmente
              aqueles em situação de vulnerabilidade — tenha voz, acesso à
              justiça e condições de exercer plenamente sua cidadania.”
            </p>
            <footer className="mt-8">
              <p className="text-base font-semibold text-primary">
                Dr. Alexandre Silva de Souza
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
                  Dr. Alexandre Silva de Souza
                </p>
                <p className="text-sm font-medium text-primary">
                  Presidente do IBGDH
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Advogado, pesquisador e ativista em Direitos Humanos
                </p>
              </div>
            </div>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-95 focus-visible:outline-2 focus-visible:outline-ring"
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
                relação entre Estado, cidadania e políticas públicas. Graduado em
                Direito, mestre e doutor em áreas afins, construiu uma sólida
                trajetória que une a rigorosidade da pesquisa científica à
                prática transformadora da assistência jurídica e do advocacy
                social.
              </p>
              <p>
                Em sua atuação profissional, destaca-se a coordenação de
                projetos de inclusão e fortalecimento institucional voltados a
                pessoas com deficiência, trabalhadores em situação de
                vulnerabilidade econômica e organizações da sociedade civil. A
                experiência em assessoria jurídica previdenciária, saúde e
                assistência social permitiu desenvolver uma metodologia própria
                de atendimento, pautada na escuta, na dignidade humana e na
                busca efetiva de soluções.
              </p>
              <p>
                O compromisso social na fundação e condução do IBGDH reflete a
                convicção de que os direitos humanos só se realizam quando
                chegam ao cotidiano das famílias brasileiras. Sob sua
                liderança, o Instituto Brasil Global de Direitos Humanos
                articula educação, pesquisa, assistência técnica e projetos
                sociais para ampliar o acesso à justiça, promover a cidadania
                econômica e fortalecer o controle social, sempre com o olhar
                atento às demandas de quem mais precisa.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-primary">20+</p>
                <p className="text-sm text-muted-foreground">
                  Anos de experiência
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-primary">Doutor</p>
                <p className="text-sm text-muted-foreground">
                  Formação acadêmica
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
                <p className="text-2xl font-bold text-primary">BR</p>
                <p className="text-sm text-muted-foreground">Atuação nacional</p>
              </div>
            </div>
          </div>
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
