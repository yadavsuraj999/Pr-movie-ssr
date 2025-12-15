const express = require("express");
const { frontEnd, frontEndView } = require("../controllers/movieController");
const router = express.Router();

router.get("/frontend", frontEnd);
router.get("/frontendview", frontEndView);

module.exports = router;