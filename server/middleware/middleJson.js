const express = require("express");
const app = express();
const middleJson= app.use(express.json());

module.exports= middleJson;