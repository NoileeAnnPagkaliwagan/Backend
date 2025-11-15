import * as BookController from '../controller/BookController.js';
import express from "express";

const bookRoutes = express.Router();

bookRoutes.get('/all', BookController.fetchBook);
bookRoutes.post('/new', BookController.createBook);
bookRoutes.put('/edit/:bookId', BookController.editBook);
bookRoutes.delete('/delete/:bookId', BookController.deleteBook);

export default bookRoutes;