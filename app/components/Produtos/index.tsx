import { listaDeTiposDeProdutos } from "@/app/lib/listas";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <section className="w-full flex flex-col lg:items-center bg-fundo2">
      <div className="w-full py-8 text-center bg-azul-titulo">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono text-white font-bold drop-shadow-[2px_0px_0px_rgba(173,173,173,1)]">
          PRODUTOS
        </h2>
      </div>
      <section className="flex flex-col lg:items-center">
        <div className="flex gap-8 md:gap-10 xl:gap-14 2xl:gap-20 flex-wrap items-center justify-center p-8 lg:p-10 xl:p-16 2xl:p-20 max-w-[1920px]">
          {listaDeTiposDeProdutos.map((item, index) => {
            return (
              <Link
                prefetch={false}
                href={
                  "produtos/" +
                  item.nome
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replaceAll(",", "")
                    .replaceAll(" ", "-")
                    .replaceAll("/", "-").replaceAll("+", "%2B")
                }
                key={item.nome + index}
                className="w-[180px] h-[220px] md:w-[230px] md:h-[270px] lg:w-[280px] lg:h-[320px] xl:w-[330px] xl:h-[370px] 2xl:w-[350px] 2xl:h-[390px] bg-cinza-claro shadow-[0px_0px_10px_rgba(0,0,0,0.25)] p-1 lg:p-2 flex flex-col gap-2"
              >
                <Image
                  src={item.foto}
                  alt="aaa"
                  width={1920}
                  height={1080}
                  className="w-full h-[150px] md:h-[200px] lg:h-[240px] xl:h-[280px] 2xl:h-[300px] object-contain p-10 xl:p-16 bg-white"
                />
                <div className="text-wrap md:text-lg lg:text-xl xl:text-2xl font-bold font-mono text-azul-titulo break-words whitespace-pre-line">
                  <p className="truncate-multiline text-center px-2">
                    {item.nome}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </section>
  );
}
