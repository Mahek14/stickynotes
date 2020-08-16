const express = require ('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const ejs = require('ejs')

const app = express()



app.listen(3000,()=> { console.log("Server runing at port 3000");});