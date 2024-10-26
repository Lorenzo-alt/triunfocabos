"use client";
import React from "react";
import WhatsIcon from "@/public/whats-svg.svg";

export default function WhatsButton() {
  return (
    <div className="absolute self-end h-full overflow-visible w-0 pb-5 flex items-end">
      <div
        onClick={() => {
          if (window)
            window.open(
              "https://wa.me/5511959134847?text=Ol%C3%A1!%20Gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20produtos%20e%20servi%C3%A7os%20de%20cabos%20de%20a%C3%A7o.",
              "_blank"
            );
        }}
        className="sticky z-50 flex flex-col gap-1 items-center  2xl:w-[105px] text-center justify-center font-bold p-2 text-white cursor-pointer bottom-5 -ml-16 lg:-ml-24 2xl:-ml-32 border-white transition-all  lg:bg-[#30b844]/80 lg:hover:bg-[#30b844] rounded-lg hover:scale-110 h-auto text-[10px] 2xl:text-xs"
      >
        <span className="select-none hidden lg:block">Atendimento</span>
        <WhatsIcon />
      </div>
    </div>
  );
}
