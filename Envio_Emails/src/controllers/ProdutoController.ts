import { Request, Response } from "express";
import { Cliente } from "../models/Cliente";
import { ProdutoRepository } from "../repositories/ProdutorRepository";
import { Produto } from "./../models/Produto";

export class ProdutoController {
    notification (produto: Produto){
        console.log(
            //"Seu produto chegou senhor <nome>!\n Veja:"+produto
        )
    }
}
