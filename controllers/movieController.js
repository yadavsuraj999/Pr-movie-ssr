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
        console.log(getMovie);
        await getMovie.save()
        return res.redirect("/view-movie")

    } catch (error) {
        console.log(error);
    }

}

const showMovie = async (req, res) => {
    try {
        const movies = await Movies.find();
        res.render("viewMovies", { movies });
    } catch (err) {
        console.log(err);
    }
};

const deleteMovie = async (req, res) => {
    try {

        const movieId = req.params.id;
        await Movies.findByIdAndDelete(movieId);
        return res.redirect("/view-movie");
    } catch (error) {
        console.log(error);
        return res.status(500).send("An error occurred while deleting the movie");
    }
};

const editMovie = async (req, res) => {
    try {
        const movieId = req.params.id;
        const movie = await Movies.findById(movieId);
        res.render("editMovie", { movie });
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while loading the edit page");
    }
};

const updateMovie = async (req, res) => {
    try {
        const movieId = req.params.id;

        const movie = await Movies.findById(movieId);

        movie.name = req.body.name;
        movie.genre = req.body.genre;
        movie.date = req.body.date;
        movie.description = req.body.description;
        movie.rating = req.body.rating;
        if (req.file) {
            movie.photo = req.file.path;
        }
        await movie.save();
        return res.redirect("/view-movie");
    } catch (error) {
        console.log(error);
    }
};




module.exports = { dashboard, addMovie, viewMovie, showMovie, deleteMovie, editMovie, updateMovie }