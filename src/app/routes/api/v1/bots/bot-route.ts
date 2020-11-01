import express, {Request, Response} from 'express';
import { Bot } from '../../../../components/bots/bot';
import { BotService } from '../../../../components/bots/bot.service';

export class BotAPI {

    private botService = new BotService();
    private result: Bot;
    
    constructor(){ }
    
    public route() {

        const router = express.Router();

        router.route('/create').post(async (req: Request, res: Response) => {
            await this.botService.create(req.body).then( res => {
                this.result = res;
            }).catch( err => {
                console.error(err);
            });
            res.status(200).json(this.result);
        });

        router.route('/get/:id').get(async (req: Request, res: Response) => {
            var id = req.params['id'];
            await this.botService.getByid(id).then( res => {
                this.result = res;
            }).catch( err => {
                console.error(err);
            });

            res.status(200).json(this.result);
        });

        router.route('/get').get(async (req: Request, res: Response) => {
            await this.botService.getAll().then( res => {
                this.result = res;
            }).catch( err => {
                console.error(err);
            });

            res.status(200).json(this.result);
        });

        router.route('/update').get(async (req: Request, res: Response) => {

            await this.botService.update(req.body).then( res => {
                this.result = res;
            }).catch( err => {
                console.error(err);
            });

            res.status(200).json(this.result);
        });

        router.route('/delete/:id').get(async (req: Request, res: Response) => {
            var id = req.params['id'];
            await this.botService.delete(id).then( res => {
                this.result = res;
            }).catch( err => {
                console.error(err);
            });
            
            res.status(200).json(this.result);
        });

        return router;
    }
}