const Book = require("../models/book");

const getBooks = (request, response) => {
  return Book.find({})
    .then((data) => {
      response.status(200).send(data);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const getBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findById(book_id)
    .then((book) => {
      if (!book) {
        response.sendStatus(404);
      } else {
        response.status(200).send(book);
      }
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

const createBook = (request, response) => {
  return Book.create({ ...request.body })
    .then((book) => {
      response.status(201).send(book);
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

const updateBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findByIdAndUpdate(book_id, { ...request.body })
    .then((book) => {
      response.status(201).send(book);
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

const deleteBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findByIdAndDelete(book_id, { ...request.body })
    .then((book) => {
      if (!book) {
        response.sendStatus(404);
      } else {
        response.status(201).send(book);
      }
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
