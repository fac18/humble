const router = require("./router");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));

app.use(router);

module.exports = app;
