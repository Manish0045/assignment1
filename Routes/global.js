const express = require("express");
const router = express.Router();

router
    .use('/', require("./homepage"))
    .use('/about', require("./about"))
    .use('/contact', require("./contact"))
    .use("/invalid", require("./invalid"))

module.exports = router;