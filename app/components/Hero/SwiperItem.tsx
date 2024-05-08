import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Logo from "@/public/logo.svg";
import { TbArrowUpRight } from "react-icons/tb";

type typeProps = {
  text: string;
  path: { link: string; nome: string };
  index: number;
};

export default function SwiperItem(props: typeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    } else {
      mainControls.start("hidden");
      slideControls.start("hidden");
    }
  }, [isInView]);
  return (
    <div className="w-full h-[450px] lg:h-[500px] xl:h-[600px] rounded-[10px] lg:shadow-[rgba(0,_0,_0,_0.70)_0px_0px_15px] flex gap-4 items-center justify-center">
      <div ref={ref} className="relative flex justify-center">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.2, delay: 0 }}
          className="flex gap-4 lg:gap-6 flex-col lg:flex-row items-center md:text-lg lg:text-2xl xl:text-3xl md:px-10 lg:w-9/12 xl:w-8/12 2xl:w-7/12 justify-center"
        >
          <Logo viewBox="0 0 1600 1527" className="h-auto xl:min-w-36 2xl:min-w-44 w-28 lg:min-w-28" />

          <div className="flex gap-4 flex-col justify-center items-center lg:items-start">
            <span className="lg:text-start break-words">{props.text}</span>
            <Link
              href={props.path.link}
              className="font-mono font-bold rounded-md bg-vermelho-principal hover:shadow-[3px_3px_0px_rgba(60,14,9,0.70)]"
            >
              <div className="flex items-center gap-1 px-3 lg:px-4 xl:py-2 xl:px-6 py-1">
                {props.path.nome}
                <TbArrowUpRight className="w-5 lg:w-7 xl:w-8 h-auto" />
              </div>
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0 }}
          className="absolute top-2 bottom-2 left-0 right-0 rounded-lg bg-azul-principal z-10"
        ></motion.div>
      </div>
    </div>
  );
}
