const express = require("express");
const router = express.Router();

router
    .get('/', require("../Services/contact").getContact)

module.exports = router;