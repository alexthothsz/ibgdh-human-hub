import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import {
  Accessibility,
  ArrowRight,
  Briefcase,
  FileText,
  HandHelping,
  HeartPulse,
  Scale,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";

import { enviarOrientacao } from "@/lib/orientacao.functions";

export const Route = createFileRoute("/direitos-e-servicos")({
  head: () => ({
    meta: [
      { title: "Direitos e Serviços — IBGDH" },
      {
        name: "description",
        content:
          "Conheça as áreas de atuação do IBGDH em direitos das pessoas com deficiência e assessoria jurídica. Solicite orientação cidadã gratuita.",
      },
      { property: "og:title", content: "Direitos e Serviços — IBGDH" },
      {
        property: "og:description",
        content:
          "Atuação em PCD, assessoria jurídica e formulário de orientação cidadã do Instituto Brasil Global de Direitos Humanos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DireitosEServicos,
});

const formSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, { message: "Nome completo é obrigatório" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  email: z
    .string()
    .trim()
    .email({ message: "Informe um e-mail válido" })
    .max(255, { message: "E-mail deve ter no máximo 255 caracteres" }),
  telefone: z
    .string()
    .trim()
    .max(30, { message: "Telefone deve ter no máximo 30 caracteres" })
    .optional()
    .or(z.literal("")),
  cidade_uf: z
    .string()
    .trim()
    .max(60, { message: "Cidade/UF deve ter no máximo 60 caracteres" })
    .optional()
    .or(z.literal("")),
  tipo_demanda: z.enum(["pcd", "previdenciario", "saude", "outros"], {
    errorMap: () => ({ message: "Selecione o tipo de demanda" }),
  }),
  mensagem: z
    .string()
    .trim()
    .min(10, { message: "Descreva sua necessidade com pelo menos 10 caracteres" })
    .max(2000, { message: "Mensagem deve ter no máximo 2000 caracteres" }),
});

type FormData = z.infer<typeof formSchema>;

const PCD_TOPICS = [
  {
    id: "bpc-loas",
    icon: Wallet,
    title: "BPC/LOAS",
    description:
      "Orientação sobre o Benefício de Prestação Continuada, requisitos, recursos e acompanhamento de requerimentos junto ao INSS.",
  },
  {
    id: "direitos-previdenciarios",
    icon: FileText,
    title: "Direitos Previdenciários",
    description:
      "Aposentadoria, auxílio-doença, revisão de benefícios e defesa dos direitos previdenciários de pessoas com deficiência.",
  },
  {
    id: "acessibilidade",
    icon: Accessibility,
    title: "Acessibilidade",
    description:
      "Mobilidade urbana, comunicação, informação e adaptações necessárias para garantir autonomia e inclusão plena.",
  },
  {
    id: "mercado-de-trabalho",
    icon: Briefcase,
    title: "Mercado de Trabalho",
    description:
      "Cota de pessoas com deficiência, direitos trabalhistas, acomodações razoáveis e combate à discriminação no emprego.",
  },
  {
    id: "combate-ao-capacitismo",
    icon: ShieldCheck,
    title: "Combate ao Capacitismo",
    description:
      "Enfrentamento de preconceitos, estereótipos e práticas discriminatórias que limitam o protagonismo das pessoas com deficiência.",
  },
];

const JURIDICO_FRENTES = [
  {
    icon: FileText,
    title: "Previdenciário",
    description: "Aposentadorias, benefícios por incapacidade, revisões e recursos administrativos e judiciais.",
  },
  {
    icon: HeartPulse,
    title: "Saúde",
    description: "Garantia de acesso a medicamentos, tratamentos, terapias e procedimentos pelo SUS e planos de saúde.",
  },
  {
    icon: Users,
    title: "Direitos Humanos",
    description: "Defesa da dignidade, da igualdade e da não discriminação em situações de violação de direitos fundamentais.",
  },
  {
    icon: HandHelping,
    title: "Assistência Social",
    description: "Orientação sobre serviços, benefícios eventuais e políticas de assistência social no território.",
  },
];

function Button({
  to,
  type,
  variant = "primary",
  children,
  onClick,
  disabled,
}: {
  to?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition-all focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-60";
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
    <button type={type ?? "button"} onClick={onClick} disabled={disabled} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}

function DireitosEServicos() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const enviar = useServerFn(enviarOrientacao);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    setErrorMsg("");
    try {
      await enviar({ data });
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Ocorreu um erro ao enviar. Tente novamente.");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-secondary">
        <img
          src="/images/pcd-banner.jpg"
          alt="Pessoas diversas em espaço urbano acessível, representando inclusão e direitos das pessoas com deficiência"
          width={1344}
          height={768}
          loading="eager"
          className="absolute inset-0 size-full object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Direitos e Serviços</p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Justiça, acessibilidade e cidadania para todos
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              O IBGDH oferece orientação especializada em direitos das pessoas com deficiência e assessoria jurídica
              gratuita para quem precisa defender seus direitos e conquistar autonomia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="#orientacao-cidada" variant="primary">
                Solicite Orientação
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button to="#pessoas-com-deficiencia" variant="secondary">
                Conheça a Área PCD
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Área PCD */}
      <section id="pessoas-com-deficiencia" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Área PCD</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Inclusão e Direitos das Pessoas com Deficiência
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Trabalhamos para garantir que pessoas com deficiência exercitem plenamente seus direitos sociais,
            previdenciários, trabalhistas e de acessibilidade.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PCD_TOPICS.map(({ id, icon: Icon, title, description }) => (
            <a
              key={id}
              href={`#${id}`}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md focus-visible:outline-2 focus-visible:outline-ring"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">{title}</h3>
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

        {/* Detalhamento dos tópicos PCD */}
        <div className="mt-16 space-y-10">
          {PCD_TOPICS.map(({ id, title, description }) => (
            <div key={id} id={id} className="scroll-mt-24 rounded-xl border border-border bg-secondary p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Entre em contato conosco para uma análise individualizada do seu caso. Nossa equipe multidisciplinar
                avalia o melhor caminho jurídico, administrativo ou social para cada situação.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Assessoria Jurídica */}
      <section id="assessoria-juridica" className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Assessoria Jurídica</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                O Direito como instrumento de transformação social
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Nossa assessoria jurídica utiliza o Direito como ferramenta de inclusão, garantindo que pessoas em
                situação de vulnerabilidade tenham voz e acesso à justiça.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Atuamos de forma humanizada, gratuita e orientada pelos princípios dos direitos humanos, priorizando a
                resolução adequada de cada demanda.
              </p>
              <div className="mt-8">
                <Button to="#orientacao-cidada" variant="primary">
                  Peça orientação jurídica
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {JURIDICO_FRENTES.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <span className="flex size-11 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Orientação Cidadã */}
      <section id="orientacao-cidada" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Formulário Inteligente</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Formulário de Orientação Cidadã
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Preencha os campos abaixo para que nossa equipe faça uma avaliação inicial da sua demanda. O atendimento é
            gratuito e confidencial.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="nome" className="text-sm font-medium text-foreground">
                Nome Completo
              </label>
              <input
                id="nome"
                type="text"
                autoComplete="name"
                {...register("nome")}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground shadow-sm transition-colors focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="Seu nome completo"
              />
              {errors.nome && <p className="text-sm text-destructive">{errors.nome.message}</p>}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email")}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground shadow-sm transition-colors focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="seu@email.com"
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="telefone" className="text-sm font-medium text-foreground">
                Telefone/WhatsApp
              </label>
              <input
                id="telefone"
                type="tel"
                autoComplete="tel"
                {...register("telefone")}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground shadow-sm transition-colors focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="(00) 00000-0000"
              />
              {errors.telefone && <p className="text-sm text-destructive">{errors.telefone.message}</p>}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="cidade_uf" className="text-sm font-medium text-foreground">
                Cidade/UF
              </label>
              <input
                id="cidade_uf"
                type="text"
                {...register("cidade_uf")}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground shadow-sm transition-colors focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="Ex: Brasília/DF"
              />
              {errors.cidade_uf && <p className="text-sm text-destructive">{errors.cidade_uf.message}</p>}
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="tipo_demanda" className="text-sm font-medium text-foreground">
              Tipo de Demanda
            </label>
            <select
              id="tipo_demanda"
              {...register("tipo_demanda")}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground shadow-sm transition-colors focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              defaultValue=""
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              <option value="pcd">PCD — Pessoas com Deficiência</option>
              <option value="previdenciario">Previdenciário</option>
              <option value="saude">Saúde</option>
              <option value="outros">Outros</option>
            </select>
            {errors.tipo_demanda && <p className="text-sm text-destructive">{errors.tipo_demanda.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="mensagem" className="text-sm font-medium text-foreground">
              Mensagem / Descrição da necessidade
            </label>
            <textarea
              id="mensagem"
              rows={5}
              {...register("mensagem")}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground shadow-sm transition-colors focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="Descreva sua situação com o máximo de detalhes possível..."
            />
            {errors.mensagem && <p className="text-sm text-destructive">{errors.mensagem.message}</p>}
          </div>

          {status === "success" && (
            <div className="rounded-lg bg-emerald-50 p-4 text-sm text-emerald-800 dark:bg-emerald-950 dark:text-emerald-100">
              <p className="font-semibold">Solicitação enviada com sucesso!</p>
              <p className="mt-1">Nossa equipe entrará em contato em breve para dar continuidade ao atendimento.</p>
            </div>
          )}

          {status === "error" && (
            <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
              <p className="font-semibold">Erro no envio</p>
              <p className="mt-1">{errorMsg}</p>
            </div>
          )}

          <Button type="submit" variant="primary" disabled={status === "submitting"}>
            {status === "submitting" ? "Enviando..." : "Enviar para Avaliação Inicial"}
            <Scale className="size-4" aria-hidden="true" />
          </Button>
        </form>
      </section>
    </>
  );
}
