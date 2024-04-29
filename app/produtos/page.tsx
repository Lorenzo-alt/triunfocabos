import { Metadata } from "next";
import Image from "next/image";
import FormContato from "../components/FormContato";
import Link from "next/link";
import { listaDeTiposDeProdutos } from "../lib/listas";

export const metadata: Metadata = {
  title: "Produtos | RM Trinfo Cabos",
  description:
    "RM Triunfo Cabos oferece cabos de aço e acessórios para elevação, movimentação e amarração de cargas. Alta qualidade, durabilidade e variedade. Encontre o cabo ideal para sua necessidade!",
  keywords:
    "cabos de aço, Triunfo Cabos, acessórios para elevadores, cabos de aço, cabos para academia, cabos para elevadores, cintas de poliéster, laços de cabos de aço, elevação de cargas, movimentação de cargas, amarração de cargas, segurança, qualidade, RM Triunfo Cabos",
  authors: [{ name: "Lorenzo-alt", url: "https://github.com/Lorenzo-alt" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: "Produtos | RM Trinfo Cabos",
    title: "Produtos | RM Trinfo Cabos",
    description:
      "RM Triunfo Cabos oferece cabos de aço e acessórios para elevação, movimentação e amarração de cargas. Alta qualidade, durabilidade e variedade. Encontre o cabo ideal para sua necessidade!",
    url: "link",
  },
  twitter: {
    title: "Produtos | RM Trinfo Cabos",
    description:
      "RM Triunfo Cabos oferece cabos de aço e acessórios para elevação, movimentação e amarração de cargas. Alta qualidade, durabilidade e variedade. Encontre o cabo ideal para sua necessidade!",
    creator: "Lorenzo-alt",
  },
};



export default async function Produtos() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-full max-w-[2560px]">
      <section className="bg-azul-titulo w-full">
        <div className="bg-fundo-header bg-cover bg-center h-[210px] md:h-[260px] lg:h-[330px] xl:h-[380px] 2xl:h-[420px] flex items-center justify-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono text-white font-bold px-2 drop-shadow-[2px_0px_0px_rgba(173,173,173,1)]">
            PRODUTOS
          </h1>
        </div>
      </section>
      <section className="flex flex-col lg:items-center">
        <div className="flex gap-8 md:gap-10 xl:gap-14 2xl:gap-20 flex-wrap items-center justify-center p-8 lg:p-10 xl:p-16 2xl:p-20 max-w-[1920px]">
          {listaDeTiposDeProdutos.map((item, index) => {
            return (
              <Link
                href={
                  "produtos/" +
                  item.nome
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replaceAll(" ", "-")
                    .replaceAll("/", "-")
                }
                key={item.nome + index}
                className="w-[180px] h-[220px] md:w-[230px] md:h-[270px] lg:w-[280px] lg:h-[320px] xl:w-[330px] xl:h-[370px] 2xl:w-[350px] 2xl:h-[390px] bg-cinza-claro shadow-[0px_0px_10px_rgba(0,0,0,0.25)] p-1 lg:p-2 flex flex-col gap-2"
              >
                <Image
                  src={item.foto}
                  alt="aaa"
                  width={1920}
                  height={1080}
                  className="w-full h-[150px] md:h-[200px] lg:h-[240px] xl:h-[280px] 2xl:h-[300px] object-contain p-10 xl:p-16"
                />
                <div className="text-wrap md:text-lg lg:text-xl xl:text-2xl font-bold font-mono text-azul-titulo break-words whitespace-pre-line">
                  <p className="truncate-multiline text-center px-2">
                    {item.nome}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <FormContato />
    </main>
  );
}
