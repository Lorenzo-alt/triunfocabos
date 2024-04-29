import { Metadata } from "next";

import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Produtos from "./components/Produtos";
import Servicos from "./components/Servicos";
import Diferenciais from "./components/Diferenciais";
import FormContato from "./components/FormContato";

export const metadata: Metadata = {
  title: "Home | RM Trinfo Cabos",
  description:
    "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
  keywords:
    "cabos de aço, Triunfo Cabos, acessórios para elevadores, cabos de aço, cabos para academia, cabos para elevadores, cintas de poliéster, laços de cabos de aço, elevação de cargas, movimentação de cargas, amarração de cargas, segurança, qualidade, RM Triunfo Cabos",
  authors: [{ name: "Lorenzo-alt", url: "https://github.com/Lorenzo-alt" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: "Home | RM Trinfo Cabos",
    title: "Home | RM Trinfo Cabos",
    description:
      "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
    url: "link",
  },
  twitter: {
    title: "Home | RM Trinfo Cabos",
    description:
      "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
    creator: "Lorenzo-alt",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-full max-w-[2560px]">
      <Hero />
      <Sobre />
      <Produtos />
      <Servicos />
      <Diferenciais />
      <FormContato />
    </main>
  );
}
