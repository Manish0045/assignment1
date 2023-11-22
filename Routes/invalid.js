const express = require("express");
const router = express.Router();

router
    .get('/', require("../Services/invalid").getInvalid)

module.exports = router;