import { Metadata } from "next";
import LargeDisplay from "./LargeDisplay";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Institucional | RM Trinfo Cabos",
  description:
    "A Triunfo Cabos está comprometida com a qualidade em todos os aspectos de suas atividades, desde a seleção de fornecedores até a entrega final dos produtos aos seus clientes.",
  keywords:
    "cabos de aço, Triunfo Cabos, acessórios para elevadores, cabos de aço, cabos para academia, cabos para elevadores, cintas de poliéster, laços de cabos de aço, elevação de cargas, movimentação de cargas, amarração de cargas, segurança, qualidade, RM Triunfo Cabos",
  authors: [{ name: "Lorenzo-alt", url: "https://github.com/Lorenzo-alt" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: "Institucional | RM Trinfo Cabos",
    title: "Institucional | RM Trinfo Cabos",
    description:
      "A Triunfo Cabos está comprometida com a qualidade em todos os aspectos de suas atividades, desde a seleção de fornecedores até a entrega final dos produtos aos seus clientes.",
    url: "link",
  },
  twitter: {
    title: "Institucional | RM Trinfo Cabos",
    description:
      "A Triunfo Cabos está comprometida com a qualidade em todos os aspectos de suas atividades, desde a seleção de fornecedores até a entrega final dos produtos aos seus clientes.",
    creator: "Lorenzo-alt",
  },
};

export default async function Institucional() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-full max-w-[2560px]">
      <section className="bg-azul-titulo w-full">
        <div className="bg-fundo-header bg-cover bg-center h-[210px] md:h-[260px] lg:h-[330px] xl:h-[380px] 2xl:h-[420px] flex items-center justify-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono text-white font-bold px-2 drop-shadow-[2px_0px_0px_rgba(173,173,173,1)]">
            INSTITUCIONAL
          </h1>
        </div>
      </section>
      <section className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl p-8 md:px-14 lg:p-10 2xl:p-14 lg:px-32 xl:px-44 2xl:px-60 text-justify flex flex-col gap-7">
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
              Manter um Sistema de Gestão da Qualidade eficaz e cumprir as
              normas e regulamentações aplicáveis.
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
              Cumprir todas as normas e regulamentações aplicáveis ao seu setor
              de atuação.
            </li>
            <li>
              Aprimorar continuamente seus processos e sistemas de gestão.
            </li>
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
      </section>
      <section className="flex flex-col gap-5 lg:gap-7 xl:gap-10 mb-8 px-8 md:px-14 lg:px-32 xl:px-44 2xl:px-60">
        <div className="px-1 md:px-5 lg:px-14 xl:px-40 2xl:px-60 py-1 lg:py-2">
          <div className="bg-white rounded-[5px] lg:rounded-[10px] p-4 lg:px-8 xl:px-10 2xl:px-24 py-5 text-center font-bold flex flex-col gap-2 lg:gap-4 xl:gap-6 shadow-[4px_4px_0px_rgb(0,0,0,0.25)] lg:shadow-[6px_6px_0px_rgb(0,0,0,0.25)]">
            <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              RM Triunfo Cabos: A qualidade que você busca, para o seu sucesso.
            </p>
          </div>
        </div>
        <LargeDisplay />
        <Link href={'/contato'} className="mx-1 lg:mx-16 xl:mx-24  bg-azul-titulo py-3 px-4 font-bold text-center rounded-[5px] lg:rounded-[10px] text-white text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hover:text-[#E2E023]/90">
          Entre em contato conosco e solicite um orçamento sem compromisso
        </Link>
      </section>
    </main>
  );
}
