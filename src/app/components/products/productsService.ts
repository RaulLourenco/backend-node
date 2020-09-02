import { ProductDTO } from "./productsDTO";

export class ProductService {
    
    constructor(private productDTO: ProductDTO) {}

    public async create() {
        console.log('DEU CERTO!');
        return {message: 'Cadastrado!'};
    }
}