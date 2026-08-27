CREATE TABLE public.orientacoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT,
  cidade_uf TEXT,
  tipo_demanda TEXT NOT NULL,
  mensagem TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.orientacoes TO anon;
GRANT INSERT ON public.orientacoes TO authenticated;
GRANT ALL ON public.orientacoes TO service_role;

ALTER TABLE public.orientacoes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir insercao anonima" ON public.orientacoes FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Permitir insercao autenticada" ON public.orientacoes FOR INSERT TO authenticated WITH CHECK (true);