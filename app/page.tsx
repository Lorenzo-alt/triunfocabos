import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | RM Trinfo Cabos",
  description: "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
  keywords: "cabos de aço, Triunfo Cabos, acessórios para elevadores, cabos de aço, cabos para academia, cabos para elevadores, cintas de poliéster, laços de cabos de aço, elevação de cargas, movimentação de cargas, amarração de cargas, segurança, qualidade, RM Triunfo Cabos",
  authors: [{name: 'Lorenzo-alt', url: 'https://github.com/Lorenzo-alt'}],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: "Home | RM Trinfo Cabos",
    title: "Home | RM Trinfo Cabos",
    description: "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
    url: 'link'
  },
  twitter: {
    title: "Home | RM Trinfo Cabos",
    description: "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
    creator: 'Lorenzo-alt',
  }
};

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section>
        <p>
          Construa com segurança, escolha nossos produtos para garantir a
          solidez de seus projetos.
        </p>
      </section>
      <section>
        <div>
          <h1>TRIUNFO CABOS</h1>
          <div>
            Na Triunfo Cabos, excelência é mais do que um compromisso é uma
            filosofia que impregna tudo o que fazemos. Desde a concepção até a
            entrega, nos dedicamos incansavelmente a garantir a mais alta
            qualidade em todos os nossos produtos e serviços. Os cabos de aço
            que trabalhamos são fabricados com os mais rigorosos padrões de
            qualidade e segurança, utilizando materiais de primeira linha e
            tecnologia de ponta. Além disso, investimos constantemente em
            pesquisa e desenvolvimento para garantir que os produtos atendam e
            excedam as expectativas de nossos clientes. Na Triunfo Cabos, a
            qualidade é nossa prioridade número um, e estamos comprometidos em
            oferecer produtos que ofereçam desempenho excepcional e durabilidade
            incomparável.
          </div>
        </div>
      </section>
      <section>
        <h2>PRODUTOS</h2>
      </section>
      <section>
        <h2>SERVIÇOS</h2>
        <span>Descubra a excelência em movimentação e amarração de carga com a Triunfo Cabos. Além de fornecer os mais confiáveis materiais, apresentamos uma gama de serviços para complementar sua experiência</span>
        <h3>INSPEÇÃO, REBOBINAMENTO, LUBRIFICAÇÃO DE CABOS DE AÇO</h3>
        <h3>EMENDA EM CABOS DE AÇO</h3>
        <h3>SOQUETAGEM</h3>
        <h3>TREINAMENTO</h3>
      </section>
      <section>
        <h2>DIFERENCIAIS</h2>
        <h3>Produtos Certificados</h3>
        <h3>Qualidade</h3>
        <h3>Atendimento personalizado</h3>
        <h3>Experiencia e Suporte</h3>
      </section>
      <section>
        <h2>ATENDIMENTO</h2>
      </section>
    </main>
  );
}
