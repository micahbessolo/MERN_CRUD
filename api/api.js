const express = require("express");
// const morgan = require("morgan");
const bodyParser = require('body-parser');
const cors = require('cors');

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

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send("hello world");
})

// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage');
})


app.listen(port, () => {
    console.log("server started listening on port: ", port);
});