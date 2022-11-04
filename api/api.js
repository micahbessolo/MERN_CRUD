const express = require("express");
// const morgan = require("morgan");
const bodyParser = require('body-parser');

const port = '3000'

const app = express();

// Loads middleware
app.use(bodyParser.json());
// Cors Header Middleware
app.use(cors());

app.use(function(req, res, next) {
    // updates to match the domain you make the request from
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.listen(port, () => {
    console.log("server started listening on port: ", port);
});