import { Router } from "express";
import studentsRoutes from "./students.routes.js";
import courses from "./courses.routes.js";

const rotas = Router();

rotas.use("/students", studentsRoutes);
rotas.use("/courses", courses);

rotas.get("/", (req, res)=>{
    return res.status(200).send({ message: "servidor ok!" })
})
export default rotas;