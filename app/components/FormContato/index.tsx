"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BsArrowUpSquare } from "react-icons/bs";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast";

const formSchema = z.object({
  nome: z.string().min(2, { message: "* Digite um nome valido." }),
  email: z.string().email({ message: "* Digite um email válido." }),
  telefone: z.string().min(8, { message: "* Digite um número válido." }),
  mensagem: z.string().min(1, { message: "* Digite uma mensagem válida." }),
});

type typeForm = z.infer<typeof formSchema>;

export default function FormContato() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm<typeForm>({
    resolver: zodResolver(formSchema),
  });

  const [values, setValues] = useState("");
  const [loading, setLoading] = useState<boolean>();
  const [rows, setRows] = useState<number>(12);

  const submit = (data: typeForm) => {
    setValues(JSON.stringify(data, null, 2));
  };

  const enviarEmail = async (values: string) => {
    setLoading(true);
    toast.loading("Enviando...");
    try {
      const response = await fetch("/api/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: values,
      });
      if (response.ok) {
        setLoading(false);
        toast.dismiss();
        toast.success("Email enviado com sucesso!");
        reset()
      } else {
        setLoading(false);
        toast.dismiss();
        toast.error(
          "Ocorreu um erro no servidor, entre em contato pelo telefone!"
        );
      }
    } catch (error) {
      setLoading(false);
      toast.dismiss();
      toast.error(
        "Ocorreu um erro no servidor, entre em contato pelo telefone!"
      );
    }
  };

  useEffect(() => {
    if (values) enviarEmail(values);
  }, [values]);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (window) {
      var sm = window.matchMedia("(max-width: 767px)");
      var md = window.matchMedia("(max-width: 1024px)");
      var lg = window.matchMedia("(max-width: 1280px)");
      var xl = window.matchMedia("(min-width: 1281px)");

      if (sm.matches) {
        setRows(12);
      } else if (md.matches) {
        setRows(10);
      } else if (lg.matches) {
        setRows(8);
      } else if (xl.matches) {
        setRows(7);
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

      const handleResize = () => {
        let resp = 0;
        if (window.innerWidth < 767) resp = 12;
        else if (window.innerWidth > 767 && window.innerWidth < 1024) resp = 10;
        else if (window.innerWidth > 1024 && window.innerWidth < 1280) resp = 8;
        else if (window.innerWidth > 1280) resp = 7;
        setRows(resp);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
      //   return () => {
      //     sm.removeEventListener("change", function () {
      //       setRows(10);
      //     });
      //   };
    }
  }, []);

  return (
    <section
      ref={ref}
      className="bg-azul-titulo px-2 lg:px-44 w-full  py-10 lg:py-14 xl:py-20 "
    >
      <div className="flex flex-col gap-10 xl:gap-14">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="bg-cinza2 h-0.5 w-full rounded-full" />
          <div className="absolute bg-azul-titulo left-0 ml-3">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono text-white font-bold px-2 drop-shadow-[2px_0px_0px_rgba(173,173,173,1)]">
              ATENDIMENTO
            </h2>
          </div>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit(submit)}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 80 }}
          className="px-5 lg:px-0 flex flex-col gap-5 xl:gap-8"
        >
          <div className="flex flex-col xl:grid xl:grid-flow-col gap-5 xl:gap-8">
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <label
                  htmlFor="input_email"
                  className={twMerge(
                    "md:text-lg xl:text-xl 2xl:text-2xl font-mono font-bold uppercase text-cinza-input"
                  )}
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
                disabled={loading === true}
                className={twMerge(
                  "bg-cinza-input focus:bg-neutral-200 focus:outline-1 outline-offset-4 outline-[#ffffff] ring-0 text-azul-titulo focus:text-azul-titulo rounded-[10px] text-sm md:text-base xl:text-lg 2xl:text-xl w-full pt-4 xl:pt-6 px-2 border-b-cinza2 border-b-4 font-bold placeholder-azul-titulo",
                  errors.email &&
                    "outline-1 outline-offset-1 outline-[#E72733] text-[#E72733] placeholder:text-[#E72733]", loading === true && 'opacity-50'
                )}
                placeholder="Digite seu e-mail para contato..."
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <label
                  htmlFor="input_nome"
                  className="md:text-lg xl:text-xl 2xl:text-2xl font-mono font-bold uppercase text-cinza-input"
                >
                  NOME
                </label>
                {errors.nome && (
                  <p className="text-[#E72733] text-[12px] md:text-[14px] mt-1 ml-2 ">
                    {errors.nome.message}
                  </p>
                )}
              </div>
              <input
                id="input_nome"
                {...register("nome")}
                type="text"
                disabled={loading === true}
                className={twMerge(
                  "bg-cinza-input focus:bg-neutral-200 focus:outline-1 outline-offset-4 outline-[#ffffff] ring-0 text-azul-titulo focus:text-azul-titulo rounded-[10px] text-sm md:text-base xl:text-lg 2xl:text-xl w-full pt-4 xl:pt-6 px-2 border-b-cinza2 border-b-4 font-bold placeholder-azul-titulo",
                  errors.nome &&
                    "outline-1 outline-offset-1 outline-[#E72733] text-[#E72733] placeholder:text-[#E72733]", loading === true && 'opacity-50'
                )}
                placeholder="Digite seu nome aqui..."
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <label
                  htmlFor="input_telefone"
                  className="md:text-lg xl:text-xl 2xl:text-2xl font-mono font-bold uppercase text-cinza-input"
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
                type="text" disabled={loading === true}
                className={twMerge(
                  "bg-cinza-input focus:bg-neutral-200 focus:outline-1 outline-offset-4 outline-[#ffffff] ring-0 text-azul-titulo focus:text-azul-titulo rounded-[10px] text-sm md:text-base xl:text-lg 2xl:text-xl w-full pt-4 xl:pt-6 px-2 border-b-cinza2 border-b-4 font-bold placeholder-azul-titulo",
                  errors.telefone &&
                    "outline-1 outline-offset-1 outline-[#E72733] text-[#E72733] placeholder:text-[#E72733]", loading === true && 'opacity-50'
                )}
                placeholder="Digite seu telefone..."
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <label
                htmlFor="input_mensagem"
                className="md:text-lg xl:text-xl 2xl:text-2xl font-mono font-bold uppercase text-cinza-input"
              >
                MENSAGEM
              </label>
              {errors.mensagem && (
                <p className="text-[#E72733] text-[12px] md:text-[14px] mt-1 ml-2 ">
                  {errors.mensagem.message}
                </p>
              )}
            </div>
            <textarea
              rows={rows}
              id="input_mensagem"
              {...register("mensagem")} disabled={loading === true}
              className={twMerge(
                "bg-cinza-input focus:bg-neutral-200 focus:outline-1 outline-offset-4 outline-[#ffffff] ring-0 text-azul-titulo focus:text-azul-titulo rounded-[10px] text-sm md:text-base xl:text-lg 2xl:text-xl w-full pt-4 xl:pt-6 px-2 border-b-cinza2 border-b-4 font-bold placeholder-azul-titulo",
                errors.mensagem &&
                  "outline-1 outline-offset-1 outline-[#E72733] text-[#E72733] placeholder:text-[#E72733]", loading === true && 'opacity-50'
              )}
              placeholder="Digite sua mensagem..."
            />
          </div>
          <button
            type="submit"
            className="font-mono w-max self-center font-bold text-white flex xl:px-6 items-center justify-center rounded-md bg-vermelho-principal hover:shadow-[3px_3px_0px_rgba(60,14,9,0.70)]"
          >
            <div className="md:text-lg xl:text-xl 2xl:text-xl flex items-center gap-2 xl:gap-3 px-3 py-1 lg:py-2">
              Enviar
              <BsArrowUpSquare className="w-5 xl:w-6 2xl:w-7 h-auto" />
            </div>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
