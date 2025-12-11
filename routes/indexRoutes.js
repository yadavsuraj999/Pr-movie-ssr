const express = require("express");
const { dashboard, addMovie } = require("../controllers/movieController");
const router = express.Router();

router.get("/", dashboard);
router.get("/add-movie", addMovie)

module.exports = router;