"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

type typeProps = {
  titulo: string;
};

export default function Titulo(props: typeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section ref={ref} className="bg-azul-titulo w-full">
      <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }} className="bg-fundo-header bg-cover bg-center h-[210px] md:h-[260px] lg:h-[330px] xl:h-[380px] 2xl:h-[420px] flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono text-white font-bold px-2 drop-shadow-[2px_0px_0px_rgba(173,173,173,1)]"
        >
          {props.titulo.toUpperCase()}
        </motion.h1>
      </motion.div>
    </section>
  );
}
