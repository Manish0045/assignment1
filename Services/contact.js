const express = require("express");
const path = require("path");

exports.getContact = (req, res) => {
    res.sendFile(path.join(__dirname, "../src/pages/", "contact-me.html"))
}