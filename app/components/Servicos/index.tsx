"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { TbArrowUpRight } from "react-icons/tb";

const servicosInfos = [
  {
    titulo: "INSPEÇÃO, REBOBINAMENTO, LUBRIFICAÇÃO DE CABOS DE AÇO",
    link: "/servicos/insp-rebo-lubri-de-cabos-de-aco",
  },
  {
    titulo: "EMENDA EM CABOS DE AÇO",
    link: "/servicos/emenda-em-cabos-de-aco",
  },
  {
    titulo: "SOQUETAGEM DE CABOS DE AÇO",
    link: "/servicos/soquetagem-de-cabos-de-aco",
  },
  { titulo: "TREINAMENTO", link: "/servicos/treinamento" },
];

export default function Servicos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="bg-azul-titulo w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        className="w-full py-8 lg:py-12 text-center"
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono text-white font-bold drop-shadow-[2px_0px_0px_rgba(173,173,173,1)]">
          SERVIÇOS
        </h2>
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        className="font-medium text-sm md:text-base xl:text-xl 2xl:text-[24px] text-white flex justify-center"
      >
        <p className="text-center px-5 xl:py-5 md:px-20 lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
          Descubra a excelência em movimentação e amarração de carga com a
          Triunfo Cabos. Além de fornecer os mais confiáveis materiais,
          apresentamos uma gama de serviços para complementar sua experiência
        </p>
      </motion.span>
      <div className="flex gap-8 p-8 md:px-4 xl:pb-20 2xl:gap-14 lg:items-center lg:justify-center overflow-x-scroll overflow-y-hidden lg:overflow-visible">
        {servicosInfos.map((item, index) => {
          return (
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }} transition={{ duration: 0.3, delay: index * 0.1}}
              key={item.titulo.length + index}
              className="min-w-[210px] max-w-[210px] h-[232px] xl:min-w-[266px] xl:h-[295px] 2xl:min-w-[325px] 2xl:h-[358px] rounded-[10px] rounded-tl-[30px] rounded-br-[30px] pb-[9px] xl:pb-4 bg-azul-claro"
            >
              <div className="w-full h-full bg-white rounded-[10px] rounded-tl-[30px] rounded-br-[30px] flex flex-col items-center justify-center px-8">
                <div className="w-full h-[45%] flex items-center justify-center">
                  <h3 className="text-center xl:text-xl 2xl:text-2xl font-bold text-azul-titulo leading-tight">
                    {item.titulo}
                  </h3>
                </div>
                <div className="bg-azul-principal rounded-full h-2 w-full" />
                <div className="w-full h-[35%] flex items-center justify-center">
                  <Link
                    href={item.link}
                    className="font-mono rounded-[10px] transition-all hover:rounded-2xl text-white hover:text-[#E2E023]/90 bg-azul-claro"
                  >
                    <div className="flex items-center font-sans font-bold text-sm xl:text-lg 2xl:text-xl gap-1 px-3 xl:px-5 2xl:px-6  py-1 xl:py-2">
                      Saiba mais
                      <TbArrowUpRight className="w-5 h-auto" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
