import { v4 as uuidv4 } from 'uuid';
export class Student{
    constructor(nome, email, age){
        this.id = uuidv4();
        this.nome = nome;
        this.email = email;
        this.age = age
       
    }
}