const express = require("express");
const path = require("path");

exports.getAbout = (req, res) => {
    res.sendFile(path.join(__dirname, "../src/pages/", "about.html"))
}