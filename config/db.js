const mongoosse = require("mongoose");

const MON_URI = "mongodb://localhost:27017/movieDB";

const connectDB = async () => {
    mongoosse.connection.on("connected", () => {
        console.log("database connected successfully.......");
    });

    await mongoosse.connect(MON_URI)
}

module.exports = connectDB;