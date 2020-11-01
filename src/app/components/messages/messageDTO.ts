import { messageSchema, toDTO } from '../../database/schemas/message-schema';
import { Message } from './message';
import { v4 as uuidv4 } from 'uuid';
import { botsSchema } from '../../database/schemas/bot-schema';

export class MessageDTO {

    private userUniqueId: String = '16edd3b3-3f75-40df-af07-2a3813a79ce9';

    constructor() { }

    public async create(message: Message) {

        const receiver = (message.from == this.userUniqueId) ? message.to : message.from;
        const bot = await botsSchema.findOne({
            _id: receiver
        });

        if(bot) {
            const conversationExist = await messageSchema.find({
                conversationId: message.conversationId
            });
    
            message.conversationId = conversationExist ? conversationExist[0].conversationId : uuidv4();
    
            return await toDTO(message).save();
        }
    }

    public async getById(botId: String) {
        return await messageSchema.findOne({
            _id: botId
        });
    }

    public async getByConversationId(conversationId: String) {
        return await messageSchema.find({
            conversationId: conversationId
        });
    }
}