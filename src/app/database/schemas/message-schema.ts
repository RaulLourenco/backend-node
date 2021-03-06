import { Schema, model } from 'mongoose';
import { Message } from '../../components/messages/message';
import { v4 as uuidv4 } from 'uuid';

const MessageSchema = new Schema({
  _id: { type: String, default: uuidv4},
  conversationId: { type: String, default: uuidv4},
  timestamp: Date,
  from: { type: String, default: uuidv4},
  to: { type: String, default: uuidv4},
  text: String
});

export function toDTO(messageDTO: Message) {
  return new messageSchema({
    _id: uuidv4(),
    conversationId: messageDTO.conversationId,
    timestamp: messageDTO.timestamp,
    from: messageDTO.from,
    to: messageDTO.to,
    text: messageDTO.text
  });
}

export const messageSchema = model<Message>("messages", MessageSchema, "messages");