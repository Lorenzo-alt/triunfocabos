'use client'
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { twMerge } from "tailwind-merge";
import SwiperItem from "./SwiperItem";

const dadosHero = [
  {
    text: "Construa com segurança, escolha nossos produtos para garantir a solidez de seus projetos.",
    path: { link: "/produtos", nome: "Produtos" },
    bg: "bg-img-hero1",
  },
  {
    text: "Soluções completas em cabos de aço para todos os seus projetos.",
    path: { link: "/servicos", nome: "Serviços" },
    bg: "bg-img-hero2",
  },
  {
    text: "Triunfo Cabos: A escolha certa para elevar seus projetos a novos patamares.",
    path: { link: "/contato", nome: "Contato" },
    bg: "bg-img-hero3",
  },
];



export default function SwiperHero() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, A11y]}
      slidesPerView={1}
      initialSlide={0}
      // autoplay={{ delay: 11000 }}
      navigation
      // @ts-ignore
      style={{ "--swiper-navigation-size": "24px" }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      touchStartPreventDefault={false}
      className="h-full w-full flex items-center justify-center text-white text-center font-semibold"
    >
      {dadosHero.map((item, index) => {
        return (
          <SwiperSlide
            key={item.path.nome + index}
            className={twMerge(
              "flex w-full items-center justify-center p-4 px-14 lg:p-10 xl:p-20 bg-cover bg-center",
              item.bg
            )}
          >
            <SwiperItem
              text={item.text}
              path={{ link: item.path.link, nome: item.path.nome }}
              index={index}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
