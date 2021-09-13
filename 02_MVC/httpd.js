const express = require("express");
const app = express();

const controller = require("./controllers/simpleController");

app.route ("/1")
    .get(controller.get)
    .post(controller.post);

app.listen(3000);