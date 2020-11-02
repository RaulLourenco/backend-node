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
            await this.create(req, res);
        });

        router.route('/:id').get(async (req: Request, res: Response) => {
            await this.getById(req, res);
        });

        router.route('/').get(async (req: Request, res: Response) => {
            await this.getAll(res);
        });

        router.route('/:id').put(async (req: Request, res: Response) => {
            await this.update(req, res);
        });

        router.route('/:id').delete(async (req: Request, res: Response) => {
            await this.delete(req, res);
        });

        return router;
    }

    async create(req, res) {
        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({message: 'Body is undefined'});
        } 
        await this.botService.create(req.body).then( res => {
            this.result = res;
        }).catch( err => {
            console.error(err);
        });

        typeof this.result === 'object' ? res.status(200).json(this.result) : res.status(400).json({ message: this.result});
    }

    async getById(req, res) {
        var id = req.params['id'];
        await this.botService.getById(id).then( res => {
            this.result = res;
        }).catch( err => {
            console.error(err);
        });

        typeof this.result === 'object' ? res.status(200).json(this.result) : res.status(400).json({ message: this.result});
    }

    async getAll(res) {
        await this.botService.getAll().then( res => {
            this.result = res;
        }).catch( err => {
            console.error(err);
        });

        res.status(200).json(this.result);
    }

    async update(req, res) {
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
    }

    async delete(req, res) {
        var id = req.params['id'];
        await this.botService.delete(id).then( res => {
            this.result = res;
        }).catch( err => {
            console.error(err);
        });
        
        typeof this.result === 'object' ? res.status(200).json({message: 'Deleted succesfully!'}) 
                                        : res.status(400).json({ message: this.result});
    }
}