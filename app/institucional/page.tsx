import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institucional | RM Trinfo Cabos",
  description: "A Triunfo Cabos está comprometida com a qualidade em todos os aspectos de suas atividades, desde a seleção de fornecedores até a entrega final dos produtos aos seus clientes.",
  keywords: "cabos de aço, Triunfo Cabos, acessórios para elevadores, cabos de aço, cabos para academia, cabos para elevadores, cintas de poliéster, laços de cabos de aço, elevação de cargas, movimentação de cargas, amarração de cargas, segurança, qualidade, RM Triunfo Cabos",
  authors: [{name: 'Lorenzo-alt', url: 'https://github.com/Lorenzo-alt'}],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: "Institucional | RM Trinfo Cabos",
    title: "Institucional | RM Trinfo Cabos",
    description: "A Triunfo Cabos está comprometida com a qualidade em todos os aspectos de suas atividades, desde a seleção de fornecedores até a entrega final dos produtos aos seus clientes.",
    url: 'link'
  },
  twitter: {
    title: "Institucional | RM Trinfo Cabos",
    description: "A Triunfo Cabos está comprometida com a qualidade em todos os aspectos de suas atividades, desde a seleção de fornecedores até a entrega final dos produtos aos seus clientes.",
    creator: 'Lorenzo-alt',
  }
};

export default async function Institucional() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section>
        <h1>INSTITUCIONAL</h1>
      </section>
      <section>
        <p>
          Políticas de Qualidade: A Triunfo Cabos está comprometida com a
          qualidade em todos os aspectos de suas atividades, desde a seleção de
          fornecedores até a entrega final dos produtos aos seus clientes.
          Nossos princípios orientadores: Atender às necessidades e expectativas
          dos clientes. Fornecer produtos de alta qualidade com os melhores
          materiais e processos rigorosos de controle. Aprimorar continuamente
          os processos para aumentar a eficiência, reduzir custos e oferecer
          produtos cada vez melhores. Promover uma cultura de padrão e investir
          na capacitação dos colaboradores para o compromisso com a melhora.
          Manter um Sistema de Gestão da Qualidade eficaz e cumprir as normas e
          regulamentações aplicáveis. Nossos compromissos se baseiam em:
          Fornecer produtos e serviços de alta qualidade que atendam às
          necessidades e expectativas dos clientes. Cumprir todas as normas e
          regulamentações aplicáveis ao seu setor de atuação. Aprimorar
          continuamente seus processos e sistemas de gestão. Investir na
          capacitação e desenvolvimento dos seus colaboradores. Promover uma
          cultura de padrão em toda a organização. Manter um diálogo aberto e
          transparente com seus clientes, fornecedores e colaboradores.
        </p>
      </section>
      <section>
        <p>RM Triunfo Cabos: A qualidade que você busca, para o seu sucesso.</p>
        <div>
          <p>
            Missão: Ser a referência em soluções completas e personalizadas em
            cabos de aço, atendendo às mais variadas necessidades dos clientes
            com excelência e confiabilidade. Visão: Consolidar a RM Triunfo
            Cabos como líder no mercado nacional de distribuição de cabos de
            aço, expandindo sua atuação para o mercado internacional e se
            tornando referência em inovação e sustentabilidade. Valores: Cliente
            em primeiro lugar: Buscamos a satisfação total dos nossos clientes
            através de um atendimento diferenciado, soluções personalizadas e
            produtos de alta qualidade. Excelência em tudo que
            fazemos: Perseguimos a excelência em todas as etapas de nossos
            processos, desde a seleção de materiais até a entrega final,
            garantindo a qualidade e confiabilidade dos nossos produtos.
            Inovação constante: Buscamos constantemente novas tecnologias e
            soluções inovadoras para atender às necessidades dos nossos clientes
            e do mercado. Sustentabilidade: Nos comprometemos com práticas
            sustentáveis em todas as nossas atividades, minimizando o impacto
            ambiental e promovendo o desenvolvimento social. Ética e
            responsabilidade: Atuamos com ética e responsabilidade em todas as
            nossas relações, com nossos clientes, colaboradores, fornecedores e
            a comunidade. Trabalho em equipe: Valorizamos o trabalho em equipe,
            a colaboração e o respeito mútuo entre nossos colaboradores,
            reconhecendo a importância de cada um para o alcance dos nossos
            objetivos. Compromisso com o cliente: Acreditamos em um
            relacionamento duradouro com os nossos clientes, baseado na
            confiança, na transparência e no compromisso com a qualidade.
          </p>
        </div>
      </section>
    </main>
  );
}
