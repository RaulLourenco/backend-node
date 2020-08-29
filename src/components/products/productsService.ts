import { Product } from "./product";
import { ProductDTO } from "./productsDTO";

export class ProductService {
    
    constructor(private productDTO: ProductDTO) {}

    public async create(product: Product) {
        this.productDTO.insertOne(product);
    }
}