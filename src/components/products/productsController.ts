import { ProductService } from "./productsService";
import { Product } from "./product";

export class ProductController { 

    constructor(private productService: ProductService) {
    }
    
    public async createProduct(productDTO: Product) {
        const product = productDTO;
        this.productService.create(product);
    }
}