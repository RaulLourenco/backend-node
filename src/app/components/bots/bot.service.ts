import { BotDTO } from "./botDTO";
import { Bot } from "./bot";

export class BotService {

    private botDTO = new BotDTO();
    private DTO: Bot;
    private botObject: Bot;
    
    constructor() {}

    public async create(bot: Bot) {
        this.botObject = {
            id: bot.id,
            name: bot.name
        };

        await this.botDTO.create(this.botObject).then( res => {
            this.DTO = (res === undefined) ? 'This bot already exists!' : res;
        }).catch( err => {
            console.error(err);
        });

        return this.DTO;
    }

    public async getAll() {
        await this.botDTO.getAll().then( res => {
            this.DTO = res;
        }).catch( err => {
            console.error(err);
        });

        return this.DTO;
    }

    public async getById(botId: String) {
        await this.botDTO.getById(botId).then( res => {
            this.DTO = (res === null) ? 'This bot not exists!' : res;;
        }).catch( err => {
            console.error(err);
        });

        return this.DTO;
    }

    public async update(id: String, bot: Bot) {
        this.botObject = {
            id: bot.id,
            name: bot.name
        };

        await this.botDTO.update(id, this.botObject).then( res => {
            this.DTO = (res === undefined) ? 'This bot not exists!' : res;
        }).catch( err => {
            console.error(err);
        });

        return this.DTO;
    }

    public async delete(botId: String) {
        await this.botDTO.delete(botId).then( res => {
            this.DTO = (res === undefined) ? 'This bot not exists!' : res;
        }).catch( err => {
            console.error(err);
        });

        return this.DTO;
    }
}