import { v4 as uuid } from 'uuid';

//estos es un comentario de prueba
export class Todo {
    constructor(description){
        this.id = uuid()
        this.description = description
        this.done = false
        this.createdAt = new Date()

    }
}