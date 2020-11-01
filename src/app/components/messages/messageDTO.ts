import { messageSchema } from '../../database/schemas/message-schema';
import { Message } from './message';

export class MessageDTO {

    constructor() { }

    public async create(messageDTO: Message) {

        const message = await new messageSchema({
            conversationId: messageDTO.conversationId,
            timestamp: messageDTO.timestamp,
            from: messageDTO.from,
            to: messageDTO.to,
            text: messageDTO.text
        }).save();

        console.log('MENSAGEM' , message);

        return message;
    }

    public async get() {
        
    }

    public async update() {
        
    }

    public async delete() {
        
    }
}