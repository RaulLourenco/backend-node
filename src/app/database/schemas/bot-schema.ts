import { Schema, model } from 'mongoose';
  
export const Bot = new Schema({
    id: { type: Schema.Types.ObjectId, required: false },
    name: String
  });

const bots = model("bots", Bot);
export default bots;