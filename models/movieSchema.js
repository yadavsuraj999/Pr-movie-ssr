const mongoose = require("mongoose");

const movies = mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    genre:{
        type:String,
        require: true
    },
    rating:{
        type:String,
        require: true
    },
    date:{
        type:String,
        require: true
    },
    photo:{
        type:String,
        require: true
    },
    description:{
        type:String,
        require: true
    },
})