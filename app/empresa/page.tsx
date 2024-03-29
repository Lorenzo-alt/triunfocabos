import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empresa | RM Trinfo Cabos",
  description: "Somos RM Triunfo Cabos fundada em 2023. Ao longo dessa trajetória, a empresa conquistou a confiança de clientes dos mais diversos setores, oferecendo soluções completas e personalizadas em cabos de aço para atender às mais variadas necessidades.",
  keywords: "cabos de aço, Triunfo Cabos, acessórios para elevadores, cabos de aço, cabos para academia, cabos para elevadores, cintas de poliéster, laços de cabos de aço, elevação de cargas, movimentação de cargas, amarração de cargas, segurança, qualidade, RM Triunfo Cabos",
  authors: [{name: 'Lorenzo-alt', url: 'https://github.com/Lorenzo-alt'}],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: "Empresa | RM Trinfo Cabos",
    title: "Empresa | RM Trinfo Cabos",
    description: "Somos RM Triunfo Cabos fundada em 2023. Ao longo dessa trajetória, a empresa conquistou a confiança de clientes dos mais diversos setores, oferecendo soluções completas e personalizadas em cabos de aço para atender às mais variadas necessidades.",
    url: 'link'
  },
  twitter: {
    title: "Empresa | RM Trinfo Cabos",
    description: "Somos RM Triunfo Cabos fundada em 2023. Ao longo dessa trajetória, a empresa conquistou a confiança de clientes dos mais diversos setores, oferecendo soluções completas e personalizadas em cabos de aço para atender às mais variadas necessidades.",
    creator: 'Lorenzo-alt',
  }
};

export default async function Empresa() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section>
        <h1>EMPRESA</h1>
      </section>
      <section>
        <p>
          Somos RM Triunfo Cabos fundada em 2023. Ao longo dessa trajetória, a
          empresa conquistou a confiança de clientes dos mais diversos setores,
          oferecendo soluções completas e personalizadas em cabos de aço para
          atender às mais variadas necessidades. A Triunfo Cabos possui um amplo
          portfólio de cabos de aço, abrangendo uma gama completa de materiais,
          diâmetros e construções. A empresa se destaca pelo seu profundo
          conhecimento técnico e expertise na área. Trabalhamos com materiais
          para elevação, movimentação e amarração de cargas, em nossa linha
          possuímos cabos de aço direcionados para diversas formas de trabalho,
          laços de cabos de aço para elevação de materiais, cintas de poliéster
          coloridas com normas americana, cabos para academia em nylon, cabos
          para elevadores de passageiros e uma diversidade de acessórios e
          materiais específicos para atender vossa necessidade. Teremos o maior
          prazer em poder estar fazendo parte de vossa empresa e ofertar nossos
          produtos e serviços. Nossa ampla gama de produtos inclui: Cabos de
          aço: para diversas aplicações, desde a construção civil até a
          indústria naval, com diâmetros e acabamentos variados para atender às
          suas necessidades específicas. Laços de cabos de aço: para elevação
          segura de materiais, com diferentes capacidades de carga e designs
          ergonômicos para facilitar o manuseio. Cintas de poliéster coloridas:
          com normas americanas de segurança, para amarração de cargas com
          máxima resistência e durabilidade. Cabos para academia em nylon:
          ideais para exercícios físicos e treinamento funcional, com diferentes
          espessuras e cores para todos os níveis de condicionamento físico.
          Cabos para elevadores de passageiros: projetados para garantir a
          segurança e o bom funcionamento dos elevadores, com alta resistência à
          tração e longa vida útil. Acessórios e materiais específicos: como
          manilhas, ganchos, talhas, polias e lubrificantes, para complementar
          suas soluções de elevação e movimentação de cargas. Por que escolher a
          RM Triunfo Cabos? Experiência: equipe com mais de 20 anos de
          experiência no mercado, atendendo a diversos setores e garantindo a
          qualidade de nossos produtos e serviços. Qualidade: Produtos com
          certificação de qualidade e normas internacionais, para sua segurança
          e tranquilidade. Variedade: Ampla gama de produtos para atender às
          suas necessidades específicas, desde cabos de aço até acessórios e
          materiais complementares. Atendimento personalizado: Uma equipe
          altamente qualificada para te auxiliar na escolha dos produtos ideais
          para o seu projeto e te oferecer um atendimento diferenciado.
          Compromisso com o cliente: Buscamos constantemente a sua satisfação,
          oferecendo soluções completas, preços competitivos e prazos de entrega
          flexíveis.
        </p>
      </section>
      <section>
        <p>
          Triunfo Cabos, sua parceira para elevação, movimentação e amarração de
          cargas. Juntos, podemos alcançar novos patamares de sucesso!
        </p>
        <button>
          Entre em contato conosco e solicite um orçamento sem compromisso
        </button>
      </section>
    </main>
  );
}
