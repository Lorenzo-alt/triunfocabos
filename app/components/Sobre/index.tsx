'use client'
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export default function Sobre() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="text-sm md:text-base xl:text-xl 2xl:text-[24px] flex flex-col lg:flex-row lg:p-10 xl:p-20 lg:items-center">
      <motion.div ref={ref} initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }} className="p-[5px] md:p-2 lg:p-0 lg:-ml-8 xl:-ml-12 lg:order-2">
        <div className="bg-white rounded-[10px] px-2 lg:px-8 xl:px-12 2xl:px-20 py-5 xl:py-16 2xl:py-24 flex flex-col gap-2 2xl:gap-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono text-azul-titulo font-bold drop-shadow-[2px_0px_0px_rgba(47,67,80,1)]">
            TRIUNFO CABOS
          </h1>
          <div className="bg-fundo w-full h-0.5 md:h-1 xl:h-1.5 rounded-full" />
          <div className="pt-2 xl:pt-4 pr-3">
            Na Triunfo Cabos, excelência é mais do que um compromisso é uma
            filosofia que impregna tudo o que fazemos. Desde a concepção até a
            entrega, nos dedicamos incansavelmente a garantir a mais alta
            qualidade em todos os nossos produtos e serviços. Os cabos de aço
            que trabalhamos são fabricados com os mais rigorosos padrões de
            qualidade e segurança, utilizando materiais de primeira linha e
            tecnologia de ponta. Além disso, investimos constantemente em
            pesquisa e desenvolvimento para garantir que os produtos atendam e
            excedam as expectativas de nossos clientes. Na Triunfo Cabos, a
            qualidade é nossa prioridade número um, e estamos comprometidos em
            oferecer produtos que ofereçam desempenho excepcional e durabilidade
            incomparável.
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}>
      <Image
        src={"/sobre-photo.png"}
        alt="Sobre foto"
        height={1200}
        width={1200}
        className="w-full h-[230px] sm:h-[300px] lg:h-[468px] lg:min-w-[380px] xl:min-w-[530px] 2xl:min-w-[688px] xl:h-[768px] object-cover lg:order-1"
      />
      </motion.div>
    </section>
  );
}
