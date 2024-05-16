"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowUpSquare } from "react-icons/bs";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";

const formSchema = z.object({
  nome: z.string().min(2, { message: "* Digite um nome valido." }),
  email: z.string().email({ message: "* Digite um email válido." }),
  telefone: z.string().min(8, { message: "* Digite um número válido." }),
  mensagem: z.string().min(1, { message: "* Digite uma mensagem válida." }),
});

type typeForm = z.infer<typeof formSchema>;

export default function VersionPage() {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<typeForm>({
    resolver: zodResolver(formSchema),
  });

  const [values, setValues] = useState("");
  const [rows, setRows] = useState<number>(12);

  const submit = (data: typeForm) => {
    setValues(JSON.stringify(data, null, 2));
  };
  
  const enviarEmail = async (values: string) => {
    try {
      const response = await fetch(process.env.SITE_URL + "api/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: values,
      });
      if (response.ok) {
        // Lógica para lidar com o sucesso do envio do email
      } else {
        // Lógica para lidar com falha no envio do email
      }
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
    }
  };

  useEffect(() => {
    if (values) enviarEmail(values);
  }, [values]);

  useEffect(() => {
    if (window) {
      var sm = window.matchMedia("(max-width: 767px)");
      var md = window.matchMedia("(max-width: 768px)");
      var lg = window.matchMedia("(max-width: 1024px)");
      var xl = window.matchMedia("(max-width: 1280px)");
      var xl2 = window.matchMedia("(min-width: 1281px)");

      if (sm.matches) {
        setRows(12);
      } else if (md.matches) {
        setRows(10);
      } else if (lg.matches) {
        setRows(8);
      } else if (xl.matches) {
        setRows(7);
      } else if (xl2.matches) {
        setRows(6);
      }

      sm.addEventListener("change", function () {
        setRows(12);
      });
      md.addEventListener("change", function () {
        setRows(10);
      });
      lg.addEventListener("change", function () {
        setRows(8);
      });
      xl.addEventListener("change", function () {
        setRows(7);
      });
      xl2.addEventListener("change", function () {
        setRows(6);
      });

      //   return () => {
      //     sm.removeEventListener("change", function () {
      //       setRows(10);
      //     });
      //   };
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="px-5 lg:px-0 flex flex-col gap-5 xl:gap-8 text-azul-titulo"
    >
      <div className="flex flex-col xl:grid xl:grid-flow-col gap-5 xl:gap-8">
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <label
              htmlFor="input_nome"
              className="md:text-lg xl:text-xl 2xl:text-2xl font-mono font-bold uppercase"
            >
              NOME
            </label>
            {errors.email && (
              <p className="text-[#E72733] text-[12px] md:text-[14px] mt-1 ml-2 ">
                {errors.email.message}
              </p>
            )}
          </div>
          <input
            id="input_nome"
            type="text"
            {...register("nome")}
            className={twMerge(
              "bg-cinza-input focus:bg-neutral-200 focus:outline-1 outline-offset-4 outline-[#ffffff] ring-0 focus:text-azul-titulo text-azul-titulo rounded-[10px] text-sm md:text-base xl:text-lg 2xl:text-xl w-full pt-4 xl:pt-6 px-2 border-b-cinza2 border-b-4 font-bold placeholder-azul-titulo",
              errors.nome &&
                "outline-1 outline-offset-1 outline-[#E72733] text-[#E72733] placeholder:text-[#E72733]"
            )}
            placeholder="Digite seu nome aqui..."
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <label
              htmlFor="input_telefone"
              className="md:text-lg xl:text-xl 2xl:text-2xl font-mono font-bold uppercase"
            >
              TELEFONE
            </label>
            {errors.telefone && (
              <p className="text-[#E72733] text-[12px] md:text-[14px] mt-1 ml-2 ">
                {errors.telefone.message}
              </p>
            )}
          </div>
          <input
            id="input_telefone"
            {...register("telefone")}
            type="text"
            className={twMerge(
              "bg-cinza-input focus:bg-neutral-200 focus:outline-1 outline-offset-4 outline-[#ffffff] ring-0 focus:text-azul-titulo text-azul-titulo rounded-[10px] text-sm md:text-base xl:text-lg 2xl:text-xl w-full pt-4 xl:pt-6 px-2 border-b-cinza2 border-b-4 font-bold placeholder-azul-titulo",
              errors.nome &&
                "outline-1 outline-offset-1 outline-[#E72733] text-[#E72733] placeholder:text-[#E72733]"
            )}
            placeholder="Digite seu telefone..."
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <label
            htmlFor=""
            className="md:text-lg xl:text-xl 2xl:text-2xl font-mono font-bold uppercase"
          >
            E-MAIL
          </label>
          {errors.email && (
            <p className="text-[#E72733] text-[12px] md:text-[14px] mt-1 ml-2 ">
              {errors.email.message}
            </p>
          )}
        </div>
        <input
          id="input_email"
          type="text"
          {...register("email")}
          className={twMerge(
            "bg-cinza-input focus:bg-neutral-200 focus:outline-1 outline-offset-4 outline-[#ffffff] ring-0 focus:text-azul-titulo text-azul-titulo rounded-[10px] text-sm md:text-base xl:text-lg 2xl:text-xl w-full pt-4 xl:pt-6 px-2 border-b-cinza2 border-b-4 font-bold placeholder-azul-titulo",
            errors.nome &&
              "outline-1 outline-offset-1 outline-[#E72733] text-[#E72733] placeholder:text-[#E72733]"
          )}
          placeholder="Digite seu e-mail para contato..."
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <label
            htmlFor="input_mensagem"
            className="md:text-lg xl:text-xl 2xl:text-2xl font-mono font-bold uppercase"
          >
            MENSAGEM
          </label>
          {errors.email && (
            <p className="text-[#E72733] text-[12px] md:text-[14px] mt-1 ml-2 ">
              {errors.email.message}
            </p>
          )}
        </div>
        <textarea
          rows={rows}
          {...register("mensagem")}
          className={twMerge(
            "bg-cinza-input focus:bg-neutral-200 focus:outline-1 outline-offset-4 outline-[#ffffff] ring-0 focus:text-azul-titulo text-azul-titulo rounded-[10px] text-sm md:text-base xl:text-lg 2xl:text-xl w-full pt-4 xl:pt-6 px-2 border-b-cinza2 border-b-4 font-bold placeholder-azul-titulo",
            errors.nome &&
              "outline-1 outline-offset-1 outline-[#E72733] text-[#E72733] placeholder:text-[#E72733]"
          )}
          placeholder="Digite sua mensagem..."
        />
      </div>
      <button
        type="submit"
        className="font-mono w-full self-center font-bold text-white flex xl:px-6 items-center justify-center rounded-md bg-vermelho-principal hover:shadow-[3px_3px_0px_rgba(60,14,9,0.70)]"
      >
        <div className="md:text-lg xl:text-xl 2xl:text-xl flex items-center gap-2 xl:gap-3 px-3 py-1 lg:py-2">
          Enviar
          <BsArrowUpSquare className="w-5 xl:w-6 2xl:w-7 h-auto" />
        </div>
      </button>
    </form>
  );
}
