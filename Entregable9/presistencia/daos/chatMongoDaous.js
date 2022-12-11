import {MongoClass} from '../contenedores/MongoClass.js';
import {chatModel} from '../models/chat.js'


export class ChatMongoDaos extends MongoClass{
    constructor(){
        super(chatModel)
    }
}