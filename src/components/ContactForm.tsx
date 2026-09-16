"use client";

import { useEffect, useRef } from "react";

export function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.dataset.loaded === "true") return;

    const script = document.createElement("script");
    script.src = "https://form.123formbuilder.com/embed/6975994.js";
    script.type = "text/javascript";
    script.defer = true;
    script.dataset.role = "form";
    script.dataset.defaultWidth = "800px";
    script.dataset.customVars = "hasEmbedFormStyle=1";
    container.appendChild(script);
    container.dataset.loaded = "true";

    return () => {
      container.replaceChildren();
      delete container.dataset.loaded;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto w-full max-w-[800px] min-h-[480px]"
      data-form-embed
    />
  );
}
