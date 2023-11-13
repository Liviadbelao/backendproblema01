import { Router } from "express";

const studentsRoutes = Router();

studentsRoutes.get("/", (req, res)=>{
    return res.status(200).send({ message: "Get all Students" })
})
studentsRoutes.get("/:id", (req, res)=>{
    const { id } = req.params;
    return res.status(200).send({ message: `Get Students by id ${id}` })
})
studentsRoutes.post("/", (req, res)=>{
    const { nome, email, age } = req.body;
    if(!nome || !email || !age){
        return res.status(400).send({ message: "falhou bb" })
    }
    return res.status(200).send({ message: ` Estudante ${nome}, do email ${email} tem a idade ${age}` })
})

studentsRoutes.put("/:id", (req, res)=>{
    const { id } = req.params;
    const { nome, email, age } = req.body;
    if(!nome || !email || !age){
        return res.status(400).send({ message: "falhou bb" })
    }
    return res.status(200).send({ message: `Editou o id ${id}`})
}) 
studentsRoutes.delete("/:id", (req, res)=>{
    const { id } = req.params;
    return res.status(200).send({ message: `Deletado o estudante do id: ${id}` })
})
export default studentsRoutes;