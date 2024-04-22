const getAllBooks = (request, response) => {
   response.status(200);
   response.send("Get all books");
};

const getBookById = (request, response) => {
   console.log("get book by id");
   const { book_id } = request.params;
   response.status(200);
   response.send(`book with id: ${book_id}`);
};

const createBook = (request, response) => {
   console.log("create book");
   response.status(201);
   response.send(request.body);
};

const updateBook = (request, response) => {
   console.log("update book");
   response.status(200);
   response.send(request.body);
};

const deleteBook = (request, response) => {
   console.log("delete book");
   const { book_id } = request.params;
   response.status(200);
   response.send(`book with id: ${book_id} is delete`);
};

module.exports = {
   getAllBooks,
   getBookById,
   createBook,
   updateBook,
   deleteBook
}