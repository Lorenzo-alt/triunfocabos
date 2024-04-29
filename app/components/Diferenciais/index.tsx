"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CertIcon from "@/public/produtos-certificados.svg";
import QualIcon from "@/public/qualidade.svg";
import AtendIcon from "@/public/atendimento-perso.svg";
import ExpIcon from "@/public/experiencia.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { title } from "process";

const diferenciaisData = [
  [
    {
      title: "Produtos Certificado",
      desc: "Nossa empresa adere rigorosamente às normas e legislações em vigor, garantindo que todos os nossos produtos atendam às especificações de carga, uso e segurança exigidas.",
      icon: <CertIcon className="w-[30px] h-auto lg:w-[50px] xl:w-[60px]" />,
    },
    {
      title: "Qualidade",
      desc: "Realizamos um controle de qualidade rigoroso em todos os produtos que trabalhamos, desde o início até o final do processo.",
      icon: <QualIcon className="w-[30px] h-auto fill-white lg:w-[50px] xl:w-[60px]" />,
    },
  ],
  [
    {
      title: "Atendimento personalizado",
      desc: "Oferecemos um atendimento diferenciado, personalizado e soluções completas, com foco nas necessidades específicas de cada cliente em diversos setores da indústria, construção civil, e outros.",
      icon: <AtendIcon className="w-[30px] h-auto fill-white lg:w-[50px] xl:w-[60px]" />,
    },
    {
      title: "Experiencia e Suporte",
      desc: "Possuimos uma equipe altamente qualificada e experiente, com profundo conhecimento técnico e expertise na área de cabos de aço e serviços relacionados.",
      icon: <ExpIcon className="w-[30px] h-auto fill-white lg:w-[50px] xl:w-[60px]" />,
    },
  ],
];

export default function index() {
  return (
    <section className="w-full lg:flex lg:p-10 xl:p-20 2xl:p-28 2xl:gap-32 lg:items-center lg:gap-10">
      <div className="w-auto h-[230px] sm:h-[300px] bg-cover bg-foto-diferenciais p-4 lg:h-[520px] lg:min-w-[380px] xl:min-w-[530px] xl:h-[768px] bg-center order-2">
        <div className="w-full h-full p-4 border border-white"></div>
      </div>
      <div className="w-full p-2 lg:p-0 order-1 flex flex-col gap-3 xl:gap-5">
        <h2 className="w-full hidden lg:block lg:text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono text-azul-titulo font-bold drop-shadow-[2px_0px_0px_rgba(47,67,80,1)]">
          DIFERENCIAS
        </h2>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          initialSlide={0}
          autoplay={{ delay: 11000 }}
          direction={"vertical"}
          navigation
          // @ts-ignore
          style={{ "--swiper-navigation-size": "24px", gap: "24px" }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          touchStartPreventDefault={false}
          className="bg-cinza teste w-full rounded-[10px] h-[400px] lg:h-[450px] xl:h-[530px] p-6 flex justify-center flex-col gap-6"
        >
          {diferenciaisData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="h-full p-6 md:p-8 flex justify-center flex-col gap-6">
                  {item.map((item, index) => {
                    return (
                      <div
                        key={item.title + index}
                        className="bg-cinza-claro p-1.5 md:p-4 pb-4 md:pb-6 lg:pb-4 rounded-[10px] flex items-center lg:gap-2"
                      >
                        <div className="bg-azul-claro rounded-[10px] lg:min-w-[92px] lg:h-[92px] xl:min-w-[102px] xl:h-[102px] 2xl:min-w-[132px] 2xl:h-[132px] hidden lg:flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2 items-end justify-between">
                            <h3 className="truncate text-sm md:text-base xl:text-xl 2xl:text-2xl font-semibold text-azul-titulo pl-1">
                              {item.title}
                            </h3>
                            <div className="bg-azul-claro rounded-[10px] p-1.5 lg:hidden">
                              {item.icon}
                            </div>
                          </div>
                          <p className="text-justify px-1 text-xs md:text-sm xl:text-lg 2xl:text-xl">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
