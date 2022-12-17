import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
    author: {
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        edad: {
            type: Number,
            required: true
        },
        alias: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        }, 
    },
    text: {
        type: String,
    }
})

export const chatModel = mongoose.model('Chat', chatSchema)