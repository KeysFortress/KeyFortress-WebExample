//File: app.js
const express = require("express")
const app = express()
var path = require('path')

const nunjucks = require('nunjucks');

nunjucks.configure("views", {
    autoescape: true,
    express: app
});

app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    res.render("pages/index.html")
})

app.get("/connect", (req, res) => {
    res.render("pages/connect.html")
})

app.listen(3000, () => {
    console.info(`Application running http://localhost:3000`)
})
