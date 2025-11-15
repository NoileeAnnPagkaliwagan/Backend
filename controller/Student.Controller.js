import * as StudentModel from "../models/StudentModel.js";

export const fetchStudents = async (req, res) =>{
    try{
        const students = await StudentModel.getStudents();
        res.status(200).json({success: true, message: students});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const createStudent = async (req, res) =>{
    const {title, genre, status} = req.body
    try{
        const studentId = await StudentModel.insertStudent(title, genre, status);
        res.status(200).json({success: true, message: studentId});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"})
    }
}

export const editStudent = async (req, res) => {
    const {title, genre, status} = req.body;
    const {studentId} = req.params

    try{
        const updateId = await StudentModel.updateStudent(title, genre, status, studentId);
        res.status(200).json({success: true, message: updateId});
    }catch(e){
        console.log(e);
        res.status(200).json({success: false, message: "Internal Server Error"});
    }
}


export const deleteStudent = async (req, res) => {
    const {studentId} = req.params;

    try{
        const deletedId = await StudentModel.deleteStudent(studentId);
        res.status(200).json({success: true, message: deletedId});
    }catch(e){
        console.log(e);
        res.status(200).json({success: false, message: "Internal Server Error"});
    }
}