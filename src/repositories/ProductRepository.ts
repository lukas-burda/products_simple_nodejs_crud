import { Product } from "../models/Product";

const products : Product[] = [];

export class ProductRepository{

    upsert(product: Product) : Product {
        if (product == null) { return product}
        else 
        {
            if(product.id == null) {
                product.id = product.id = products.length + 1;
                products.push(product);
                return product;              
            } else {
                products.splice(products.findIndex(x => x.id === product.id));
                var productupdate = product;
                products.push(productupdate);
                return productupdate;
            }
        }
    }

    list() : Product[] {
        return products;
    }

    delete(id:Number) : Boolean {
        if (id == null) { return false}
        else 
        {
            products.splice(products.findIndex(x => x.id === id));
            return true;
        }
    }

}