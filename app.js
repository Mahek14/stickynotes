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

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const noteSchema = {
    title: String,
    content: String
};

const Note = mongoose.model("Note", noteSchema)


app.get("/", (req, res) => {
    Note.find({}, function (err, notes) {
        res.render("note", {
            notes: notes
        });
    });
});

app.post("/", (req, res) => {
    const note = new Note({
        title: req.body.noteTitle,
        content: req.body.noteBody
    })
    note.save(function (err) {
        if (!err) {
            res.redirect("/");
        }
    });
});

app.post("/delete", (req, res) => {
    const deleteNote = req.body.delete
    Note.findByIdAndRemove(deleteNote, (err) => {
        if (!err) {
            res.redirect("/")
        }
    })
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('listening on port ' + port));