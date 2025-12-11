const express = require("express");
const  viewRoute = require("./routes/indexRoutes");
const app = express();
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("uploads", express.static("uploads"));
const PORT = 6600;


app.use("/", viewRoute);


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})