import { Schema, model } from 'mongoose';
import { Bot } from '../../components/bots/bot';
import { v4 as uuidv4 } from 'uuid';

const Bot = new Schema({
  _id: { type: String, default: uuidv4},
  name: String
});

export function toDTO(botDTO: Bot) {
  return new botsSchema({
    _id: botDTO.id,
    name: botDTO.name
  });
}

export const botsSchema = model<Bot>("bots", Bot, "bots");