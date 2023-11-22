const express = require("express");
const router = express.Router();

router
    .get('/', require("../Services/homepage").getHomepage)
    .get('/home', require("../Services/homepage").getHomepage)

module.exports = router;