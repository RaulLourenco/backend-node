import { toDTO } from '../../database/schemas/bot-schema';
import { Bot } from './bot';
import { v4 as uuidv4 } from 'uuid';

export class BotDTO {

    constructor() { }

    public async create(bot: Bot) {
        const botDTO = await toDTO(bot).save();
        return botDTO;
    }

    public async get() {

    }

    public async update() {

    }

    public async delete() {

    }
}