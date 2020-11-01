import { Schema, model } from 'mongoose';
import { Bot } from '../../components/bots/bot';

const Bot = new Schema({
  id: String,
  name: String
});

export function toDTO(botDTO: Bot) {
  return new botsSchema({
    id: botDTO.id,
    name: botDTO.name
  });
}

export const botsSchema = model<Bot>("bots", Bot, "bots");