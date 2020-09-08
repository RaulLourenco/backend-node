import { ProductDTO } from "./productsDTO";
import { Product } from "./product";

export class ProductService {

    private productDTO = new ProductDTO();
    
    constructor() {}

    public async createProduct(product) {
        const productObj = {
            name: product.name,
            price: product.price,
            type: product.type,
            color: product.color,
            availableStores: product.availableStores
        };
        
        let DTO = '';
        await this.productDTO.create(productObj).then( res => {
            console.log(res);
            DTO = res;
        }).catch( err => {
            console.log(err);
        });
        return DTO;
    }
}