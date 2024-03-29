import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicos | RM Trinfo Cabos",
  description: "A Triunfo Cabos é referência nos setores de movimentação e amarração de carga, e nossos serviços são projetados para garantir a segurança e eficiência em todas as etapas. Aqui estão os principais serviços que oferecemos.",
  keywords: "cabos de aço, Triunfo Cabos, acessórios para elevadores, cabos de aço, cabos para academia, cabos para elevadores, cintas de poliéster, laços de cabos de aço, elevação de cargas, movimentação de cargas, amarração de cargas, segurança, qualidade, RM Triunfo Cabos",
  authors: [{name: 'Lorenzo-alt', url: 'https://github.com/Lorenzo-alt'}],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: "Servicos | RM Trinfo Cabos",
    title: "Servicos | RM Trinfo Cabos",
    description: "A Triunfo Cabos é referência nos setores de movimentação e amarração de carga, e nossos serviços são projetados para garantir a segurança e eficiência em todas as etapas. Aqui estão os principais serviços que oferecemos.",
    url: 'link'
  },
  twitter: {
    title: "Servicos | RM Trinfo Cabos",
    description: "A Triunfo Cabos é referência nos setores de movimentação e amarração de carga, e nossos serviços são projetados para garantir a segurança e eficiência em todas as etapas. Aqui estão os principais serviços que oferecemos.",
    creator: 'Lorenzo-alt',
  }
};

export default async function Servicos() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section>
        <h1>SERVIÇOS</h1>
      </section>
      <section>
        <p>
          A Triunfo Cabos é referência nos setores de movimentação e amarração
          de carga, e nossos serviços são projetados para garantir a segurança e
          eficiência em todas as etapas. Aqui estão os principais serviços que
          oferecemos:
        </p>
        <h3>INSPEÇÃO, REBOBINAMENTO, LUBRIFICAÇÃO DE CABOS DE AÇO</h3>
        <h3>EMENDA EM CABOS DE AÇO</h3>
        <h3>SOQUETAGEM</h3>
        <h3>TREINAMENTO</h3>
        <p>
          Na RM Triunfo Cabos, estamos comprometidos em fornecer soluções
          completas para nossos clientes, desde materiais confiáveis até
          serviços de alta qualidade. Conte conosco para todas as suas
          necessidades!
        </p>
      </section>
      <section>
        <h2>ATENDIMENTO</h2>
      </section>
    </main>
  );
}
