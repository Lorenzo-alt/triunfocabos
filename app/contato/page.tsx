import { Metadata } from "next";
import VersionPage from "../components/FormContato/VersionPage";
import { IoCall, IoFlag, IoLogoWhatsapp, IoMail } from "react-icons/io5";
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import Titulo from "../components/Titulo";
import ConteudoContato from "../components/Contato/ConteudoContato";

export const metadata: Metadata = {
  title: "Contato | RM Triunfo Cabos",
  description:
    "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
  keywords:
    "cabos de aço, Triunfo Cabos, acessórios para elevadores, cabos de aço, cabos para academia, cabos para elevadores, cintas de poliéster, laços de cabos de aço, elevação de cargas, movimentação de cargas, amarração de cargas, segurança, qualidade, RM Triunfo Cabos",
  authors: [{ name: "Lorenzo-alt", url: "https://github.com/Lorenzo-alt" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: "Contato | RM Triunfo Cabos",
    title: "Contato | RM Triunfo Cabos",
    description:
      "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
    url: "link",
  },
  twitter: {
    title: "Contato | RM Triunfo Cabos",
    description:
      "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
    creator: "Lorenzo-alt",
  },
};

const blocksFooter = [
  {
    icone: (
      <IoCall
        color="#263945"
        fontSize={18}
        className="hidden lg:block xl:text-2xl"
      />
    ),
    dado: "(11) 95913-4847",
    link: "tel://5511959134847/",
  },
  {
    icone: (
      <IoLogoWhatsapp
        color="#263945"
        fontSize={18}
        className="hidden xl:block xl:text-2xl"
      />
    ),
    dado: "(11) 98391-3732",
    link: "https://api.whatsapp.com/send?phone=5511983913732&text=Ol%C3%A1,%20equipe%20da%20RM%20Triunfo%20Cabos!%20Tenho%20interesse%20em%20obter%20um%20or%C3%A7amento",
  },
  {
    icone: (
      <IoMail
        color="#263945"
        fontSize={18}
        className="hidden lg:block xl:text-2xl"
      />
    ),
    dado: "rm@triunfocabos.com.br",
    link: "mailto:rm@triunfocabos.com.br",
  },
  {
    icone: (
      <IoFlag
        color="#263945"
        fontSize={18}
        className="hidden lg:block min-w-[18px] xl:text-2xl"
      />
    ),
    dado: "R. Barretos, 289 - Alto da Mooca, São Paulo - SP, 03184-080",
    link: "tel://5511959134847/",
  },
];

const navSocial = [
  {
    icone: (
      <FiInstagram
        fontSize={20}
        className="text-white hover:text-[#E2E023] transition-all"
      />
    ),
    link: "https://www.instagram.com/",
  },
  {
    icone: (
      <FaFacebookF
        fontSize={20}
        className="text-white hover:text-[#E2E023] transition-all"
      />
    ),
    link: "https://web.facebook.com/",
  },
];

export default async function Contato() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-full max-w-[2560px]">
      <Titulo titulo="Contato"/>
      <ConteudoContato dadosContato={blocksFooter} dadosSocial={navSocial}/>
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.139222396708!2d-46.58782482466979!3d-23.56344277879831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f5c71c21a09%3A0xbc4748fbfdb1e8e!2sRm%20triunfo%20cabos!5e0!3m2!1spt-BR!2sbr!4v1713827856643!5m2!1spt-BR!2sbr"
          width="320"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full md:h-[560px] lg:h-[680px] xl:h-[760px]"
        ></iframe>
      </section>
    </main>
  );
}
