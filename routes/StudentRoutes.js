import * as StudentController from '../controller/Student.Controller.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentController.fetchStudents);
studentRoutes.post('/new', StudentController.createStudent);
studentRoutes.put('/edit/:studentId', StudentController.editStudent);
studentRoutes.delete('/delete/:studentId', StudentController.deleteStudent);

export default studentRoutes;