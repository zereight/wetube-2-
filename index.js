const express = require("express");
const app = express();

const handleListening = () => {
    console.log(`Listening port: 4000`);
};

app.listen(4000, handleListening);