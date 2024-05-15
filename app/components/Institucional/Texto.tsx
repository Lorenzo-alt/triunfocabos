'use client'
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function Texto() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.section ref={ref} initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl p-8 md:px-14 lg:p-10 2xl:p-14 lg:px-32 xl:px-44 2xl:px-60 text-justify flex flex-col gap-7">
      <p>
        Políticas de Qualidade: <br />
        <br /> A Triunfo Cabos está comprometida com a qualidade em todos os
        aspectos de suas atividades, desde a seleção de fornecedores até a
        entrega final dos produtos aos seus clientes.
      </p>
      <div>
        <strong> Nossos princípios orientadores: </strong>
        <ul className="list-disc pl-7">
          <li>Atender às necessidades e expectativas dos clientes.</li>
          <li>
            Fornecer produtos de alta qualidade com os melhores materiais e
            processos rigorosos de controle.
          </li>
          <li>
            Aprimorar continuamente os processos para aumentar a eficiência,
            reduzir custos e oferecer produtos cada vez melhores.
          </li>
          <li>
            Promover uma cultura de padrão e investir na capacitação dos
            colaboradores para o compromisso com a melhora.
          </li>
          <li>
            Manter um Sistema de Gestão da Qualidade eficaz e cumprir as normas
            e regulamentações aplicáveis.
          </li>
        </ul>
      </div>
      <div>
        <strong>Nossos compromissos se baseiam em: </strong>
        <ul className="list-disc pl-7">
          <li>
            Fornecer produtos e serviços de alta qualidade que atendam às
            necessidades e expectativas dos clientes.{" "}
          </li>
          <li>
            Cumprir todas as normas e regulamentações aplicáveis ao seu setor de
            atuação.
          </li>
          <li>Aprimorar continuamente seus processos e sistemas de gestão.</li>
          <li>
            Investir na capacitação e desenvolvimento dos seus colaboradores.
          </li>
          <li>Promover uma cultura de padrão em toda a organização.</li>
          <li>
            Manter um diálogo aberto e transparente com seus clientes,
            fornecedores e colaboradores.
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
