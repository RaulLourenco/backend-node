import express, {Request, Response} from 'express';
import * as messageRoute from './api/v1/messages/message-route';
import * as botRoute from './api/v1/bots/bot-route';

export class Routes {

    constructor() {}

    public async routes(app: express.Application) {

        const api = '/api/v1';

        const messageAPI = new messageRoute.MessageAPI().route();
        const botAPI = new botRoute.BotAPI().route();

        app.route(`${api}/healthcheck`).get(async (req: Request, res: Response) => {
            res.status(200).json({
                message: 'Service is healthy'
            });
        });

        app.use(`${api}/messages`, messageAPI);
        app.use(`${api}/bots`, botAPI);
    }
}

