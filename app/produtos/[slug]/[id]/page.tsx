import FormContato from "@/app/components/FormContato";
import HeroProduct from "@/app/components/Produtos/HeroProduct";
import TabelaProduto from "@/app/components/Produtos/TabelaProduto";
import mongoose from "mongoose";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

type typeDoc = {
  ProdutoDoc: {
    _id: mongoose.Types.ObjectId;
    linkId: string;
    imgPath: string;
    title: string;
    desc: string;
    tabela: string[];
  };
};

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const res = await fetch(
    process.env.SITE_URL + "api/produto/?id=" + params.id,
    {
      next: { revalidate: 0 },
    }
  );

  const check = await res.json();

  if (check) {
    const data: typeDoc = check;
    return {
      title: data.ProdutoDoc.title + " | RM Triunfo Cabos",
    };
  } else return {};
}

export default async function Page({ params }: Props) {
  const res = await fetch(
    process.env.SITE_URL + "api/produto/?id=" + params.id,
    {
      next: { revalidate: 0 },
    }
  );

  const check = await res.json();

  if (check) {
    const data: typeDoc = check;

    if (data.ProdutoDoc) {
      return (
        <main className="flex flex-col items-center justify-center h-full w-full max-w-[2560px] ">
          <HeroProduct ProdutoDoc={data.ProdutoDoc}/>
          <TabelaProduto ProdutoDoc={data.ProdutoDoc}/>
          <FormContato />
        </main>
      );
    }
  } else {
    redirect("/404");
  }
}
