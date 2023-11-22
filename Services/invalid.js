const express = require("express");
const path = require("path");

exports.getInvalid = (req, res) => {
    res.sendFile(path.join(__dirname, "../src/pages/", "404-page.html"))
}