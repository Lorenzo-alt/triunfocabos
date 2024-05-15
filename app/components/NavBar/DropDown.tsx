import { listaDeTiposDeProdutos } from "@/app/lib/listas";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const servicosInfos = [
  {
    nome: "INSPEÇÃO, REBOBINAMENTO, LUBRIFICAÇÃO DE CABOS DE AÇO",
    link: "/servicos/insp-rebo-lubri-de-cabos-de-aco",
  },
  { nome: "EMENDA EM CABOS DE AÇO", link: "/servicos/emenda-em-cabos-de-aco" },
  {
    nome: "SOQUETAGEM DE CABOS DE AÇO",
    link: "/servicos/soquetagem-de-cabos-de-aco",
  },
  { nome: "TREINAMENTO", link: "/servicos/treinamento" },
];

type typeProps = {
  setOpenNav: React.Dispatch<
    React.SetStateAction<{
      produtos: boolean;
      servicos: boolean;
    }>
  >;
  openNav: {
    produtos: boolean;
    servicos: boolean;
  };
  dadoId: string;
  name: string;
};

export default function DropDown(props: typeProps) {
  const Lista =
    props.name === "Produtos" ? listaDeTiposDeProdutos : servicosInfos;

  return (
    <div
      onMouseEnter={() => {
        props.setOpenNav((prevOpenNav) => {
          return { ...prevOpenNav, [props.dadoId]: true };
        });
      }}
      onMouseLeave={() => {
        props.setOpenNav((prevOpenNav) => {
          return { ...prevOpenNav, [props.dadoId]: false };
        });
      }}
      className={twMerge(
        "absolute z-50 top-full bg-cinza py-2 pt-2.5 text-azul-titulo font-medium text-sm rounded-[5px] rounded-tr-xl rounded-bl-xl hidden",
        props.name === "Produtos" && props.openNav.produtos && "block",
        props.name === "Serviços" && props.openNav.servicos && "block"
      )}
    >
      <div className="flex flex-col flex-wrap max-h-80 w-[300px] divide-y divide-black/5">
        {Lista.map((item, index) => {
          return (
            <Link
              prefetch={false}
              href={
                `/${props.dadoId}/` +
                (item.nome.includes('REBOBINAMENTO') ? 'insp-rebo-lubri-de-cabos-de-aco': item.nome)
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replaceAll(",", "")
                  .replaceAll(" ", "-")
                  .replaceAll("/", "-")
                  .replaceAll("+", "%2B")
              }
              key={item.nome + index}
              className="px-6 py-1.5 transition-all hover:bg-black/5 hover:underline hover:font-bold max-w-[300px] truncate"
            >
              {item.nome}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
