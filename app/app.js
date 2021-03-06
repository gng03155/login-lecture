"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
// const morgan = require("morgan");
const path = require('path')


const dotenv = require("dotenv");
dotenv.config();
const app = express();

const accessLogStream = require("./src/config/log");

//라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
// app.use(morgan("dev"));
// app.use(morgan("common", { stream: accessLogStream }));
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 같은 문자가 포함될 경우 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

// 미들 웨어를 등록해주는 메서드
app.use("/", home);

module.exports = app;

