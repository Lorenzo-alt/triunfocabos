import { mongooseConnect } from "@/app/lib/mongoose";
import { Produtos } from "@/app/models/Produto";

export async function GET(request: Request) {
    await mongooseConnect();
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    const ProdutoDoc = await Produtos.findOne({linkId: id})

    console.log(ProdutoDoc)

    return Response.json({ProdutoDoc})
}