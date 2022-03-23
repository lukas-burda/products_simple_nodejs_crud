import { Router } from 'express';
import { ProductsController } from '../controllers/ProductsController';

const routes = Router();

//Default
routes.get("/", (request, response) => {
    response.json({ message : "Hello World"});
});

//Produto
routes.post("/product", new ProductsController().upsert);
routes.get("/products", new ProductsController().list);
routes.delete("/product/:id", new ProductsController().delete);

export { routes };