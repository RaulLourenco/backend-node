import express, {Request, Response} from 'express';
import { ProductService } from '../../../../components/products/productsService';

export class ProductAPI {

    private productService = new ProductService();
    
    constructor(){ }
    
    public route() {

        const router = express.Router();

        router.route('/create').post(async (req: Request, res: Response) => {
            let result = '';
            await this.productService.createProduct(req.body).then( res => {
                result = res;
            }).catch( err => {
                console.error(err);
            });
            res.status(200).json({
                productID: result,
                message: 'Created product!'
            });
        });

        router.route('/update/:id').put(async (req: Request, res: Response) => {
            res.status(200).json({
                message: 'Updated Successfully!'
            });
        });

        return router;
    }
}