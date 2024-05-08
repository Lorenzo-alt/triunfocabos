import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoFlag } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import NavPages from "./NavPages";

const navInfos = [
  {
    icone: <IoCall color="#E2E023" fontSize={18} />,
    text: "+55 11 95913-4847",link: "tel://5511959134847/"
  },
  {
    icone: <IoMail color="#E2E023" fontSize={18} />,
    text: "rm@triunfocabos.com.br",
    link: "mailto:rm@triunfocabos.com.br"
  },
  {
    icone: <IoFlag color="#E2E023" fontSize={18} />,
    text: "R. Barretos, 289 - Alto da Mooca, São Paulo - SP",
    link: "https://maps.app.goo.gl/sXbv872agVW6ym6k6",
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

export default function NavBar() {
  return (
    <nav className="bg-azul-principal sticky z-20 top-0 w-full flex flex-col gap-2 lg:gap-3 xl:gap-2 xl:px-6 px-5 py-3 xl:py-2 shadow-[0px_4.0px_10.0px_rgba(0,0,0,0.38)]">
      <div className="justify-between text-white 2xl:px-40 hidden lg:flex">
        <div className="flex gap-10 lg:text-xs">
          {navInfos.map((item, index) => {
            return (
              <a
                className="flex gap-1 items-center hover:text-[#E2E023] cursor-pointer transition-all"
                href={item.link}
                target="_blank" rel="noopener noreferrer"
                key={index}
              >
                {item.icone}
                <span>{item.text}</span>
              </a>
            );
          })}
        </div>
        <div className="flex gap-2 lg:text-xs">
          {navSocial.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                {item.icone}
              </Link>
            );
          })}
        </div>
      </div>
      <span className="bg-white/80 w-full h-0.5 rounded-full hidden lg:block" />
      <div className="flex justify-between items-center text-white 2xl:px-40 xl:py-1 relative">
        <Logo viewBox="0 0 1600 1527" className="h-auto xl:w-20 w-16" />
        <NavPages />
      </div>
    </nav>
  );
}
