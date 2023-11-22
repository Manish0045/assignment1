const express = require("express");
const router = express.Router();

router
    .get('/', require("../Services/about").getAbout)

module.exports = router;