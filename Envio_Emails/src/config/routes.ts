import { response, Router } from "express";

import { EmailController } from "../controllers/EmailController";
import { ProdutoController } from "../controllers/ProdutoController";

const routes = Router();

//Default
routes.get("/", (request, response) => {
  response.json({ message: "Envio de e-mail" });
});

routes.post("/email/enviar", new EmailController().enviar);
export { routes };
