"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const institucionalInfos = [
  {
    title: "Missão",
    text: "Ser a referência em soluções completas e personalizadas em cabos de aço, atendendo às mais variadas necessidades dos clientes com excelência e confiabilidade.",
  },
  {
    title: "Visão",
    text: "Consolidar a RM Triunfo Cabos como líder no mercado nacional de distribuição de cabos de aço, expandindo sua atuação para o mercado internacional e se tornando referência em inovação e sustentabilidade.",
  },
  {
    title: "Valores",
    text: (
      <ul className="list-disc pl-7">
        <li>
          <strong>Cliente em primeiro lugar:</strong> Buscamos a satisfação
          total dos nossos clientes através de um atendimento diferenciado,
          soluções personalizadas e produtos de alta qualidade.
        </li>
        <li>
          <strong>Excelência em tudo que fazemos:</strong> Perseguimos a
          excelência em todas as etapas de nossos processos, desde a seleção de
          materiais até a entrega final, garantindo a qualidade e confiabilidade
          dos nossos produtos.
        </li>
        <li>
          <strong>Inovação constante:</strong> Buscamos constantemente novas
          tecnologias e soluções inovadoras para atender às necessidades dos
          nossos clientes e do mercado.
        </li>
        <li>
          <strong>Sustentabilidade:</strong> Nos comprometemos com práticas
          sustentáveis em todas as nossas atividades, minimizando o impacto
          ambiental e promovendo o desenvolvimento social.
        </li>
        <li>
          <strong>Ética e responsabilidade:</strong> Atuamos com ética e
          responsabilidade em todas as nossas relações, com nossos clientes,
          colaboradores, fornecedores e a comunidade.
        </li>
        <li>
          <strong>Trabalho em equipe:</strong> Valorizamos o trabalho em equipe,
          a colaboração e o respeito mútuo entre nossos colaboradores,
          reconhecendo a importância de cada um para o alcance dos nossos
          objetivos.
        </li>
        <li>
          <strong>Compromisso com o cliente:</strong> Acreditamos em um
          relacionamento duradouro com os nossos clientes, baseado na confiança,
          na transparência e no compromisso com a qualidade.
        </li>
      </ul>
    ),
  },
];

export default function LargeDisplay() {
  const [indexValue, setIndexValue] = useState<number>(0);

  return (
    <div className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-justify lg:bg-azul-claro rounded-[10px] flex flex-col gap-7 lg:gap-0 lg:mx-24 xl:mx-32">
      <>
        <div className="hidden lg:grid grid-cols-9 w-full">
          {institucionalInfos.map((item, index) => {
            return (
              <button
                key={item.title + index}
                onClick={() => {
                  setIndexValue(index);
                }}
                className={twMerge(
                  "col-span-3 bg-cinza py-8 flex items-center w-full justify-center 2xl:text-3xl",
                  indexValue === index &&
                    "bg-azul-titulo font-semibold text-white",
                  index === 0 && "rounded-tl-[10px]",
                  index === 2 && "rounded-tr-[10px]"
                )}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        <div className="p-10 px-20 text-white transition-all hidden lg:block">
          {institucionalInfos[indexValue].text}
        </div>
      </>
      {institucionalInfos.map((item, index) => {
        return (
          <div
            key={item.title + index}
            className={twMerge(
              "col-span-3 bg-azul-claro  flex flex-col items-center w-full justify-center text-white rounded-[10px] lg:hidden"
              //   indexValue === index && "bg-azul-titulo font-semibold text-white",
              //   index === 0 && "rounded-tl-[10px]",
              //   index === 2 && "rounded-tr-[10px]"
            )}
          >
            <div className="rounded-t-[10px] py-5 bg-azul-titulo w-full flex items-center justify-center text-base xl:text-2xl 2xl:text-3xl  font-semibold">
              {item.title}
            </div>
            <div className="p-5 text-sm">
              {item.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}
