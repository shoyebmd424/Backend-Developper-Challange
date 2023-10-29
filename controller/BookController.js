import { BookModel } from "../model/Books.js";

export const createBook = async (req, res) => {
  try {
    const row = await BookModel.findOne({ title: req.body.title });
    if (row) {
      return res.send({
        success: false,
        message: "This book already added please add another book",
      });
    }
    await new BookModel(req.body).save();
    res.status(200).send({
      success: true,
      message: "Your book details successfully  saved ",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "something went wrong..." });
  }
};

export const UpdateBook = async (req, res) => {
  try {
    const updatedBook = await BookModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (updatedBook) {
      res
        .status(200)
        .send({ success: true, message: "Book update successfully..." });
    } else {
      res.status(400).send({
        success: false,
        message: "Book updating problem please try again...",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "something went wrong..." });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const row = await BookModel.findByIdAndDelete(req.params.id);
    if (row) {
      res
        .status(200)
        .send({ success: true, message: "Book deleted successfully" });
    } else {
      res.status(404).send({ success: false, message: "Book id is not found" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "something went wrong..." });
  }
};
export const getOneBook = async (req, res) => {
  try {
    const row = await BookModel.findById(req.params.id);
    if (row) {
      res.status(200).send({ success: true, message: row });
    } else {
      res.status(404).send({ success: false, message: "Book id is not found" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "something went wrong..." });
  }
};

export const getallBooks = async (req, res) => {
  try {
    const row = await BookModel.find();
    res.status(200).send({ success: true, message: row });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "something went wrong..." });
  }
};
