import express, {Request, Response} from 'express';
import { Bot } from '../../../../components/bots/bot';
import { BotService } from '../../../../components/bots/bot.service';

export class BotAPI {

    private botService = new BotService();
    private result: Bot;
    
    constructor(){ }
    
    public route() {

        const router = express.Router();

        router.route('/').post(async (req: Request, res: Response) => {
            if(Object.keys(req.body).length === 0) {
                return res.status(400).json({message: 'Body is undefined'});
            } 
            await this.botService.create(req.body).then( res => {
                this.result = res;
            }).catch( err => {
                console.error(err);
            });

            typeof this.result === 'object' ? res.status(200).json(this.result) : res.status(400).json({ message: this.result});
        });

        router.route('/:id').get(async (req: Request, res: Response) => {
            var id = req.params['id'];
            await this.botService.getByid(id).then( res => {
                this.result = res;
            }).catch( err => {
                console.error(err);
            });

            typeof this.result === 'object' ? res.status(200).json(this.result) : res.status(400).json({ message: this.result});
        });

        router.route('/').get(async (req: Request, res: Response) => {
            await this.botService.getAll().then( res => {
                this.result = res;
            }).catch( err => {
                console.error(err);
            });

            res.status(200).json(this.result);
        });

        router.route('/:id').put(async (req: Request, res: Response) => {
            if(Object.keys(req.body).length === 0) {
                return res.status(400).json({message: 'Body is undefined'});
            } 
            const id = req.params['id'];

            await this.botService.update(id, req.body).then( res => {
                this.result = res;
                
            }).catch( err => {
                console.error(err);
            });

            typeof this.result === 'object' ? res.status(200).json({message: 'Updated succesfully!'}) 
                                            : res.status(400).json({ message: this.result});
        });

        router.route('/:id').delete(async (req: Request, res: Response) => {
            var id = req.params['id'];
            await this.botService.delete(id).then( res => {
                this.result = res;
            }).catch( err => {
                console.error(err);
            });
            
            typeof this.result === 'object' ? res.status(200).json({message: 'Deleted succesfully!'}) 
                                            : res.status(400).json({ message: this.result});
        });

        return router;
    }
}