import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Scale, Youtube } from "lucide-react";

const QUICK_LINKS = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/instituto/quem-somos" },
  { label: "Missão, Visão e Valores", href: "/instituto/missao-visao-valores" },
  { label: "Diretoria", href: "/instituto/diretoria" },
  { label: "Parceiros", href: "/instituto/parceiros" },
];

const SERVICE_LINKS = [
  { label: "Pessoas com Deficiência", href: "/direitos-e-servicos/pessoas-com-deficiencia" },
  { label: "Assessoria Jurídica", href: "/direitos-e-servicos/assessoria-juridica" },
  { label: "Projetos Sociais", href: "/direitos-e-servicos/projetos-sociais" },
  { label: "Cursos", href: "/escola/cursos" },
  { label: "Eventos", href: "/escola/eventos" },
];

const KNOWLEDGE_LINKS = [
  { label: "Artigos", href: "/conhecimento/artigos" },
  { label: "Pesquisas", href: "/conhecimento/pesquisas" },
  { label: "Publicações", href: "/conhecimento/publicacoes" },
  { label: "Contato", href: "/contato" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Marca */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary-foreground/15">
                <Scale className="size-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-bold tracking-tight">IBGDH</span>
                <span className="block text-xs text-primary-foreground/70">
                  Instituto Brasil Global de Direitos Humanos
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              Promovemos a defesa, a difusão e a efetivação dos direitos humanos no Brasil,
              com foco em acessibilidade, justiça social e inclusão das pessoas com deficiência.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-md bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Links rápidos */}
          <nav aria-label="Instituto">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Instituto
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Direitos e Serviços">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <nav aria-label="Conhecimento">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
                Conhecimento
              </h3>
              <ul className="mt-4 space-y-2.5">
                {KNOWLEDGE_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <address className="mt-6 space-y-2.5 text-sm not-italic text-primary-foreground/70">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                Brasília — DF, Brasil
              </p>
              <p className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                <a href="mailto:contato@ibgdh.org.br" className="hover:text-primary-foreground">
                  contato@ibgdh.org.br
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                <a href="tel:+556100000000" className="hover:text-primary-foreground">
                  (61) 0000-0000
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} IBGDH — Instituto Brasil Global de Direitos Humanos. Todos os direitos reservados.</p>
          <p>CNPJ 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}
