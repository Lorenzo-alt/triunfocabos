"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function Texto() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section ref={ref}>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl p-8 md:px-14 lg:p-10 2xl:p-14 lg:px-32 xl:px-44 2xl:px-60 text-justify"
      >
        Somos RM Triunfo Cabos fundada em 2023. Ao longo dessa trajetória, a
        empresa conquistou a confiança de clientes dos mais diversos setores,
        oferecendo soluções completas e personalizadas em cabos de aço para
        atender às mais variadas necessidades. <br />
        <br />A Triunfo Cabos possui um amplo portfólio de cabos de aço,
        abrangendo uma gama completa de materiais, diâmetros e construções. A
        empresa se destaca pelo seu profundo conhecimento técnico e expertise na
        área. <br />
        <br />
        Trabalhamos com materiais para elevação, movimentação e amarração de
        cargas, em nossa linha possuímos cabos de aço direcionados para diversas
        formas de trabalho, laços de cabos de aço para elevação de materiais,
        cintas de poliéster coloridas com normas americana, cabos para academia
        em nylon, cabos para elevadores de passageiros e uma diversidade de
        acessórios e materiais específicos para atender vossa necessidade.
        Teremos o maior prazer em poder estar fazendo parte de vossa empresa e
        ofertar nossos produtos e serviços. <br />
        <br />
        Nossa ampla gama de produtos inclui:
        <br />
        <br /> <strong> Cabos de aço:</strong> para diversas aplicações, desde a
        construção civil até a indústria naval, com diâmetros e acabamentos
        variados para atender às suas necessidades específicas. <br />
        <strong>Laços de cabos de aço: </strong>para elevação segura de
        materiais, com diferentes capacidades de carga e designs ergonômicos
        para facilitar o manuseio. <br />
        <strong>Cintas de poliéster coloridas:</strong> com normas americanas de
        segurança, para amarração de cargas com máxima resistência e
        durabilidade.
        <br /> <strong>Cabos para academia em nylon:</strong> ideais para
        exercícios físicos e treinamento funcional, com diferentes espessuras e
        cores para todos os níveis de condicionamento físico.
        <br /> <strong>Cabos para elevadores de passageiros:</strong> projetados
        para garantir a segurança e o bom funcionamento dos elevadores, com alta
        resistência à tração e longa vida útil.
        <br />
        <strong>Acessórios e materiais específicos:</strong> como manilhas,
        ganchos, talhas, polias e lubrificantes, para complementar suas soluções
        de elevação e movimentação de cargas. <br />
        <br />
        Por que escolher a RM Triunfo Cabos?
        <br />
        <br />
        <strong>Experiência:</strong> equipe com mais de 20 anos de experiência
        no mercado, atendendo a diversos setores e garantindo a qualidade de
        nossos produtos e serviços.
        <br /> <strong>Qualidade:</strong> Produtos com certificação de
        qualidade e normas internacionais, para sua segurança e tranquilidade.
        <br />
        <strong>Variedade:</strong> Ampla gama de produtos para atender às suas
        necessidades específicas, desde cabos de aço até acessórios e materiais
        complementares.
        <br /> <strong>Atendimento personalizado:</strong> Uma equipe altamente
        qualificada para te auxiliar na escolha dos produtos ideais para o seu
        projeto e te oferecer um atendimento diferenciado.
        <br /> <strong>Compromisso com o cliente:</strong> Buscamos
        constantemente a sua satisfação, oferecendo soluções completas, preços
        competitivos e prazos de entrega flexíveis.
      </motion.p>
    </section>
  );
}
