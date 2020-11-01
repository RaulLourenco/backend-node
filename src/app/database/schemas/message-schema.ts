import { Schema, model, mongoose } from 'mongoose';
import { Message } from '../../components/messages/message';

const MessageSchema = new Schema({
  conversationId: String,
  timestamp: String,
  from: String,
  to: String,
  text: String
});

export function toDTO(messageDTO: Message) {
  return new messageSchema({
    conversationId: messageDTO.conversationId,
    timestamp: messageDTO.timestamp,
    from: messageDTO.from,
    to: messageDTO.to,
    text: messageDTO.text
  });
}

export const messageSchema = model<Message>("messages", MessageSchema, "messages");