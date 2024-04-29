import { Metadata } from "next";
import VersionPage from "../components/FormContato/VersionPage";
import { IoCall, IoFlag, IoLogoWhatsapp, IoMail } from "react-icons/io5";
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contato | RM Trinfo Cabos",
  description:
    "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
  keywords:
    "cabos de aço, Triunfo Cabos, acessórios para elevadores, cabos de aço, cabos para academia, cabos para elevadores, cintas de poliéster, laços de cabos de aço, elevação de cargas, movimentação de cargas, amarração de cargas, segurança, qualidade, RM Triunfo Cabos",
  authors: [{ name: "Lorenzo-alt", url: "https://github.com/Lorenzo-alt" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: "Contato | RM Trinfo Cabos",
    title: "Contato | RM Trinfo Cabos",
    description:
      "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
    url: "link",
  },
  twitter: {
    title: "Contato | RM Trinfo Cabos",
    description:
      "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
    creator: "Lorenzo-alt",
  },
};

const blocksFooter = [
  {
    icone: <IoCall color="#263945" fontSize={18} className="hidden lg:block xl:text-2xl" />,
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
    dado: "(11) 95913-4847",
    link: "tel://5511959134847/",
  },
  {
    icone: <IoMail color="#263945" fontSize={18} className="hidden lg:block xl:text-2xl" />,
    dado: "email.email@email.com",
    link: "tel://5511959134847/",
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
      <FiInstagram fontSize={20} className="text-white hover:text-[#E2E023] transition-all" />
    ),
    link: "https://www.instagram.com/", 
  },
  {
    icone: (
      <FaFacebookF fontSize={20} className="text-white hover:text-[#E2E023] transition-all" />
    ), 
    link: "https://web.facebook.com/",
  },
];

export default async function Contato() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-full max-w-[2560px]">
      <section className="bg-azul-titulo w-full">
        <div className="bg-fundo-header bg-cover bg-center h-[210px] md:h-[260px] lg:h-[330px] xl:h-[380px] 2xl:h-[420px] flex items-center justify-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono text-white font-bold px-2 drop-shadow-[2px_0px_0px_rgba(173,173,173,1)]">
            CONTATO
          </h1>
        </div>
      </section>
      <section className="w-full flex flex-col gap-10 xl:flex-row justify-center p-5 lg:p-10 lg:px-32">
        <div className="xl:w-8/12 2xl:w-6/12">
          <VersionPage />
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-wrap justify-center xl:flex-col gap-3 ">
            <span className="font-bold flex justify-center xl:justify-start w-full xl:w-auto md:text-lg xl:text-xl 2xl:text-2xl font-mono uppercase">
              contato
            </span>
            {(
              blocksFooter as {
                icone: JSX.Element;
                dado: string;
                link: string;
              }[]
            ).map((item, index) => (
              <Link
                href={item.link}
                key={item.dado.length + index}
                className="hover:underline flex gap-2"
              >
                {item.icone}
                <p className="max-w-60 text-center xl:text-left text-sm md:text-base xl:text-lg 2xl:text-xl xl:max-w-max">
                  {item.dado}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center xl:flex-col gap-3 mb-10">
            <span className="font-bold flex justify-center xl:justify-start w-full xl:w-auto md:text-lg xl:text-xl 2xl:text-2xl font-mono uppercase">
              REDES SOCIAIS
            </span>
            <div className="flex gap-2">
            {navSocial.map((item, index) => {
              return <Link href={item.link} className="flex items-center  justify-center rounded-full w-10 h-10 bg-[#20303B]" key={item.link.length + index}>
                {item.icone}
              </Link>
            })}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.139222396708!2d-46.58782482466979!3d-23.56344277879831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f5c71c21a09%3A0xbc4748fbfdb1e8e!2sRm%20triunfo%20cabos!5e0!3m2!1spt-BR!2sbr!4v1713827856643!5m2!1spt-BR!2sbr"
          width="320"
          height="450"
          style={{border: 0}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full md:h-[560px] lg:h-[680px] xl:h-[760px]"
        ></iframe>
      </section>
    </main>
  );
}
