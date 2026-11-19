"use client";

import PaginaAviso, {
  botaoPrincipal,
  botaoSecundario,
} from "@/app/components/PaginaAviso";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

// Mostrada quando o banco falha ou demora demais ao carregar um produto.
export default function ErroProduto({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const tentarNovamente = () => {
    // refresh busca os dados de novo no servidor; reset limpa o estado de erro
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <PaginaAviso
      titulo="Não foi possível carregar este produto"
      texto="Tivemos um problema temporário ao buscar as informações. Tente novamente em alguns instantes."
    >
      <button onClick={tentarNovamente} className={botaoPrincipal}>
        Tentar novamente
      </button>
      <Link href="/produtos" className={botaoSecundario}>
        Ver todos os produtos
      </Link>
    </PaginaAviso>
  );
}
