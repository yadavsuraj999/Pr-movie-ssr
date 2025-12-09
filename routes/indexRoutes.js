const express = require("express");
const { viewMovie } = require("../controllers/movieController");
const router = express.Router();

router.get("/", viewMovie);

module.exports = router;