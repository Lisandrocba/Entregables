import mongoose from "mongoose";

const cartsSchema = new mongoose.Schema({
    timestamp:{
        type: Date,
        required: true
    },
    products:{
        type: Object,
        required: true
    }
})

export const cartModel = mongoose.model('carts', cartsSchema)