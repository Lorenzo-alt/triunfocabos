"use client";
import React, { useRef } from "react";
import VersionPage from "../FormContato/VersionPage";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

type typeProps = {
  dadosContato: {
    icone: JSX.Element;
    dado: string;
    link: string;
  }[];
  dadosSocial: {
    icone: JSX.Element;
    link: string;
  }[];
};

export default function ConteudoContato(props: typeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="w-full flex flex-col gap-10 xl:flex-row justify-center p-5 lg:p-10 lg:px-32">
      <motion.div initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }} className="xl:w-8/12 2xl:w-6/12">
        <VersionPage />
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }} className="flex flex-col justify-between">
        <div className="flex flex-wrap justify-center xl:flex-col gap-3 ">
          <span className="font-bold flex justify-center xl:justify-start w-full xl:w-auto md:text-lg xl:text-xl 2xl:text-2xl font-mono uppercase">
            contato
          </span>
          {props.dadosContato.map((item, index) => (
            <a
              href={item.link}
              key={item.dado.length + index}
              target="_blank" rel="noopener noreferrer"
              className="hover:underline flex gap-2"
            >
              {item.icone}
              <p className="max-w-60 text-center xl:text-left text-sm md:text-base xl:text-lg 2xl:text-xl xl:max-w-max">
                {item.dado}
              </p>
            </a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center xl:flex-col gap-3 mb-10">
          <span className="font-bold flex justify-center xl:justify-start w-full xl:w-auto md:text-lg xl:text-xl 2xl:text-2xl font-mono uppercase">
            REDES SOCIAIS
          </span>
          <div className="flex gap-2">
            {props.dadosSocial.map((item, index) => {
              return (
                <a
                  href={item.link}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center  justify-center rounded-full w-10 h-10 bg-[#20303B]"
                  key={item.link.length + index}
                >
                  {item.icone}
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
