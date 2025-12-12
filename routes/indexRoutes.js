const express = require("express");
const { dashboard, addMovie, viewMovie } = require("../controllers/movieController.js");
const upload = require("../middleware/multer.js");
const router = express.Router();

router.get("/", dashboard);
router.get("/add-movie" , addMovie);
router.post("/add-movie", upload.single("photo") ,viewMovie);

module.exports = router;