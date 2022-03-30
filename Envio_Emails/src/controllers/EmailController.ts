import { Request, Response } from "express";

export class EmailController{
    enviar(request: Request, response: Response){
        console.log(request.body)
        response.status(200).json({message:"Seus produtos chegaram!", data: request.body})
    }
}

