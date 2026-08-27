import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — IBGDH | Fale com o Instituto" },
      {
        name: "description",
        content:
          "Fale com o IBGDH: canais de atendimento, e-mail, telefone e endereço para orientação cidadã, parcerias e imprensa.",
      },
      { property: "og:title", content: "Contato — IBGDH" },
      {
        property: "og:description",
        content:
          "Canais oficiais do Instituto Brasil Global de Direitos Humanos para orientação, parcerias e imprensa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContatoPage,
});

const canais = [
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@ibgdh.org.br",
    href: "mailto:contato@ibgdh.org.br",
  },
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: "(61) 3000-0000",
    href: "tel:+556130000000",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Brasília — DF, Brasil",
  },
];

function ContatoPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Fale com o IBGDH
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Estamos à disposição para orientação cidadã, parcerias
            institucionais, projetos sociais e demandas de imprensa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {canais.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-sm font-semibold text-foreground">
                {label}
              </h2>
              {href ? (
                <a
                  className="mt-1 block text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
                  href={href}
                >
                  {value}
                </a>
              ) : (
                <p className="mt-1 text-sm text-muted-foreground">{value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-secondary/40 p-8">
          <h2 className="text-xl font-semibold text-foreground">
            Precisa de orientação jurídica ou sobre direitos das PCDs?
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Preencha o Formulário de Orientação Cidadã e nossa equipe fará uma
            avaliação inicial da sua demanda.
          </p>
          <Link
            to="/direitos-e-servicos"
            hash="orientacao-cidada"
            className="mt-6 inline-flex rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-95 focus-visible:outline-2 focus-visible:outline-ring"
          >
            Solicitar orientação
          </Link>
        </div>
      </section>
    </div>
  );
}
