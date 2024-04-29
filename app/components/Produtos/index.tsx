import Image from "next/image";
import React from "react";

export default function index() {
  return (
    <section className="w-full flex flex-col lg:items-center bg-fundo2">
      <div className="w-full py-8 text-center bg-azul-titulo">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono text-white font-bold drop-shadow-[2px_0px_0px_rgba(173,173,173,1)]">
          PRODUTOS
        </h2>
      </div>
      <div className="flex gap-8 md:gap-10 xl:gap-14 2xl:gap-20 lg:flex-wrap lg:items-center lg:justify-center p-8 lg:p-10 xl:p-16 2xl:p-20 overflow-x-scroll overflow-y-hidden lg:overflow-visible max-w-[1920px]">
        <div className="w-[180px] h-[220px] md:w-[230px] md:h-[270px] lg:w-[280px] lg:h-[320px] xl:w-[330px] xl:h-[370px] 2xl:w-[350px] 2xl:h-[390px] bg-cinza-claro shadow-[0px_0px_10px_rgba(0,0,0,0.25)] p-1 lg:p-2 flex flex-col gap-2">
          <Image
            src={"/img-temp.jpg"}
            alt="aaa"
            width={1920}
            height={1080}
            className="w-full h-[150px] md:h-[220px] lg:h-[250px] xl:h-[290px] 2xl:h-[310px] object-cover"
          />
          <div className="text-wrap md:text-lg lg:text-xl xl:text-2xl font-bold font-mono text-azul-titulo break-words whitespace-pre-line">
            <p className="truncate-multiline text-center px-2">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
        </div>
        <div className="w-[180px] h-[220px] md:w-[230px] md:h-[270px] lg:w-[280px] lg:h-[320px] xl:w-[330px] xl:h-[370px] 2xl:w-[350px] 2xl:h-[390px] bg-cinza-claro shadow-[0px_0px_10px_rgba(0,0,0,0.25)] p-1 lg:p-2 flex flex-col gap-2">
          <Image
            src={"/img-temp.jpg"}
            alt="aaa"
            width={1920}
            height={1080}
            className="w-full h-[150px] md:h-[220px] lg:h-[250px] xl:h-[290px] 2xl:h-[310px] object-cover"
          />
          <div className="text-wrap md:text-lg lg:text-xl xl:text-2xl font-bold font-mono text-azul-titulo break-words whitespace-pre-line">
            <p className="truncate-multiline text-center px-2">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
        </div>
        <div className="w-[180px] h-[220px] md:w-[230px] md:h-[270px] lg:w-[280px] lg:h-[320px] xl:w-[330px] xl:h-[370px] 2xl:w-[350px] 2xl:h-[390px] bg-cinza-claro shadow-[0px_0px_10px_rgba(0,0,0,0.25)] p-1 lg:p-2 flex flex-col gap-2">
          <Image
            src={"/img-temp.jpg"}
            alt="aaa"
            width={1920}
            height={1080}
            className="w-full h-[150px] md:h-[220px] lg:h-[250px] xl:h-[290px] 2xl:h-[310px] object-cover"
          />
          <div className="text-wrap md:text-lg lg:text-xl xl:text-2xl font-bold font-mono text-azul-titulo break-words whitespace-pre-line">
            <p className="truncate-multiline text-center px-2">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
        </div>
        <div className="w-[180px] h-[220px] md:w-[230px] md:h-[270px] lg:w-[280px] lg:h-[320px] xl:w-[330px] xl:h-[370px] 2xl:w-[350px] 2xl:h-[390px] bg-cinza-claro shadow-[0px_0px_10px_rgba(0,0,0,0.25)] p-1 lg:p-2 flex flex-col gap-2">
          <Image
            src={"/img-temp.jpg"}
            alt="aaa"
            width={1920}
            height={1080}
            className="w-full h-[150px] md:h-[220px] lg:h-[250px] xl:h-[290px] 2xl:h-[310px] object-cover"
          />
          <div className="text-wrap md:text-lg lg:text-xl xl:text-2xl font-bold font-mono text-azul-titulo break-words whitespace-pre-line">
            <p className="truncate-multiline text-center px-2">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
        </div>
        <div className="w-[180px] h-[220px] md:w-[230px] md:h-[270px] lg:w-[280px] lg:h-[320px] xl:w-[330px] xl:h-[370px] 2xl:w-[350px] 2xl:h-[390px] bg-cinza-claro shadow-[0px_0px_10px_rgba(0,0,0,0.25)] p-1 lg:p-2 flex flex-col gap-2">
          <Image
            src={"/img-temp.jpg"}
            alt="aaa"
            width={1920}
            height={1080}
            className="w-full h-[150px] md:h-[220px] lg:h-[250px] xl:h-[290px] 2xl:h-[310px] object-cover"
          />
          <div className="text-wrap md:text-lg lg:text-xl xl:text-2xl font-bold font-mono text-azul-titulo break-words whitespace-pre-line">
            <p className="truncate-multiline text-center px-2">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
        </div>
        
        


      </div>
    </section>
  );
}
