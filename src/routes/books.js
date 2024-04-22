const router = require('express').Router();
//const loggerTwo = require('../middleweare/loggerTwo');

const {
   getAllBooks,
   getBookById,
   createBook,
   updateBook,
   deleteBook
} = require('../controllers/books')
//router.use(loggerTwo);
router.get('/books', getAllBooks);
router.get('/books/:book_id', getBookById);
router.post('/books', createBook);
router.patch('/books/:book_id', updateBook);
router.delete('/books/:book_id', deleteBook);

module.exports = router;
