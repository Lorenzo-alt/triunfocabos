'use client'
import { motion, useInView } from "framer-motion";
import mongoose from "mongoose";
import Image from "next/image";
import React, { useRef } from "react";

type typeProps = {
  ProdutoDoc: {
    _id: mongoose.Types.ObjectId;
    linkId: string;
    imgPath: string;
    title: string;
    desc: string;
    tabela: string[];
  };
};

export default function HeroProduct(props: typeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="flex flex-col gap-10 p-8 lg:grid grid-cols-2 lg:gap-20 xl:p-20 lg:w-10/12 2xl:w-8/12">
      <motion.a initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
        href={props.ProdutoDoc.imgPath}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-[10px] flex h-max p-10 xl:p-20"
      >
        <Image
          src={props.ProdutoDoc.imgPath}
          alt="aaa"
          width={1920}
          height={1080}
          className="w-full h-[150px] md:h-[200px] lg:h-[240px] xl:h-[280px] 2xl:h-[300px] object-contain"
        />
      </motion.a>
      <motion.div initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }} className="flex flex-col gap-5">
        <h1 className="font-bold text-xl md:text-2xl">
          {props.ProdutoDoc.title}
        </h1>
        <div
          className="flex flex-col text-sm md:text-base gap-4 text-justify"
          dangerouslySetInnerHTML={{ __html: props.ProdutoDoc.desc }}
        ></div>
      </motion.div>
    </section>
  );
}
