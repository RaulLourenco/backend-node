
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';

import { Routes } from './routes/routes';

class AppConfig {
    public app: express.Application;
    public router: Routes = new Routes();
    constructor() {
        this.app = express();
        this.config();
        this.router.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(
            bodyParser.urlencoded({
                extended: false,
            })
        );
        this.app.use(cors());
        this.app.use((error, req, res, next) => {
            res.status(error.status || 500).json({ error })
        });
        this.app.use((req, res, next) => {
            req.base = `${req.protocol}://${req.get('host')}`
            return next()
        });
    }
}

export default new AppConfig().app;


