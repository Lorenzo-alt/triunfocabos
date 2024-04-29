import {model, Schema, models} from "mongoose";

const ProdutosSchema = new Schema({
    linkId: {
        type: String,
    },
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    tabela: {
        type: Array
    },
    imgPath: {
        type: String,
    },
})

export const Produtos = models.Produtos || model('Produtos', ProdutosSchema);