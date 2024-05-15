"use client";
import { motion, useInView } from "framer-motion";
import mongoose from "mongoose";
import React, { useRef } from "react";

type typeProps = {
  ServicoDoc: {
    _id: mongoose.Types.ObjectId;
    linkId: string;
    title: string;
    desc: string;
  };
};

export default function DescServicoItem(props: typeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl p-8 md:px-14 lg:p-10 2xl:p-14 lg:px-32 xl:px-44 2xl:px-60 text-justify flex flex-col gap-10"
        dangerouslySetInnerHTML={{ __html: props.ServicoDoc.desc }}
      ></motion.div>
    </section>
  );
}
