const Movies = require("../models/movieSchema.js");
const router = require("../routes/indexRoutes.js");

const dashboard = (req, res) => {
    return res.render("index")
};

const addMovie = (req, res) => {
    return res.render("addmovie")
}

const viewMovie = async (req, res) => {
    console.log(req.body);
    console.log(req.file)

    try {
        const getMovie = new Movies({
            ...req.body,
            photo: req.file.path
        })
        await getMovie.save()
        return res.redirect("/")
    } catch (error) {
        console.log(error);
    }

}

module.exports = { dashboard, addMovie, viewMovie }