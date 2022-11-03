import mongoose from "mongoose";

export async function dbConect() {
  const URL =
    "mongodb+srv://proyectoFinal:proyectoFinal@cluster0.oel9pnk.mongodb.net/entregable2?retryWrites=true&w=majority";
  mongoose.connect(URL);
}
