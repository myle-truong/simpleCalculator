//jshint esver:6
const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express, be nice to me")
})
app.listen(3000, () => {
    console.log("Server start on port 3000");
});