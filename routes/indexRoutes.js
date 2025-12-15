const express = require("express");
const { dashboard, addMovie, viewMovie, showMovie, deleteMovie, editMovie, updateMovie } = require("../controllers/movieController.js");
const upload = require("../middleware/multer.js");
const router = express.Router();

router.get("/", dashboard);
router.get("/add-movie" , addMovie);
router.post("/add-movie", upload.single("photo") ,viewMovie);
router.get("/view-movie", showMovie)
router.get("/delete-movie/:id", deleteMovie)
router.get("/edit-movie/:id", editMovie);  
router.post("/edit-movie/:id", upload.single("photo"), updateMovie);

module.exports = router;