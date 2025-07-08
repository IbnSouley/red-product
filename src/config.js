const express = require('express');
const path = require("path");
const bcrypt = require("bcrypt");

const app = express();

// use
app.set('view engine', "ejs");





const port = 5000;
app.listen(port, () => (
    console.log(`Serveur runing on port: $(port)`)
))