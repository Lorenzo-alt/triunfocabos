import { Metadata } from "next";
import LargeDisplay from "./LargeDisplay";
import Link from "next/link";
import Titulo from "../components/Titulo";
import Texto from "../components/Institucional/Texto";

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
      <Titulo titulo="Institucional"/>
      <Texto/>
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
