const express = require('express');

const app = express();

let response = "";

app.use("/users",(req,res,next) => {
    response += '<h1>First Middleware</h1>';
    res.send(response);
})

app.use("/",(req,res,next) => {
    response += "<h2>Second Middleware</h2>"
    res.send(response);
})

app.listen(3000);