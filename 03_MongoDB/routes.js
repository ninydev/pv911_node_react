const express = require("express");
const router = express.Router();


const cSlider = require("./controllers/SliderController");
router.get("/api/slider", cSlider.get);
router.post("/api/slider", cSlider.post);
router.delete("/api/slider", cSlider.delete);



module.exports = router;
