import { BotDTO } from "./botDTO";
import { Bot } from "./bot";

export class BotService {

    private botDTO = new BotDTO();
    
    constructor() {}

    public async create(bot: Bot) {

        const botObj = {
           id: bot.id,
           name: bot.name
        };
        
        let DTO;
        
        await this.botDTO.create(botObj).then( res => {
            console.log(res);
            DTO = res;
        }).catch( err => {
            console.log(err);
        });
        return DTO;
    }
}