const express = require('express');
const app = express();
const path = require('path');

const PORT = 7777

app.use(express.static('./public'))

app.get('/', function (req, res) {
    res.sendFile(path.join((__dirname, './public')));
});

app.listen(PORT, function() {
    console.log("PORT: " + PORT);
});