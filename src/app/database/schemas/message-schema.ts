import { Schema, model, mongoose } from 'mongoose';
import { Message } from '../../components/messages/message';
  
const MessageSchema = new Schema({
    conversationId: String,
    timestamp: String,
    from: String,
    to: String,
    text: String
  });

export const messageSchema = model<Message>("messages", MessageSchema, "messages");