"use strict";

//모듈
const express = require("express");
const app = express();
const path = require('path')


// 앱 세팅
// app.set('views', __dirname + '/views');
// app.set('views', path.join(__dirname, 'views'));
// app.set("views", path.join(__dirname, "..", "views"));
app.set("views", "./src/views");
app.set("view engine", "ejs");

//라우팅
const home = require("./src/routes/home");

// 미들 웨어를 등록해주는 메서드
app.use("/", home);

module.exports = app;