import { productSchema } from '../../database/schemas/Product';
import { Product } from './product';
export class ProductDTO {

    constructor() { }

    public async create(productDTO: Product) {

        const product = new productSchema({
            productID: '1234',
            name: productDTO.name,
            price: productDTO.price,
            type: productDTO.type,
            color: productDTO.color,
            availableStores: productDTO.availableStores
        }).save();

        return product.productID;
    }
}