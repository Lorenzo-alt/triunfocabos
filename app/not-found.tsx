import PaginaAviso, {
  botaoPrincipal,
  botaoSecundario,
} from "@/app/components/PaginaAviso";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada | RM Triunfo Cabos",
};

// Página 404 do site (rotas inexistentes e produtos que não existem no banco)
export default function NotFound() {
  return (
    <PaginaAviso
      codigo="404"
      titulo="Página não encontrada"
      texto="A página que você procura não existe ou foi removida. Confira o endereço ou continue navegando pelo site."
    >
      <Link href="/" className={botaoPrincipal}>
        Voltar ao início
      </Link>
      <Link href="/produtos" className={botaoSecundario}>
        Ver produtos
      </Link>
    </PaginaAviso>
  );
}
