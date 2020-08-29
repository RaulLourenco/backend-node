import { Product } from "./product";

export interface IProduct<T>{
    insertOne(product: Product) : Product;
    findAll() : Array<Product>;
    findOne(name: String) : Product;
    findById(id: Number) : Product;
}