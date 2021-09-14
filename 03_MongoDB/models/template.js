const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModelName = new Schema({
    // TODO: Описать поля в коллекции
       name: String
    // Описание полей не имеет значения
    // JS содает объект динамически
    });

module.exports = mongoose.model("ModelName", ModelName);