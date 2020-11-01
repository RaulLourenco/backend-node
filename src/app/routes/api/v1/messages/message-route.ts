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
            if(Object.keys(req.body).length === 0) {
               return res.status(400).json({message: 'Body is undefined'});
            } 
            await this.messageService.create(req.body).then( res => {
                this.result = res;
            }).catch( err => {
                console.error(err);
            });

            typeof this.result === 'object' ? res.status(200).json(this.result) : res.status(400).json({ message: this.result});
            
        });

        router.route('/:id').get(async (req: Request, res: Response) => {
            var id = req.params['id'];
            await this.messageService.getByid(id).then( res => {
                this.result = res;
            }).catch( err => {
                console.error(err);
            });

            typeof this.result === 'object' ? res.status(200).json(this.result) : res.status(400).json({ message: this.result});
        });

        router.route('/:id').get(async (req: Request, res: Response) => {
            var id = req.params['id'];
            await this.messageService.getByid(id).then( res => {
                this.result = res;
            }).catch( err => {
                console.error(err);
            });

            res.status(200).json(this.result);
        });

        return router;
    }
}