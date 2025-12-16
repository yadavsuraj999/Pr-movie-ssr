const express = require("express");
const { frontEnd, frontEndView } = require("../controllers/movieController");
const router = express.Router();

router.get("/", frontEnd);
router.get("/frontendview/:id", frontEndView);  

module.exports = router;
