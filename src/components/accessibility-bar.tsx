import { useEffect, useState } from "react";
import { Contrast, Minus, Plus, RotateCcw } from "lucide-react";

const STEPS = [90, 100, 110, 120, 130];
const FONT_KEY = "ibgdh:font-scale";
const CONTRAST_KEY = "ibgdh:high-contrast";

export function AccessibilityBar() {
  const [scale, setScale] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  // Restaura preferências apenas no cliente (evita divergência de hidratação)
  useEffect(() => {
    const storedScale = Number(localStorage.getItem(FONT_KEY));
    if (STEPS.includes(storedScale)) setScale(storedScale);
    setHighContrast(localStorage.getItem(CONTRAST_KEY) === "true");
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${scale}%`;
    localStorage.setItem(FONT_KEY, String(scale));
  }, [scale]);

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
    localStorage.setItem(CONTRAST_KEY, String(highContrast));
  }, [highContrast]);

  const index = STEPS.indexOf(scale) === -1 ? 1 : STEPS.indexOf(scale);
  const step = (delta: number) => {
    const next = STEPS[Math.min(STEPS.length - 1, Math.max(0, index + delta))];
    if (next) setScale(next);
  };

  const btn =
    "inline-flex min-h-9 items-center justify-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-xs font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  return (
    <div className="border-b border-border bg-secondary" role="region" aria-label="Ferramentas de acessibilidade">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 sm:px-6 lg:px-8">
        <a href="#conteudo-principal" className={btn}>
          Ir para o conteúdo principal
        </a>

        <div className="flex items-center gap-2">
          <span className="hidden text-xs font-medium text-muted-foreground sm:inline">
            Tamanho do texto
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className={btn}
              onClick={() => step(-1)}
              disabled={index === 0}
              aria-label="Diminuir tamanho do texto"
            >
              <Minus className="size-3.5" aria-hidden="true" />A
            </button>
            <button
              type="button"
              className={btn}
              onClick={() => step(1)}
              disabled={index === STEPS.length - 1}
              aria-label="Aumentar tamanho do texto"
            >
              <Plus className="size-3.5" aria-hidden="true" />A
            </button>
            <button
              type="button"
              className={btn}
              onClick={() => setScale(100)}
              aria-label="Restaurar tamanho padrão do texto"
            >
              <RotateCcw className="size-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Padrão</span>
            </button>
          </div>

          <button
            type="button"
            className={btn}
            aria-pressed={highContrast}
            onClick={() => setHighContrast((v) => !v)}
          >
            <Contrast className="size-3.5" aria-hidden="true" />
            Alto contraste
          </button>

          <span aria-live="polite" className="sr-only">
            Texto em {scale}%. Alto contraste {highContrast ? "ativado" : "desativado"}.
          </span>
        </div>
      </div>
    </div>
  );
}
