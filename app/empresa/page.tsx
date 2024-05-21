import { Metadata } from "next";
import Link from "next/link";
import Titulo from "../components/Titulo";
import Texto from "../components/Empresa/Texto";

export const metadata: Metadata = {
  title: "Empresa | RM Triunfo Cabos",
  description:
    "Somos RM Triunfo Cabos fundada em 2023. Ao longo dessa trajetória, a empresa conquistou a confiança de clientes dos mais diversos setores, oferecendo soluções completas e personalizadas em cabos de aço para atender às mais variadas necessidades.",
  keywords:
    "cabos de aço, Triunfo Cabos, acessórios para elevadores, cabos de aço, cabos para academia, cabos para elevadores, cintas de poliéster, laços de cabos de aço, elevação de cargas, movimentação de cargas, amarração de cargas, segurança, qualidade, RM Triunfo Cabos",
  authors: [{ name: "Lorenzo-alt", url: "https://github.com/Lorenzo-alt" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: "Empresa | RM Triunfo Cabos",
    title: "Empresa | RM Triunfo Cabos",
    description:
      "Somos RM Triunfo Cabos fundada em 2023. Ao longo dessa trajetória, a empresa conquistou a confiança de clientes dos mais diversos setores, oferecendo soluções completas e personalizadas em cabos de aço para atender às mais variadas necessidades.",
    url: "link",
  },
  twitter: {
    title: "Empresa | RM Triunfo Cabos",
    description:
      "Somos RM Triunfo Cabos fundada em 2023. Ao longo dessa trajetória, a empresa conquistou a confiança de clientes dos mais diversos setores, oferecendo soluções completas e personalizadas em cabos de aço para atender às mais variadas necessidades.",
    creator: "Lorenzo-alt",
  },
};

export default async function Empresa() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-full max-w-[2560px]">
      <Titulo titulo="Empresa"/>
      <Texto/>
      <section className="px-3 md:px-20 lg:px-40 xl:px-72 2xl:px-96 lg:py-2 flex flex-col gap-5 lg:gap-7 xl:gap-10 mb-8">
        <div className="bg-white rounded-[5px] lg:rounded-[10px] p-4 lg:px-8 xl:px-10 2xl:px-24 py-5 text-center font-bold flex flex-col gap-2 lg:gap-4 xl:gap-6 shadow-[4px_4px_0px_rgb(0,0,0,0.25)] lg:shadow-[6px_6px_0px_rgb(0,0,0,0.25)]">
          <p className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            Triunfo Cabos, sua parceira para elevação, movimentação e amarração
            de cargas.
          </p>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Juntos, podemos alcançar novos patamares de sucesso!</p>
        </div>

        <Link href={'/contato'} className="mx-1 lg:mx-8 xl:mx-16 bg-azul-titulo py-3 px-4 font-bold rounded-[5px] lg:rounded-[10px] text-white text-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hover:text-[#E2E023]/90">
          Entre em contato conosco e solicite um orçamento sem compromisso
        </Link>
      </section>
    </main>
  );
}
