"use client";
import { motion, useInView } from "framer-motion";
import mongoose from "mongoose";
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

export default function TabelaProduto(props: typeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      className="flex flex-col items-center bg-azul-titulo w-full overflow-x-auto "
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
        className="w-full flex justify-evenly"
      >
        {props.ProdutoDoc.tabela.length !== 0 && (
          <div className="flex flex-col w-max items-start py-10 px-5">
            <div className="w-max rounded-[10px] shadow-[0px_0px_30.0px_rgba(13,19,22,1)] shadow-azul-principal">
              {props.ProdutoDoc.tabela.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={"grid"}
                    style={{
                      backgroundColor: index === 0 ? "#e9e75f" : "white",
                      borderRadius:
                        index === 0
                          ? "10px 10px 0% 0%"
                          : index === props.ProdutoDoc.tabela.length - 1
                          ? "0% 0% 10px 10px"
                          : "0%",
                      gridTemplateColumns: `repeat(${
                        item.split(";").length
                      }, minmax(0, 1fr))`,
                    }}
                  >
                    {item.split(";").map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-center md:p-3 p-1 max-w-16 md:max-w-36 items-center text-center text-[8px] md:text-sm"
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
