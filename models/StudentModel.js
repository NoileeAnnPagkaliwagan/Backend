import pool from '../config/db.js';

export const getStudents = async () =>{
    const [rows] = await pool.query("SELECT * FROM `tblstudent`");
    return rows;
}

export const insertStudent = async (name, srCode, course) =>{
    const [result] = await pool.query(
        "INSERT INTO tblstudent(name, sr-code, course) VALUES (?, ?, ?)",
        [name, srCode, course]
    );
    return result.insertId;
}

export const updateStudent = async (id, title, genre, status) =>{
    const [result] = await pool.query(
        "UPDATE tblstudent SET name = ?, sr-code = ?, course = ? WHERE id = ?",
        [name, srCode, course, id]
    );
    return result.affectedRows;
}

export const deleteStudent = async (studentId) =>{
    const [result] = await pool.query(
        "DELETE FROM tblstudent WHERE id = ?", [studentId]
    );
    return result.affectedRows;
}