import React from "react";

// Mesmos estilos dos botões do site (FormContato / Hero e página Empresa)
export const botaoPrincipal =
  "font-mono font-bold text-white rounded-md bg-vermelho-principal px-5 py-2 lg:py-3 md:text-lg xl:text-xl transition-shadow hover:shadow-[3px_3px_0px_rgba(60,14,9,0.70)]";

export const botaoSecundario =
  "font-mono font-bold text-white rounded-[5px] lg:rounded-[10px] bg-azul-titulo px-5 py-2 lg:py-3 md:text-lg xl:text-xl transition-colors hover:text-[#E2E023]/90";

type Props = {
  codigo?: string;
  titulo: string;
  texto: string;
  children: React.ReactNode; // botões de ação
};

// Layout compartilhado pelas telas de erro e de página não encontrada
export default function PaginaAviso({ codigo, titulo, texto, children }: Props) {
  return (
    <section className="flex flex-col items-center justify-center gap-5 lg:gap-7 w-full min-h-[60vh] px-4 py-16 text-center">
      {codigo && (
        <span className="font-mono font-bold text-6xl md:text-7xl xl:text-8xl text-vermelho-principal">
          {codigo}
        </span>
      )}
      <h1 className="font-mono font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-azul-titulo">
        {titulo}
      </h1>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl text-azul-claro max-w-xl">
        {texto}
      </p>
      <div className="flex flex-wrap gap-4 justify-center mt-2">{children}</div>
    </section>
  );
}
