import FormContato from "@/app/components/FormContato";
import ProdutosItems from "@/app/components/Produtos/ProdutosItems";
import Titulo from "@/app/components/Titulo";
import { checkList } from "@/app/lib/listas";
import { Metadata } from "next";
import Image from "next/image";

import Link from "next/link";


export const metadata: Metadata = {
  title: "Produtos | RM Triunfo Cabos",
  description:
    "RM Triunfo Cabos oferece cabos de aço e acessórios para elevação, movimentação e amarração de cargas. Alta qualidade, durabilidade e variedade. Encontre o cabo ideal para sua necessidade!",
  keywords:
    "cabos de aço, Triunfo Cabos, acessórios para elevadores, cabos de aço, cabos para academia, cabos para elevadores, cintas de poliéster, laços de cabos de aço, elevação de cargas, movimentação de cargas, amarração de cargas, segurança, qualidade, RM Triunfo Cabos",
  authors: [{ name: "Lorenzo-alt", url: "https://github.com/Lorenzo-alt" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: "Produtos | RM Triunfo Cabos",
    title: "Produtos | RM Triunfo Cabos",
    description:
      "RM Triunfo Cabos oferece cabos de aço e acessórios para elevação, movimentação e amarração de cargas. Alta qualidade, durabilidade e variedade. Encontre o cabo ideal para sua necessidade!",
    url: "link",
  },
  twitter: {
    title: "Produtos | RM Triunfo Cabos",
    description:
      "RM Triunfo Cabos oferece cabos de aço e acessórios para elevação, movimentação e amarração de cargas. Alta qualidade, durabilidade e variedade. Encontre o cabo ideal para sua necessidade!",
    creator: "Lorenzo-alt",
  },
};



export default async function Page({ params }: { params: { slug: string } }) {
  const lista = checkList(params.slug)

  return (
    <main className="flex flex-col items-center justify-center h-full w-full max-w-[2560px]">
      <Titulo titulo="produtos"/>
      <ProdutosItems lista={lista}/>
      <FormContato />
    </main>
  );
}
