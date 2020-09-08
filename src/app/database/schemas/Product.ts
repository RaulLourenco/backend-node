import { model, Schema } from 'mongoose';

enum Type {
    "Eletrodoméstico" = 1,
    "Móveis" = 2,
    "Smartphone" = 3,
    "Informática" = 4
}

enum Color {
    "Branco" = 1,
    "Preto" = 2,
    "Cinza" = 3,
    "Azul" = 4
}

const  productModel = new Schema({
    name: String,
    price: Number,
    type: Type,
    color: Color,
    availableStores: Array,
    productID: String
});

export const productSchema = model('product', productModel);