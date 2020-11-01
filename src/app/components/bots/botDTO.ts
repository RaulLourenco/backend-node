import { botsSchema, toDTO } from '../../database/schemas/bot-schema';
import { Bot } from './bot';

export class BotDTO {

    constructor() { }

    public async create(bot: Bot) {
        const exists = await botsSchema.findOne({id: bot.id});
        if(!exists) {
            return await toDTO(bot).save();
        }
    }

    public async getById(botId: String) {
        return await botsSchema.findOne({
            _id: botId
        });
    }

    public async getAll() {
        return await botsSchema.find();
    }


    public async update(id: String, bot: Bot) {
        const exists = await botsSchema.findOne({_id: id});
        if(exists) {
            return await botsSchema.findOneAndUpdate(
                { _id: bot.id },
                { _id: bot.id, name: bot.name});
        }   
    }

    public async delete(botId: String) {
        return await botsSchema.findOneAndDelete({
            id: botId
        });
    }
}