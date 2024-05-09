import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Empresa | RM Trinfo Cabos",
  description:
    "Somos RM Triunfo Cabos fundada em 2023. Ao longo dessa trajetória, a empresa conquistou a confiança de clientes dos mais diversos setores, oferecendo soluções completas e personalizadas em cabos de aço para atender às mais variadas necessidades.",
  keywords:
    "cabos de aço, Triunfo Cabos, acessórios para elevadores, cabos de aço, cabos para academia, cabos para elevadores, cintas de poliéster, laços de cabos de aço, elevação de cargas, movimentação de cargas, amarração de cargas, segurança, qualidade, RM Triunfo Cabos",
  authors: [{ name: "Lorenzo-alt", url: "https://github.com/Lorenzo-alt" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: "Empresa | RM Trinfo Cabos",
    title: "Empresa | RM Trinfo Cabos",
    description:
      "Somos RM Triunfo Cabos fundada em 2023. Ao longo dessa trajetória, a empresa conquistou a confiança de clientes dos mais diversos setores, oferecendo soluções completas e personalizadas em cabos de aço para atender às mais variadas necessidades.",
    url: "link",
  },
  twitter: {
    title: "Empresa | RM Trinfo Cabos",
    description:
      "Somos RM Triunfo Cabos fundada em 2023. Ao longo dessa trajetória, a empresa conquistou a confiança de clientes dos mais diversos setores, oferecendo soluções completas e personalizadas em cabos de aço para atender às mais variadas necessidades.",
    creator: "Lorenzo-alt",
  },
};

export default async function Empresa() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-full max-w-[2560px]">
      <section className="bg-azul-titulo w-full">
        <div className="bg-fundo-header bg-cover bg-center h-[210px] md:h-[260px] lg:h-[330px] xl:h-[380px] 2xl:h-[420px] flex items-center justify-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono text-white font-bold px-2 drop-shadow-[2px_0px_0px_rgba(173,173,173,1)]">
            EMPRESA
          </h1>
        </div>
      </section>
      <section>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl p-8 md:px-14 lg:p-10 2xl:p-14 lg:px-32 xl:px-44 2xl:px-60 text-justify">
          Somos RM Triunfo Cabos fundada em 2023. Ao longo dessa trajetória, a
          empresa conquistou a confiança de clientes dos mais diversos setores,
          oferecendo soluções completas e personalizadas em cabos de aço para
          atender às mais variadas necessidades. <br />
          <br />A Triunfo Cabos possui um amplo portfólio de cabos de aço,
          abrangendo uma gama completa de materiais, diâmetros e construções. A
          empresa se destaca pelo seu profundo conhecimento técnico e expertise
          na área. <br />
          <br />
          Trabalhamos com materiais para elevação, movimentação e amarração de
          cargas, em nossa linha possuímos cabos de aço direcionados para
          diversas formas de trabalho, laços de cabos de aço para elevação de
          materiais, cintas de poliéster coloridas com normas americana, cabos
          para academia em nylon, cabos para elevadores de passageiros e uma
          diversidade de acessórios e materiais específicos para atender vossa
          necessidade. Teremos o maior prazer em poder estar fazendo parte de
          vossa empresa e ofertar nossos produtos e serviços. <br />
          <br />
          Nossa ampla gama de produtos inclui:
          <br />
          <br /> <strong> Cabos de aço:</strong> para diversas aplicações, desde
          a construção civil até a indústria naval, com diâmetros e acabamentos
          variados para atender às suas necessidades específicas. <br />
          <strong>Laços de cabos de aço: </strong>para elevação segura de
          materiais, com diferentes capacidades de carga e designs ergonômicos
          para facilitar o manuseio. <br />
          <strong>Cintas de poliéster coloridas:</strong> com normas americanas
          de segurança, para amarração de cargas com máxima resistência e
          durabilidade.
          <br /> <strong>Cabos para academia em nylon:</strong> ideais para
          exercícios físicos e treinamento funcional, com diferentes espessuras
          e cores para todos os níveis de condicionamento físico.
          <br /> <strong>Cabos para elevadores de passageiros:</strong>{" "}
          projetados para garantir a segurança e o bom funcionamento dos
          elevadores, com alta resistência à tração e longa vida útil.
          <br />
          <strong>Acessórios e materiais específicos:</strong> como manilhas,
          ganchos, talhas, polias e lubrificantes, para complementar suas
          soluções de elevação e movimentação de cargas. <br />
          <br />
          Por que escolher a RM Triunfo Cabos?
          <br />
          <br />
          <strong>Experiência:</strong> equipe com mais de 20 anos de
          experiência no mercado, atendendo a diversos setores e garantindo a
          qualidade de nossos produtos e serviços.
          <br /> <strong>Qualidade:</strong> Produtos com certificação de
          qualidade e normas internacionais, para sua segurança e tranquilidade.
          <br />
          <strong>Variedade:</strong> Ampla gama de produtos para atender às
          suas necessidades específicas, desde cabos de aço até acessórios e
          materiais complementares.
          <br /> <strong>Atendimento personalizado:</strong> Uma equipe
          altamente qualificada para te auxiliar na escolha dos produtos ideais
          para o seu projeto e te oferecer um atendimento diferenciado.
          <br /> <strong>Compromisso com o cliente:</strong> Buscamos
          constantemente a sua satisfação, oferecendo soluções completas, preços
          competitivos e prazos de entrega flexíveis.
        </p>
      </section>
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
