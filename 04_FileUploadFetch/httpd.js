const express = require("express");
const path = require("path");
const app = express();

// Установить каталог для статических файлов
app.use(express.static(path.join(__dirname,"public")));

// Установить загрузку файлов
const multer = require("multer");
app.use(multer(
    {dest: path.join(__dirname,"public/uploads")})
    .single("fileData"));


// Настроим модуль для разборки запросов
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// Подключим маршруты
const router = require("./routes");
app.use(router);


// Настройка соединения с базой
const mongoUri = "mongodb+srv://pv911User:QweAsdZxc!23@nodecluster.a9rlr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoose = require("mongoose");


mongoose.connect( // Соединиться с базой
    mongoUri, // строка соединения
    { useNewUrlParser: true, useUnifiedTopology: true }, // обязательные параметры

    // Асинхронный подход - после того, как устоновится соедиенение
    // JS выполнит эту функцию. В качестве аргумента будет передана ошибка - или null

    function (err) { // после соединения обработать результат
        if (err) {console.log(err); return;} // если ошибка - вывести и остановить запуск
        console.log("http://localhost:3000");
        app.listen(3000); // если все ок - запустить веб сервер
    }
);
