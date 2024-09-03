import { PostagemModel } from "./postagem.model";

export interface ComentarioModel
{
    in: number;
    conteudo: string;
    postagemId: number;
}