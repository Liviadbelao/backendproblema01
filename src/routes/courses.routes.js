import { Router } from "express";
import { createCourses, deleteCurso, getCourses, getCoursesbyid, upedate } from "../controllers/courses.controller.js";


const courses = Router();

courses.get("/", getCourses)
courses.get("/:id", getCoursesbyid)
courses.post("/", createCourses)
courses.put("/:id",upedate)
courses.delete("/:id", deleteCurso )

export default courses;