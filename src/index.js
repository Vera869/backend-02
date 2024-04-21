const express = require('express');

const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/users');
const loggerOne = require('./middleweare/loggerOne');

dotenv.config();
const app = express();

const {
   PORT = 3005,
   API_URL = "127.0.0.1"
} = process.env;

app.use(cors);
app.use(loggerOne);
app.use(bodyParser.json());


app.get("/", (request, response) => {
   response.status(200);
   response.send("Hello Everyone !!!");
})

app.post("/", (request, response) => {
   response.status(200);
   response.send("Hello from POST!!!");
})

app.use(userRouter);

app.listen(PORT, () => {
      console.log(`Сервер запущен по адресу http://${API_URL}:${PORT}/`);
    })