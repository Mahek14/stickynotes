require("dotenv").config();
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

// mongoose.connect("mongodb://localhost:27017/StickyNotesDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

app.get("/",(req,res)=>{
    res.render("note")
});

app.post("/",(req,res)=>{
    console.log("DOne");
})

const port = process.env.PORT || 3000 ; 

app.listen(port, () => console.log('listening on port ' + port));