require("dotenv").config();
const express = require("express");

const app = express();

app.use("/", require("./Routes/global"));
app.use("*", require("./Services/invalid").getInvalid)

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.listen(PORT, HOST, () => {
    console.log("server is running on http://" + HOST + ":" + PORT)
})