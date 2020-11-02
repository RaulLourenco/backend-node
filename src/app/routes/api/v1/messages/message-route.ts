import express, {Request, Response} from 'express';
import { Message } from '../../../../components/messages/message';
import { MessageService } from '../../../../components/messages/message.service';

export class MessageAPI {

    private messageService = new MessageService();
    private result: Message;
    
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
            await this.getByConversationId(req, res);
        });

        return router;
    }

    async create(req, res) {
        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({message: 'Body is undefined'});
         } 
         await this.messageService.create(req.body).then( res => {
             this.result = res;
         }).catch( err => {
             console.error(err);
         });

         typeof this.result === 'object' ? res.status(200).json(this.result) : res.status(400).json({ message: this.result});
    }

    async getById(req, res) {
        var id = req.params['id'];
        await this.messageService.getById(id).then( res => {
            this.result = res;
        }).catch( err => {
            console.error(err);
        });

        typeof this.result === 'object' ? res.status(200).json(this.result) : res.status(400).json({ message: this.result});
    }

    async getByConversationId(req, res) {
        var id = req.query.conversationId;

        await this.messageService.getByConversationId(id).then( res => {
            this.result = res;
        }).catch( err => {
            console.error(err);
        });

        typeof this.result === 'object' ? res.status(200).json(this.result) : res.status(400).json({ message: this.result});
    }
}