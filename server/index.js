const express = require("express");
const path = require("path");
const router = require("./router");
const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));

app.use(router);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

module.exports = app;
