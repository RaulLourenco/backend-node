import { MessageDTO } from "./messageDTO";
import { Message } from "./message";

export class MessageService {

    private messageDTO = new MessageDTO();
    
    constructor() {}

    public async create(message: Message) {

        const messageObj = {
           conversationId: message.conversationId,
           timestamp: message.timestamp,
           from: message.from,
           to: message.to,
           text: message.text
        };
        
        let DTO;
        
        await this.messageDTO.create(messageObj).then( res => {
            console.log(res);
            DTO = res;
        }).catch( err => {
            console.log(err);
        });
        return DTO;
    }
}