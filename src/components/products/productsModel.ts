import { Product } from "./product";

export interface IProduct<T>{
    findAll(): Array<Product>;
    insertOne(product: Product) : Product;
    findOne(name: String) : Array<Product>;
}