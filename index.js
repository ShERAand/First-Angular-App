const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require("./config/db");

const app = express();

const port = 3000;

mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
    console.log('Succesfull connection to the database')
});

mongoose.connection.on("error", (err) => {
    console.log('Not Succesfull connection to the database' + err)
});

app.listen(port, () => {
    console.log("The server was runnung on the port: " + port)
});

app.get("/", (req, res) => {
    res.send("Home page")
});