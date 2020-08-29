import { IProduct } from "./productsModel";
import { Product } from "./product";

export class ProductDTO implements IProduct<Product>{
    insertOne(product: Product): Product {
        throw new Error("Method not implemented.");
    }
    findAll(): Product[] {
        throw new Error("Method not implemented.");
    }
    findOne(name: String): Product {
        throw new Error("Method not implemented.");
    }
    findById(id: Number): Product {
        throw new Error("Method not implemented.");
    }
}