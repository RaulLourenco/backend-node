import { mongoose, Schema } from 'mongoose';

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    type: Enumerator,
    color: Enumerator,
    availableStores: Array
});

productSchema.methods.sayHello = function () {
    return `This is a shared function: ${this.username}`
}
module.exports = productSchema