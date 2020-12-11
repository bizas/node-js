const express = require("express");
const path = require("path");

const rootDir = require("./../util/path");

const router = express.Router();

router.get('/add-product',(req,res,next) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post('/add-product',(req,res,next) => {
    // res.send('<h1>The "Add Product" Page<h1>');
    res.redirect("/");
});

module.exports = router;