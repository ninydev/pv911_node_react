const express = require("express");
const router = express.Router();

/*
const cEntity = require("./controllers/entityController");
router.get("/api/entities", cEntity.get);
router.post("/api/entities", cEntity.post);
router.put("/api/entities", cEntity.put);
router.delete("/api/entities", cEntity.delete);
*/

const cBoard = require("./controllers/boardController");
router.get("/api/board", cBoard.get);
router.post("/api/board", cBoard.post);
router.put("/api/board", cBoard.put);
router.delete("/api/board", cBoard.delete);

const cColumn = require("./controllers/columnController");
router.get("/api/column", cColumn.get);
router.post("/api/column", cColumn.post);
router.put("/api/column", cColumn.put);
router.delete("/api/column", cColumn.delete);

const cCard = require("./controllers/cardController");
router.get("/api/card", Card.get);
router.post("/api/card", Card.post);
router.put("/api/card", Card.put);
router.delete("/api/card", Card.delete);

const cComment = require("./controllers/commentController");
router.get("/api/comment", cComment.get);
router.post("/api/comment", cComment.post);
router.put("/api/comment", cComment.put);
router.delete("/api/comment", cComment.delete);


module.exports = router;
