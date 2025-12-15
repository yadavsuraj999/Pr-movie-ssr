const express = require("express");
const  viewRoute = require("./routes/indexRoutes");
const connectDB = require("./config/db");
const frontendRoute = require("./routes/frontend.routes");
const app = express();
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
const PORT = 6600;

connectDB()

app.use("/", viewRoute);
app.use("/", frontendRoute);


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})