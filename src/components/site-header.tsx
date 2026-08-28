import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Scale, X } from "lucide-react";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "/" },
  {
    label: "Instituto",
    children: [
      { label: "Quem Somos", href: "/instituto/quem-somos" },
      { label: "Missão, Visão e Valores", href: "/instituto/missao-visao-valores" },
      { label: "Diretoria", href: "/instituto/diretoria" },
      { label: "Patrono", href: "/instituto/patrono" },
      { label: "Parceiros", href: "/instituto/parceiros" },
    ],
  },
  {
    label: "Direitos e Serviços",
    href: "/direitos-e-servicos",
    children: [
      { label: "Visão Geral", href: "/direitos-e-servicos" },
      { label: "Pessoas com Deficiência", href: "/direitos-e-servicos#pessoas-com-deficiencia" },
      { label: "Assessoria Jurídica", href: "/direitos-e-servicos#assessoria-juridica" },
      { label: "Projetos Sociais", href: "/direitos-e-servicos/projetos-sociais" },
    ],
  },
  {
    label: "Conhecimento",
    children: [
      { label: "Artigos", href: "/artigos" },
      { label: "Pesquisas", href: "/artigos" },
      { label: "Publicações", href: "/artigos" },
    ],
  },
  {
    label: "Escola IBGDH",
    children: [
      { label: "Cursos", href: "/cursos" },
      { label: "Eventos", href: "/cursos" },
    ],
  },
  { label: "Contato", href: "/contato" },
];

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
      >
        {item.label}
        <ChevronDown
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 min-w-64 rounded-lg border border-border bg-popover py-2 shadow-lg">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              className="block px-4 py-2.5 text-sm text-popover-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label="IBGDH — Página inicial">
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Scale className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-primary">IBGDH</span>
            <span className="block text-[11px] font-medium text-muted-foreground">
              Instituto Brasil Global de Direitos Humanos
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} />
            ) : (
              <Link
                key={item.label}
                to={item.href!}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contato"
            className="hidden rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-95 focus-visible:outline-2 focus-visible:outline-ring sm:inline-flex"
          >
            Solicite Orientação
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground hover:bg-secondary lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="border-t border-border bg-background px-4 pb-6 pt-2 lg:hidden"
          aria-label="Navegação móvel"
        >
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label} className="border-b border-border/60 last:border-0">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-foreground"
                  aria-expanded={expanded === item.label}
                  onClick={() =>
                    setExpanded((cur) => (cur === item.label ? null : item.label))
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={`size-5 transition-transform ${
                      expanded === item.label ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {expanded === item.label && (
                  <div className="pb-3 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block rounded-md py-2.5 pl-3 text-sm text-muted-foreground hover:bg-secondary hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href!}
                className="block border-b border-border/60 py-3 text-base font-medium text-foreground last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            to="/contato"
            className="mt-4 flex w-full items-center justify-center rounded-lg bg-accent px-4 py-3 text-base font-semibold text-accent-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Solicite Orientação
          </Link>
        </nav>
      )}
    </header>
  );
}
