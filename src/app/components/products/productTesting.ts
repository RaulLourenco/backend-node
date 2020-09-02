import { ProductDTO } from "./productsDTO";

describe('Product Test', () => {
    it('should initialize', () => {
        const product = new ProductDTO();
        expect(product).toBeTruthy;
    });
});