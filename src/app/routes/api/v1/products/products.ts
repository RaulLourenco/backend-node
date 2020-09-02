import express, {Request, Response} from 'express';

export class ProductAPI {
    
    constructor(){ }
    
    public route() {

        const router = express.Router();

        router.route('/create').post(async (req: Request, res: Response) => {
            console.log('req', req.body);
            res.status(200).json({
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