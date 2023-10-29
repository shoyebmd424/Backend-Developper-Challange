import Express from "express";
import {
  UpdateBook,
  createBook,
  deleteBook,
  getOneBook,
  getallBooks,
} from "../controller/BookController.js";

const BookRouter = Express.Router();

BookRouter.post("/", createBook);
BookRouter.put("/:id", UpdateBook);
BookRouter.delete("/:id", deleteBook);
BookRouter.get("/:id", getOneBook);
BookRouter.get("/", getallBooks);

export default BookRouter;
