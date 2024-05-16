import { mongooseConnect } from "@/app/lib/mongoose";
import { Produtos } from "@/app/models/Produto";

export async function GET(request: Request) {
    await mongooseConnect();
    const { searchParams } = new URL(request.url)
    console.log(searchParams)
    const id = searchParams.get('id')
    if(id !== 'favicon.ico'){
    const ProdutoDoc = await Produtos.findOne({linkId: id?.replaceAll("%2B", '+')})

    console.log(ProdutoDoc)
    return Response.json({ProdutoDoc})
}

    return Response.json(null)
}