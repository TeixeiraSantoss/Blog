import { PostagemModel } from "./postagem.model";

export interface ComentarioModel
{
    id: number;
    conteudo: string;
    postagemId: number;
}