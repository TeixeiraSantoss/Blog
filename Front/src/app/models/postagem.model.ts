import { ComentarioModel } from "./comentario.model";

export interface PostagemModel
{
    id: number;
    titulo: string;
    conteudo: string;
    Comentarios: ComentarioModel[];
}