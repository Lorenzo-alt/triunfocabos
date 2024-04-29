"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowUpSquare } from "react-icons/bs";

export default function VersionPage() {
  const [rows, setRows] = useState<number>(12);

  useEffect(() => {
    if (window) {
      var sm = window.matchMedia("(max-width: 767px)");
      var md = window.matchMedia("(max-width: 768px)");
      var lg = window.matchMedia("(max-width: 1024px)");
      var xl = window.matchMedia("(max-width: 1280px)");
      var xl2 = window.matchMedia("(min-width: 1281px)");

      if (sm.matches) {
        setRows(12);
      } else if (md.matches) {
        setRows(10);
      } else if (lg.matches) {
        setRows(8);
      } else if (xl.matches) {
        setRows(7);
      } else if (xl2.matches) {
        setRows(6);
      }

      sm.addEventListener("change", function () {
        setRows(12);
      });
      md.addEventListener("change", function () {
        setRows(10);
      });
      lg.addEventListener("change", function () {
        setRows(8);
      });
      xl.addEventListener("change", function () {
        setRows(7);
      });
      xl2.addEventListener("change", function () {
        setRows(6);
      });

      //   return () => {
      //     sm.removeEventListener("change", function () {
      //       setRows(10);
      //     });
      //   };
    }
  }, []);

  return (
    <form action="" className="px-5 lg:px-0 flex flex-col gap-5 xl:gap-8 text-azul-titulo">
          <div className="flex flex-col xl:grid xl:grid-flow-col gap-5 xl:gap-8">
            
            <div className="flex flex-col gap-1">
              <label
                htmlFor=""
                className="md:text-lg xl:text-xl 2xl:text-2xl font-mono font-bold uppercase"
              >
                NOME
              </label>
              <input
                type="text"
                className="bg-cinza-input focus:bg-neutral-200 text-azul-titulo rounded-[10px] text-sm md:text-base xl:text-lg 2xl:text-xl w-full pt-4 xl:pt-6 px-2 border-b-cinza2 border-b-4 font-bold placeholder-azul-titulo"
                placeholder="Digite seu nome aqui..."
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor=""
                className="md:text-lg xl:text-xl 2xl:text-2xl font-mono font-bold uppercase"
              >
                TELEFONE
              </label>
              <input
                type="text"
                className="bg-cinza-input focus:bg-neutral-200 text-azul-titulo rounded-[10px] text-sm md:text-base xl:text-lg 2xl:text-xl w-full pt-4 xl:pt-6 px-2 border-b-cinza2 border-b-4 font-bold placeholder-azul-titulo"
                placeholder="Digite seu telefone..."
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
              <label
                htmlFor=""
                className="md:text-lg xl:text-xl 2xl:text-2xl font-mono font-bold uppercase"
              >
                E-MAIL
              </label>
              <input
                type="text"
                className="bg-cinza-input focus:bg-neutral-200 text-azul-titulo rounded-[10px] text-sm md:text-base xl:text-lg 2xl:text-xl w-full pt-4 xl:pt-6 px-2 border-b-cinza2 border-b-4 font-bold placeholder-azul-titulo"
                placeholder="Digite seu e-mail para contato..."
              />
            </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="md:text-lg xl:text-xl 2xl:text-2xl font-mono font-bold uppercase"
            >
              MENSAGEM
            </label>
            <textarea
              rows={rows}
              className="bg-cinza-input focus:bg-neutral-200 text-azul-titulo resize-none rounded-[10px] text-sm md:text-base xl:text-lg 2xl:text-xl w-full pt-4 xl:pt-6 px-2 border-b-cinza2 border-b-4 font-bold placeholder-azul-titulo"
              placeholder="Digite sua mensagem..."
            />
          </div>
          <Link
            href={"/"}
            className="font-mono w-full self-center font-bold text-white flex xl:px-6 items-center justify-center rounded-md bg-vermelho-principal hover:shadow-[3px_3px_0px_rgba(60,14,9,0.70)]"
          >
            <div className="md:text-lg xl:text-xl 2xl:text-xl flex items-center gap-2 xl:gap-3 px-3 py-1 lg:py-2">
              Enviar
              <BsArrowUpSquare className="w-5 xl:w-6 2xl:w-7 h-auto" />
            </div>
          </Link>
        </form>
  )
}
