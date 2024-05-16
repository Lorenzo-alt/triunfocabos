import { mongooseConnect } from "@/app/lib/mongoose";
import { Servico } from "@/app/models/Servico";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    if(searchParams) await mongooseConnect();
    console.log(searchParams)
    const id = searchParams.get('id')
    if(id !== 'favicon.ico'){
    const ServicoDoc = await Servico.findOne({linkId: id?.replaceAll("%2B", '+')})

    console.log(ServicoDoc)
    return Response.json({ServicoDoc})
}

    return Response.json(null)
}