import { Router } from "express";
import {
    getStudents,
    getStudentsbyid,
    createStudents,
    upedate,
    excloi
} from '../controllers/students.controller.js'

const studentsRoutes = Router();

studentsRoutes.get("/", getStudents)
studentsRoutes.get("/:id", getStudentsbyid)
studentsRoutes.post("/", createStudents)
studentsRoutes.put("/:id",upedate)
studentsRoutes.delete("/:id", excloi)


export default studentsRoutes;