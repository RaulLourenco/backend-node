import { model, Schema } from 'mongoose';

const  productModel = new Schema({
    name: String,
    price: Number,
    type: Type,
    color: Color,
    availableStores: Array,
    productID: String
});

export const productSchema = model('product', productModel);