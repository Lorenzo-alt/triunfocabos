import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos | RM Trinfo Cabos",
  description: "RM Triunfo Cabos oferece cabos de aço e acessórios para elevação, movimentação e amarração de cargas. Alta qualidade, durabilidade e variedade. Encontre o cabo ideal para sua necessidade!",
  keywords: "cabos de aço, Triunfo Cabos, acessórios para elevadores, cabos de aço, cabos para academia, cabos para elevadores, cintas de poliéster, laços de cabos de aço, elevação de cargas, movimentação de cargas, amarração de cargas, segurança, qualidade, RM Triunfo Cabos",
  authors: [{name: 'Lorenzo-alt', url: 'https://github.com/Lorenzo-alt'}],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: "Produtos | RM Trinfo Cabos",
    title: "Produtos | RM Trinfo Cabos",
    description: "RM Triunfo Cabos oferece cabos de aço e acessórios para elevação, movimentação e amarração de cargas. Alta qualidade, durabilidade e variedade. Encontre o cabo ideal para sua necessidade!",
    url: 'link'
  },
  twitter: {
    title: "Produtos | RM Trinfo Cabos",
    description: "RM Triunfo Cabos oferece cabos de aço e acessórios para elevação, movimentação e amarração de cargas. Alta qualidade, durabilidade e variedade. Encontre o cabo ideal para sua necessidade!",
    creator: 'Lorenzo-alt',
  }
};

export default async function Produtos() {
  return (
    <main className="flex flex-col items-center justify-center">
        <section>
            <h1>PRODUTOS</h1>
        </section>
    </main>
  )
}
