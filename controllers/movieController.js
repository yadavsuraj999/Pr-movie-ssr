const router = require("../routes/indexRoutes");

const dashboard = (req, res) => {
    return res.render("index")
};

const addMovie = (req, res) => {
    return res.render("addmovie")
}
module.exports = { dashboard, addMovie }