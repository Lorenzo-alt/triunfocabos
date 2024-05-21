import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import FormContato from "../components/FormContato";
import Titulo from "../components/Titulo";
import ConteudoServico from "../components/Servicos/ConteudoServico";

export const metadata: Metadata = {
  title: "Servicos | RM Triunfo Cabos",
  description:
    "A Triunfo Cabos é referência nos setores de movimentação e amarração de carga, e nossos serviços são projetados para garantir a segurança e eficiência em todas as etapas. Aqui estão os principais serviços que oferecemos.",
  keywords:
    "cabos de aço, Triunfo Cabos, acessórios para elevadores, cabos de aço, cabos para academia, cabos para elevadores, cintas de poliéster, laços de cabos de aço, elevação de cargas, movimentação de cargas, amarração de cargas, segurança, qualidade, RM Triunfo Cabos",
  authors: [{ name: "Lorenzo-alt", url: "https://github.com/Lorenzo-alt" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: "Servicos | RM Triunfo Cabos",
    title: "Servicos | RM Triunfo Cabos",
    description:
      "A Triunfo Cabos é referência nos setores de movimentação e amarração de carga, e nossos serviços são projetados para garantir a segurança e eficiência em todas as etapas. Aqui estão os principais serviços que oferecemos.",
    url: "link",
  },
  twitter: {
    title: "Servicos | RM Triunfo Cabos",
    description:
      "A Triunfo Cabos é referência nos setores de movimentação e amarração de carga, e nossos serviços são projetados para garantir a segurança e eficiência em todas as etapas. Aqui estão os principais serviços que oferecemos.",
    creator: "Lorenzo-alt",
  },
};

const servicosInfos = [
  {
    titulo: "INSPEÇÃO, REBOBINAMENTO, LUBRIFICAÇÃO DE CABOS DE AÇO",
    link: "/servicos/insp-rebo-lubri-de-cabos-de-aco",
  },
  { titulo: "EMENDA EM CABOS DE AÇO", link: "/servicos/emenda-em-cabos-de-aco" },
  { titulo: "SOQUETAGEM DE CABOS DE AÇO", link: "/servicos/soquetagem-de-cabos-de-aco" },
  { titulo: "TREINAMENTO", link: "/servicos/treinamento" },
];

export default async function Servicos() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-full max-w-[2560px]">
      <Titulo titulo="Serviços"/>
      <ConteudoServico lista={servicosInfos}/>
      <FormContato />
    </main>
  );
}
