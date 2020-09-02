import * as express from 'express';
import * as productRoutes from './api/v1/products/products';

export class Routes {

    constructor() {}

    public async routes(app: express.Application) {

        const productAPI = new productRoutes.ProductAPI().route();

        app.route('/healthcheck').get(async (req: express.Request, res: express.Response) => {
            res.status(200).json({
                message: 'Service is healthy'
            });
        });

        app.use('/projects', productAPI);
    }
}

