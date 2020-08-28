import { IProduct } from "./productsModel";
import { Product } from "./product";

export class ProductDAL implements IProduct<Product>{
    findAll(): Product[] {
        throw new Error("Method not implemented.");
    }
    insertOne(product: Product): Product {
        throw new Error("Method not implemented.");
    }
    findOne(name: String): Product[] {
        throw new Error("Method not implemented.");
    }
}