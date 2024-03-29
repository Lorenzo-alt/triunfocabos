import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | RM Trinfo Cabos",
  description: "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
  keywords: "cabos de aço, Triunfo Cabos, acessórios para elevadores, cabos de aço, cabos para academia, cabos para elevadores, cintas de poliéster, laços de cabos de aço, elevação de cargas, movimentação de cargas, amarração de cargas, segurança, qualidade, RM Triunfo Cabos",
  authors: [{name: 'Lorenzo-alt', url: 'https://github.com/Lorenzo-alt'}],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: "Contato | RM Trinfo Cabos",
    title: "Contato | RM Trinfo Cabos",
    description: "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
    url: 'link'
  },
  twitter: {
    title: "Contato | RM Trinfo Cabos",
    description: "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
    creator: 'Lorenzo-alt',
  }
};

export default async function Contato() {
  return (
    <main className="flex flex-col items-center justify-center">
        <section>
            <h1>CONTATO</h1>
        </section>
    </main>
  )
}
