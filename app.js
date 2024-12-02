const express = require('express');
const mongoose = require('mongoose');
const routes = require('./api/routes/userAuth');
const cors = require('cors')
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));


app.listen(20002, ()=> {
    console.log("serveris  working on 20002");
})

mongoose.connect("mongodb+srv://adi:1234a@first.xqnvs.mongodb.net/?retryWrites=true&w=majority&appName=first")

app.use('/user', routes);