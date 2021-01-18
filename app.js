const express = require("express");

const bodyParser = require("body-parser");
const e = require("express");

const app = express();

app.use(express.static("Public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});







app.listen(process.env.PORT || 3500, function(req, res){
    console.log("server successfully started on port 3500");
});