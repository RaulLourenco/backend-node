import { messageSchema, toDTO } from '../../database/schemas/message-schema';
import { Message } from './message';

export class MessageDTO {

    constructor() { }

    public async create(message: Message) {
        return await toDTO(message).save();
    }

    public async getById(botId: String) {
        return await messageSchema.findOne({
            _id: botId
        });
    }

    public async getByConversationId(conversationId: String) {
        return await messageSchema.find({
            _id: conversationId
        });
    }
}