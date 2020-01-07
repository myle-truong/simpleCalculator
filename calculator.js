//jshint esver:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // dung cho tat ca cac truong hop dung express
app.use(bodyParser.urlencoded({ extended: true })) // dung cho tat ca cac truong hop dung bodyParse


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("Kijk, the result of calculator is " + result)
})

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmicalculator.html")
});

app.post("/bmicalculator", (req, res) => {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);
    res.send("Your BMI is " + bmi);
})

app.listen(3000, () => {
    console.log("Server start on port 3000");
});