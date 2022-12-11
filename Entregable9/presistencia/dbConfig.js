import mongoose from 'mongoose';

export async function dbConnect(){
    const URL = 'mongodb+srv://proyectoFinal:proyectoFinal@cluster0.oel9pnk.mongodb.net/entregable9?retryWrites=true&w=majority'
    mongoose.connect(URL)
}