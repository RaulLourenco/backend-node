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
            this.DTO = res;
        }).catch( err => {
            console.error(err);
        });

        return this.DTO;
    }

    public async getByid(botId: String) {
        await this.messageDTO.getById(botId).then( res => {
            this.DTO = (res === null) ? 'This conversation no exists!' : res;
        }).catch( err => {
            console.error(err);
        });

        return this.DTO;
    }
}