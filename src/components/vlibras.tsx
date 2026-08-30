import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VLibras?: { Widget: new (url: string) => unknown };
  }
}

const SCRIPT_SRC = "https://vlibras.gov.br/app/vlibras-plugin.js";

/**
 * Integração com o VLibras (tradutor de Libras do Governo Federal).
 * O avatar fica disponível no canto da tela em todas as páginas.
 */
export function VLibras() {
  const containerRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current || !containerRef.current) return;
    startedRef.current = true;

    containerRef.current.innerHTML = `
      <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
          <div class="vw-plugin-top-wrapper"></div>
        </div>
      </div>
    `;

    const start = () => {
      if (window.VLibras) new window.VLibras.Widget("https://vlibras.gov.br/app");
    };

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      start();
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = start;
    document.body.appendChild(script);
  }, []);

  return <div ref={containerRef} aria-label="Tradutor de Libras VLibras" />;
}
