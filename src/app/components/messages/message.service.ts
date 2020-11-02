import { MessageDTO } from "./messageDTO";
import { Message } from "./message";

export class MessageService {

    private messageDTO = new MessageDTO();
    private DTO: Message;
    private messageObject: Message;
    
    
    constructor() {}

    public async create(message: Message) {
        this.messageObject = {
            conversationId: message.conversationId,
            timestamp: new Date(Date.now()),
            from: message.from,
            to: message.to,
            text: message.text
        };

        await this.messageDTO.create(this.messageObject).then( res => {
            console.log('resposta', res);
            this.DTO = (res === undefined) ? 'Conversation cannot be established, because this bot not exists.' : res;
        }).catch( err => {
            console.error(err);
        });

        return this.DTO;
    }

    public async getById(botId: String) {
        await this.messageDTO.getById(botId).then( res => {
            this.DTO = (res === null) ? 'This conversation not exists!' : res;
        }).catch( err => {
            console.error(err);
        });

        return this.DTO;
    }

    public async getByConversationId(conversationId: String) {
        await this.messageDTO.getByConversationId(conversationId).then( res => {
            this.DTO = (res.length === 0) ? 'This conversation not exists!' : res;
        }).catch( err => {
            console.error(err);
        });

        return this.DTO;
    }
}