import { Request, Response } from "express";
import { ProductRepository } from "../repositories/ProductRepository";

const productRepository = new ProductRepository();

export class ProductsController{
    upsert(req: Request, res: Response) {

        const product = productRepository.upsert(req.body);

        res.status(201).json({data : product});
    }

    list(req: Request, res: Response){
        res.status(200).json(productRepository.list());
    }

    delete(req: Request, res: Response){
        res.status(200).json({message:productRepository.delete(parseInt(req.params.id))});
    }
}