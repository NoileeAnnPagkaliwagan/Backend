import * as BookModel from "../models/BookModel.js";

export const fetchBook = async (req, res) =>{
    try{
        const book = await BookModel.getBook();
        res.status(200).json({success: true, message: book});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const createBook = async (req, res) =>{
    const {title, genre, status} = req.body
    try{
        const bookId = await BookModel.insertBook(title, genre, status);
        res.status(200).json({success: true, message: bookId});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"})
    }
}

export const editBook = async (req, res) => {
    const {title, genre, status} = req.body;
    const {bookId} = req.params

    try{
        const updateId = await BookModel.updateBook(title, genre, status, bookId);
        res.status(200).json({success: true, message: updateId});
    }catch(e){
        console.log(e);
        res.status(200).json({success: false, message: "Internal Server Error"});
    }
}


export const deleteBook = async (req, res) => {
    const {bookId} = req.params;

    try{
        const deletedId = await BookModel.deleteBook(bookId);
        res.status(200).json({success: true, message: deletedId});
    }catch(e){
        console.log(e);
        res.status(200).json({success: false, message: "Internal Server Error"});
    }
}