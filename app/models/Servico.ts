import {model, Schema, models} from "mongoose";

const ServicoSchema = new Schema({
    linkId: {
        type: String,
    },
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    
})

export const Servico = models.Servico || model('Servico', ServicoSchema);