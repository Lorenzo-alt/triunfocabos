import FormContato from "@/app/components/FormContato";
import HeroProduct from "@/app/components/Produtos/HeroProduct";
import TabelaProduto from "@/app/components/Produtos/TabelaProduto";
import mongoose from "mongoose";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

type typeProduto = {
  _id: mongoose.Types.ObjectId;
  linkId: string;
  imgPath: string;
  title: string;
  desc: string;
  tabela: string[];
};

type Props = {
  params: { id: string };
};

// Se o banco não responder nesse tempo, a página cai no error.tsx em vez de
// deixar o usuário esperando indefinidamente.
const TIMEOUT_MS = 15000;

/**
 * Busca o produto na API.
 * - Retorna o produto, ou `null` se ele não existir.
 * - Lança erro se a API/banco falhar ou demorar demais (tratado pelo error.tsx).
 * Envolvida em `cache` para que generateMetadata e Page façam uma única busca.
 */
const buscarProduto = cache(async (id: string): Promise<typeProduto | null> => {
  const res = await fetch(process.env.SITE_URL + "api/produto/?id=" + id, {
    next: { revalidate: 0 },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  if (!res.ok) {
    throw new Error(`Falha ao buscar produto "${id}": HTTP ${res.status}`);
  }

  const data: { ProdutoDoc?: typeProduto | null } | null = await res.json();
  return data?.ProdutoDoc ?? null;
});

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // O título não pode derrubar a página: se falhar, a própria Page trata o erro
  try {
    const produto = await buscarProduto(params.id);
    if (produto) {
      return { title: produto.title + " | RM Triunfo Cabos" };
    }
  } catch {}
  return { title: "Produtos | RM Triunfo Cabos" };
}

export default async function Page({ params }: Props) {
  const produto = await buscarProduto(params.id);

  if (!produto) notFound();

  return (
    <main className="flex flex-col items-center justify-center h-full w-full max-w-[2560px] ">
      <HeroProduct ProdutoDoc={produto} />
      <TabelaProduto ProdutoDoc={produto} />
      <FormContato />
    </main>
  );
}
