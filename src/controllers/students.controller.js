import { Student } from "../models/students/Students.js";
import { StudentsList } from "../models/students/StudentsList.js";

const list = new StudentsList()
export const createStudents = (req, res) =>{

    const { nome, email, age } = req.body;

     
        if (!nome || !email || !age) {
            return res.status(400).send({ message: "parametros incompletos" })
        }
        const student = new Student(nome, email, age)
        list.addStudent(student)
    return res.status(200).send({ message: "aluno criado" , student,})
    

}
export const getStudentsbyid  = (req, res) =>{
    const { id } = req.params

    const student = list.getStudent(id)
    if(!student){
        return res.status(404).send({ message:`num achou ${id}` })
    
    }
    return res.status(200).send( student )

}
export const getStudents  = (req, res) =>{
    const students = list.getAllStudents()
    if (students.length) {
        return res.status(200).send({ students })
    }
    return res.status(200).send({ message:`fail ` })

}
export const upedate  = (req, res) =>{
    const { id } = req.params;
    const { nome, email, age } = req.body;
 

if (!nome || !email || !age) {
    return res.status(400).send({ message: "falhou bb" })
}
const student = list.getStudent(id)
if(!student){
    return res.status(404).send({ message: "foi n" })
}
const updateStudent = list.updateStudent(id, nome, email, age)
    return res.status(200).send({ message: updateStudent } )

}
export const excloi = (req, res) =>{


    const { id } = req.params;

    const student = list.getStudent(id)
    if(!student){
        return res.status(404).send({ message: "foi n" })
    }
    list.removeStudent(id)
    return res.status(200).send({ messege: "aluno removido", student, })

}