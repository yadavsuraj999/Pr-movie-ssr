const router = require("../routes/indexRoutes");

const viewMovie = (req, res)=>{
    return res.render("index")
};
module.exports = {viewMovie}