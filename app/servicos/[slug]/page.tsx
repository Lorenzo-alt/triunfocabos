import DescServicoItem from "@/app/components/Servicos/DescServicoItem";
import Titulo from "@/app/components/Titulo";
import mongoose from "mongoose";
import { Metadata, ResolvingMetadata } from "next";

type typeDoc = {
  ServicoDoc: {
    _id: mongoose.Types.ObjectId;
    linkId: string;
    title: string;
    desc: string;
  };
};

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const res = await fetch(
    process.env.SITE_URL + "api/servico/?id=" + params.slug,
    {
      next: { revalidate: 0 },
    }
  );

  const check = await res.json();

  if (check) {
    const data: typeDoc = check;
    return {
      title: data.ServicoDoc.title + " | RM Triunfo Cabos",
    };
  } else return {};
}

export default async function Page({ params }: Props) {
  const res = await fetch(
    process.env.SITE_URL + "api/servico/?id=" + params.slug,
    {
      next: { revalidate: 0 },
    }
  );

  const check = await res.json();

  if (check) {
    const data: typeDoc = check;

    if (data.ServicoDoc) {
      return (
        <main className="flex flex-col items-center justify-center h-full w-full max-w-[2560px]">
          <Titulo titulo={data.ServicoDoc.title}/>
          <DescServicoItem ServicoDoc={data.ServicoDoc}/>
          <section className="px-3 md:px-20 lg:px-40 xl:px-72 2xl:px-96 lg:py-2 flex flex-col gap-5 lg:gap-7 xl:gap-10 mb-8">
            <div className="bg-white rounded-[5px] lg:rounded-[10px] p-4 lg:px-8 xl:px-10 2xl:px-24 py-6 text-center font-bold flex flex-col gap-2 lg:gap-4 xl:gap-6 shadow-[4px_4px_0px_rgb(0,0,0,0.25)] lg:shadow-[6px_6px_0px_rgb(0,0,0,0.25)]">
              <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Quando se trata de elevar seus projetos, confie na RM Triunfo
                Cabos para fornecer produtos certificados, atendimento
                personalizado e compromisso inabalável com a qualidade!
              </p>
            </div>
          </section>
        </main>
      );
    }
  }
}
