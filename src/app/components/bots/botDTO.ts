import { botsSchema, toDTO } from '../../database/schemas/bot-schema';
import { Bot } from './bot';

export class BotDTO {

    constructor() { }

    public async create(bot: Bot) {
        return await toDTO(bot).save();
    }

    public async getById(botId: String) {
        return await botsSchema.findOne({
            id: botId
        });
    }

    public async getAll() {
        return await botsSchema.find();
    }


    public async update(bot: Bot) {
        return await botsSchema.findOneAndUpdate({
            id: bot.id,
            name: bot.name
        });
    }

    public async delete(botId: String) {
        return await botsSchema.findOneAndDelete({
            id: botId
        });
    }
}