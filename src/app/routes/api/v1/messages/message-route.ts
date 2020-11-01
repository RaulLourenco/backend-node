import express, {Request, Response} from 'express';
import { MessageService } from '../../../../components/messages/message.service';

export class MessageAPI {

    private messageService = new MessageService();
    
    constructor(){ }
    
    public route() {

        const router = express.Router();

        router.route('/create').post(async (req: Request, res: Response) => {
            let result = '';
            await this.messageService.create(req.body).then( res => {
                result = res;
            }).catch( err => {
                console.error(err);
            });
            res.status(200).json({
                productID: result,
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