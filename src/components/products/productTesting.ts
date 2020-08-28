import { Product } from "./product";

describe('Product Test', () => {
    it('should initialize', () => {
        const product = new Product();
        expect(product).toBeTruthy;
    });
});