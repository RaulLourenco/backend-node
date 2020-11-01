import { toDTO } from '../../database/schemas/message-schema';
import { Message } from './message';
import { v4 as uuidv4 } from 'uuid';

export class MessageDTO {

    constructor() { }

    public async create(message: Message) {
        const messageDTO = await toDTO(message).save();
        return messageDTO;
    }

    public async get() {

    }

    public async update() {

    }

    public async delete() {

    }
}