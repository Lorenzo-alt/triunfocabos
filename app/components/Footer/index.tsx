import Logo from "@/public/logo.svg";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoFlag } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";

const blocksFooter = [
  {
    text: "Estamos aqui para atender às suas necessidades com excelência e qualidade incomparáveis. Seja para projetos industriais, construção ou qualquer outra aplicação, estamos prontos para fornecer soluções sob medida para você. ",
    logo: <Logo viewBox="0 0 1600 1527" className="h-auto w-20" />,
  },
  [
    { path: "/", name: "Home" },
    { path: "/empresa", name: "Empresa" },
    { path: "/institucional", name: "Institucional" },
    { path: "/produtos", name: "Produtos" },
    { path: "/servicos", name: "Serviços" },
    { path: "/contato", name: "Contato" },
  ],
  [
    {
      icone: <IoCall color="#263945" fontSize={18} className="hidden xl:block"/>,
      dado: "(11) 95913-4847",
      link: "tel://5511959134847/",
    },
    {
      icone: <IoLogoWhatsapp color="#263945" fontSize={18} className="hidden xl:block"/>,
      dado: "(11) 98391-3732",
      link: "https://api.whatsapp.com/send?phone=5511983913732&text=Ol%C3%A1,%20equipe%20da%20RM%20Triunfo%20Cabos!%20Tenho%20interesse%20em%20obter%20um%20or%C3%A7amento",
    },
    {
      icone: <IoMail color="#263945" fontSize={18} className="hidden xl:block"/>,
      dado: "rm@triunfocabos.com.br",
      link: "mailto:rm@triunfocabos.com.br",
    },
    {
      icone: <IoFlag color="#263945" fontSize={18} className="hidden xl:block min-w-[18px]"/>,
      dado: "R. Barretos, 289 - Alto da Mooca, São Paulo - SP, 03184-080",
      link: "https://maps.app.goo.gl/sXbv872agVW6ym6k6",
    },
  ],
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

export default function index() {
  return (
    <footer className="bg-azul-principal w-full flex flex-col gap-10 py-5 px-6 text-white">
      <div className="flex justify-between items-start flex-col text-sm xl:text-base gap-6 xl:gap-0 xl:flex-row 2xl:px-40">
        <div className="flex-col gap-4 text-justify w-80 hidden xl:flex">
          <div>
            {(blocksFooter[0] as { text: string; logo: JSX.Element }).text}
          </div>
          {(blocksFooter[0] as { text: string; logo: JSX.Element }).logo}
        </div>
        <div className="flex flex-wrap justify-center xl:flex-col gap-3">
          <span className="font-bold flex justify-center xl:justify-start w-full xl:w-auto">Navegue</span>
          {(blocksFooter[1] as { path: string; name: string }[]).map(
            (item, index) => {
              return (
                <Link
                  href={item.path}
                  key={item.name + index}
                  className="hover:underline"
                >
                  {item.name}
                </Link>
              );
            }
          )}
        </div>
        <div className="flex flex-wrap justify-center xl:flex-col gap-3 xl:w-80"><span className="font-bold flex justify-center xl:justify-start w-full xl:w-auto xl:ml-7">Atendimento</span>
        {(blocksFooter[2] as { icone: JSX.Element, dado: string, link: string }[]).map((item, index) =>
          <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.dado.length + index} className="hover:underline flex gap-2">
            {item.icone}
            <p className="max-w-60 text-center xl:text-left xl:max-w-max">{item.dado}</p>
          </a>
          )}
        </div>
      </div>
      <div className="2xl:px-20">
          <div className="shadow-[0px_0px_20.0px_rgba(13,19,22,1)] flex items-center justify-between w-full px-4 xl:px-8 py-4 rounded-[20px] text-xs xl:text-sm">
            <div className="flex gap-1 flex-col xl:flex-row font-bold">{`RM Triunfo Cabos © - ${String(new Date().getFullYear())} - Todos os direitos reservados -`} <div className="hover:underline cursor-pointer hover:text-[#E2E023] transition-all">Privacidade</div></div>
            <div className="flex gap-2 ">{navSocial.map((item, index) => {
              return <Link href={item.link} className="flex items-center  justify-center rounded-full w-10 h-10 bg-[#20303B]" key={item.link.length + index}>
                {item.icone}
              </Link>
            })}</div>
          </div>
      </div>
    </footer>
  );
}
