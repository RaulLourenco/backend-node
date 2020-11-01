import express, {Request, Response} from 'express';
import { BotService } from '../../../../components/bots/bot.service';

export class BotAPI {

    private botService = new BotService();
    
    constructor(){ }
    
    public route() {

        const router = express.Router();

        router.route('/create').post(async (req: Request, res: Response) => {
            let result = '';
            await this.botService.create(req.body).then( res => {
                result = res;
            }).catch( err => {
                console.error(err);
            });
            res.status(200).json({
                message: 'Bot created!',
                bot: result
            });
        });

        router.route('/get').get(async (req: Request, res: Response) => {
            res.status(200).json({
                message: 'Updated Successfully!'
            });
        });

        return router;
    }
}