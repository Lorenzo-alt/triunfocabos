"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { TbArrowUpRight } from "react-icons/tb";

type typeProps = {
  lista?: {
    titulo: string;
    link: string;
  }[];
};

export default function ConteudoServico(props: typeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      ref={ref}
      className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl p-8 md:px-14 lg:p-10 2xl:p-14 lg:px-32 xl:px-44 2xl:px-60 text-justify flex flex-col items-center gap-5 lg:gap-20"
    >
      <p>
        A Triunfo Cabos é referência nos setores de movimentação e amarração de
        carga, e nossos serviços são projetados para garantir a segurança e
        eficiência em todas as etapas. Aqui estão os principais serviços que
        oferecemos:
      </p>
      <div className="lg:w-[842px] lg:h-[722px] xl:w-[1047px] xl:h-[942px] relative flex justify-between flex-col gap-8 lg:flex-row">
        <div className="hidden absolute -z-10 w-full h-full lg:flex items-center justify-center">
          <Image
            src={"/fundo-serviços.png"}
            alt="a"
            width={720}
            height={720}
            className="lg:w-[500px] lg:h-[500px] xl:w-[720px] xl:h-[720px]"
          />
        </div>

        <div className="self-start flex flex-col gap-8 relative z-10 ">
          {props.lista &&
            props.lista.slice(0, 2).map((item, index) => {
              return (
                <div
                  key={index + item.titulo}
                  className="min-w-[210px] max-w-[210px] h-[232px] xl:min-w-[266px] xl:h-[295px] 2xl:min-w-[325px] 2xl:h-[358px] rounded-[10px] rounded-tl-[30px] rounded-br-[30px] pb-[9px] xl:pb-4 bg-[#C29A4B] relative -z-10"
                >
                  <div className="w-full h-full bg-[#76787B]/70 rounded-[10px] rounded-tl-[30px] rounded-br-[30px] flex flex-col items-center justify-center px-8 relative">
                    <Image
                      src={"/fundo-servitem.png"}
                      alt="a"
                      width={325}
                      height={358}
                      className="absolute -z-[4] rounded-[10px] rounded-tl-[30px] rounded-br-[30px]"
                    />
                    <div className="w-full h-[45%] flex items-center justify-center">
                      <h3 className="text-center xl:text-xl 2xl:text-2xl font-bold text-white leading-tight">
                        {item.titulo}
                      </h3>
                    </div>
                    <div className="bg-[#C29A4B] rounded-full h-2 w-full" />
                    <div className="w-full h-[35%] flex items-center justify-center">
                      <Link
                        href={item.link}
                        className="font-mono rounded-[10px] hover:rounded-2xl transition-all hover:bg-[#af8a3f] bg-[#D9AA4E]"
                      >
                        <div className="flex items-center text-white font-sans font-bold text-sm xl:text-lg 2xl:text-xl gap-1 px-3 xl:px-5 2xl:px-6  py-1 xl:py-2">
                          Saiba mais
                          <TbArrowUpRight className="w-5 h-auto" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="self-end flex flex-col gap-8 relative z-10">
          {props.lista &&
            props.lista.slice(2).map((item, index) => {
              return (
                <div
                  key={index + item.titulo}
                  className="min-w-[210px] max-w-[210px] h-[232px] xl:min-w-[266px] xl:h-[295px] 2xl:min-w-[325px] 2xl:h-[358px] rounded-[10px] rounded-tl-[30px] rounded-br-[30px] pb-[9px] xl:pb-4 bg-[#C29A4B] relative -z-10"
                >
                  <div className="w-full h-full bg-[#76787B]/70 rounded-[10px] rounded-tl-[30px] rounded-br-[30px] flex flex-col items-center justify-center px-8 relative">
                    <Image
                      src={"/fundo-servitem.png"}
                      alt="a"
                      width={325}
                      height={358}
                      className="absolute -z-[4] rounded-[10px] rounded-tl-[30px] rounded-br-[30px]"
                    />
                    <div className="w-full h-[45%] flex items-center justify-center">
                      <h3 className="text-center xl:text-xl 2xl:text-2xl font-bold text-white leading-tight">
                        {item.titulo}
                      </h3>
                    </div>
                    <div className="bg-[#C29A4B] rounded-full h-2 w-full" />
                    <div className="w-full h-[35%] flex items-center justify-center">
                      <Link
                        href={item.link}
                        className="font-mono rounded-[10px] hover:rounded-2xl transition-all hover:bg-[#af8a3f] bg-[#D9AA4E]"
                      >
                        <div className="flex items-center text-white font-sans font-bold text-sm xl:text-lg 2xl:text-xl gap-1 px-3 xl:px-5 2xl:px-6  py-1 xl:py-2">
                          Saiba mais
                          <TbArrowUpRight className="w-5 h-auto" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <p>
        Na RM Triunfo Cabos, estamos comprometidos em fornecer soluções
        completas para nossos clientes, desde materiais confiáveis até serviços
        de alta qualidade. Conte conosco para todas as suas necessidades!
      </p>
    </motion.section>
  );
}
