import { model, Schema } from 'mongoose';

const  productModel = new Schema({
    name: String,
    price: Number,
    type: {
        type: String,
        enum: ['Eletrodoméstico', 'Móveis', 'Smartphone', 'Informática'],
        default: 'Eletro'
    },
    color: {
        type: String,
        enum: ['Branco', 'Preto', 'Cinza', 'Azul'],
        default: 'Branco'
    },
    availableStores: Array,
    productID: String
});

export const productSchema = model('product', productModel);