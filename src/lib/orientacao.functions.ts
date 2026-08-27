import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const orientacaoSchema = z.object({
  nome: z.string().trim().min(2, { message: "Nome completo é obrigatório" }).max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  email: z.string().trim().email({ message: "Informe um e-mail válido" }).max(255, { message: "E-mail deve ter no máximo 255 caracteres" }),
  telefone: z.string().trim().max(30, { message: "Telefone deve ter no máximo 30 caracteres" }).optional().or(z.literal("")),
  cidade_uf: z.string().trim().max(60, { message: "Cidade/UF deve ter no máximo 60 caracteres" }).optional().or(z.literal("")),
  tipo_demanda: z.enum(["pcd", "previdenciario", "saude", "outros"], {
    errorMap: () => ({ message: "Selecione o tipo de demanda" }),
  }),
  mensagem: z.string().trim().min(10, { message: "Descreva sua necessidade com pelo menos 10 caracteres" }).max(2000, { message: "Mensagem deve ter no máximo 2000 caracteres" }),
});

export type OrientacaoInput = z.infer<typeof orientacaoSchema>;

export const enviarOrientacao = createServerFn({ method: "POST" })
  .validator((data) => orientacaoSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("orientacoes").insert({
      nome: data.nome,
      email: data.email,
      telefone: data.telefone || null,
      cidade_uf: data.cidade_uf || null,
      tipo_demanda: data.tipo_demanda,
      mensagem: data.mensagem,
    });

    if (error) {
      console.error("[orientacao] insert error:", error);
      throw new Error("Não foi possível salvar sua solicitação. Tente novamente em instantes.");
    }

    return { ok: true };
  });
