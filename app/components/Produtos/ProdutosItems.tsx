"use client";
import { listaDeTiposDeProdutos } from "@/app/lib/listas";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Loading from "@/app/loading";

// Tempo máximo que o overlay fica na tela. Se a navegação travar sem resposta,
// o usuário volta a conseguir usar a página em vez de ficar preso no loading.
const LOADING_MAX_MS = 20000;

type typeProps = {
  lista?: {
    nome: string;
    foto: string;
  }[];
};

export default function ProdutosItems(props: typeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const pathname = usePathname();
  // Mostra o loading assim que o usuário clica num produto, enquanto a página
  // espera o Mongo responder. Some sozinho quando a nova página substitui esta.
  const [navegando, setNavegando] = useState(false);

  // Trava de segurança: esconde o overlay se a navegação não terminar a tempo
  useEffect(() => {
    if (!navegando) return;
    const timer = setTimeout(() => setNavegando(false), LOADING_MAX_MS);
    return () => clearTimeout(timer);
  }, [navegando]);

  // Ao voltar com o botão "voltar" do navegador (página restaurada do cache),
  // a tela não deve reaparecer com o overlay ainda aberto
  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) setNavegando(false);
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Ctrl/Cmd/Shift-clique ou botão do meio abrem em nova aba: não bloquear a tela
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0) return;
    setNavegando(true);
  };

  return (
    <section ref={ref} className="flex flex-col lg:items-center">
      {navegando && <Loading />}
      <div className="flex gap-8 md:gap-10 xl:gap-14 2xl:gap-20 flex-wrap items-center justify-center p-8 lg:p-10 xl:p-16 2xl:p-20 max-w-[1920px]">
        {props.lista &&
          props.lista.map((item, index) => {
            return (
              <motion.div
                key={item.nome + index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  prefetch={false}
                  onClick={handleClick}
                  href={
                    `${pathname}/` +
                    item.nome
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replaceAll(",", "")
                      .replaceAll(" ", "-")
                      .replaceAll("/", "-")
                      .replaceAll("+", "%2B")
                  }
                  className="w-[180px] h-[220px] md:w-[230px] md:h-[270px] lg:w-[280px] lg:h-[320px] xl:w-[330px] xl:h-[370px] 2xl:w-[350px] 2xl:h-[390px] bg-cinza-claro shadow-[0px_0px_10px_rgba(0,0,0,0.25)] p-1 lg:p-2 flex flex-col gap-2"
                >
                  <div className="w-full h-[150px] md:h-[200px] lg:h-[240px] xl:h-[280px] 2xl:h-[300px] overflow-hidden">
                    <Image
                      src={item.foto}
                      alt="aaa"
                      width={1920}
                      height={1080}
                      className="object-contain h-full p-10 xl:p-16 bg-white transition-all hover:scale-110"
                    />
                  </div>
                  <div className="text-wrap md:text-lg lg:text-xl xl:text-2xl font-bold font-mono text-azul-titulo break-words whitespace-pre-line transition-all duration-75 hover:text-[#c4c24b]">
                    <p className="truncate-multiline text-center px-2">
                      {item.nome}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
      </div>
    </section>
  );
}
