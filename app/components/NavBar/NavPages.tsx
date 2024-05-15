"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IoMenu } from "react-icons/io5";
import { listaDeTiposDeProdutos } from "@/app/lib/listas";
import DropDown from "./DropDown";

const navItems = [
  { path: "/", name: "Home" },
  { path: "/empresa", name: "Empresa" },
  { path: "/institucional", name: "Institucional" },
  { path: "/produtos", name: "Produtos" },
  { path: "/servicos", name: "Serviços" },
];

const useNavPagesHook = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !(ref.current as Node).contains(event.target as Node)) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    isMobile,
    setIsMobile,
    pathname,
    ref,
  };
};

export default function NavPages() {
  const { isMobile, pathname, ref, setIsMobile } = useNavPagesHook();
  const [openNav, setOpenNav] = useState<{
    produtos: boolean;
    servicos: boolean;
  }>({ produtos: false, servicos: false });

  return (
    <div ref={ref} className="flex items-center">
      <button
        onClick={() => {
          setIsMobile(!isMobile);
        }}
        className="w-[30px] h-[30px] flex items-center justify-center lg:hidden rounded-md bg-vermelho-principal shadow-[3px_3px_0px_rgba(60,14,9,0.70)]"
      >
        <IoMenu className="w-7 h-auto" />
      </button>
      <ul
        className={twMerge(
          "xl:gap-16 items-center font-medium is-dirty peer absolute top-0 right-0 lg:static font-mono hidden lg:flex  lg:gap-5",
          isMobile &&
            "bg-azul-principal gap-10 flex flex-col p-4 pb-8 -right-4 top-14 rounded-lg"
        )}
      >
        {navItems.map((item, index) => {
          return (
            <li
              key={item.name + index}
              onMouseEnter={() => {
                item.name === "Produtos" &&
                  setOpenNav((prevOpenNav) => {
                    return { ...prevOpenNav, produtos: true };
                  });
                item.name === "Serviços" &&
                  setOpenNav((prevOpenNav) => {
                    return { ...prevOpenNav, servicos: true };
                  });
              }}
              onMouseLeave={() => {
                item.name === "Produtos" &&
                  setOpenNav((prevOpenNav) => {
                    return { ...prevOpenNav, produtos: false };
                  });
                item.name === "Serviços" &&
                  setOpenNav((prevOpenNav) => {
                    return { ...prevOpenNav, servicos: false };
                  });
              }}
              className="relative h-[49px] flex"
            >
              <Link
                prefetch={false}
                href={item.path}
                onMouseEnter={() => {
                  item.name === "Produtos" &&
                    setOpenNav((prevOpenNav) => {
                      return { ...prevOpenNav, produtos: true };
                    });
                  item.name === "Serviços" &&
                    setOpenNav((prevOpenNav) => {
                      return { ...prevOpenNav, servicos: true };
                    });
                }}
                onMouseLeave={() => {
                  item.name === "Produtos" &&
                    setOpenNav((prevOpenNav) => {
                      return { ...prevOpenNav, produtos: false };
                    });
                  item.name === "Serviços" &&
                    setOpenNav((prevOpenNav) => {
                      return { ...prevOpenNav, servicos: false };
                    });
                }}
                className={twMerge(
                  "rounded-[10px] flex items-center justify-center hover:outline h-[49px] p-4 outline-1 text-sm xl:text-base font-medium transition-all outline-zinc-300/40 outline-offset-2 px-6 cursor-pointer",
                  (pathname.includes(item.name.toLowerCase()) ||
                    pathname === item.path) &&
                    "bg-azul-dark shadow-[4px_4px_0px_rgba(0,0,0,0.38)] font-bold"
                )}
              >
                {item.name}
              </Link>
              {item.name === "Produtos" && (
                <DropDown
                  setOpenNav={setOpenNav}
                  openNav={openNav}
                  dadoId={"produtos"}
                  name={item.name}
                />
              )}
              {item.name === "Serviços" && (
                <DropDown
                  setOpenNav={setOpenNav}
                  openNav={openNav}
                  dadoId={"servicos"}
                  name={item.name}
                />
              )}
            </li>
          );
        })}
        <li>
          <Link
            prefetch={false}
            href={"/contato"}
            className={twMerge(
              "rounded-[10px] text-sm font-medium cursor-pointer p-4 px-12 bg-vermelho-principal shadow-[4px_4px_0px_rgba(60,14,9,0.70)]"
            )}
          >
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
}
