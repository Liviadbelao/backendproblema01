export class StudentsList {
    constructor(){
        this.students = []
    }
    addStudent(student){
        this.students.push(student)
    }
    getAllStudents(){
        return this.students
    }
    getStudent(id){
        return this.students.find((student)=> student.id == id)
    }
    updateStudent(id, nome, email, age){
        this.students = this.students.map((student) =>{
            if(student.id == id){
                this.nome = nome;
            this.email = email;
            this.age = age
            }
            return student;
        })
     return this.getStudent(id)
    }
    removeStudent(id){
        this.students = this.students.filter((student)=> student.id != id)
    }
}
