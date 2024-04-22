const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
//const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const booksRouter = require('./routes/books');
const loggerOne = require('./middleweare/loggerOne');

dotenv.config();
const {
  PORT = 3005,
  API_URL = "127.0.0.1",
  MONGODB_URL="mongodb://localhost:27017/Backend_HW4"
} = process.env;
mongoose.connect(MONGODB_URL).then(() => console.log('connected to MongoDB')).catch(
  err => {if(err) throw err});
const app = express();



//app.use(cors);
app.use(loggerOne);
app.use(bodyParser.json());


app.get("/", (request, response) => {
   response.status(200);
   response.send("Hello Everyone!!!");
})

app.post("/", (request, response) => {
   response.status(200);
   response.send("Hello from POST!!!");
})

app.use(userRouter);
app.use(booksRouter);
app.listen(PORT, () => {
      console.log(`Сервер запущен по адресу http://${API_URL}:${PORT}/`);
    })