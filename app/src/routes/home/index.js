"use strict";

const express = require("express");

//이렇게 선언하면 app에서 세팅한 값을 받아올 수 없음
// const router = express();

const router = express.Router();

const { hello, login } = require("./home.ctrl");

//루트 경로 받아오기
router.get("/", hello);

router.get("/login", login);

module.exports = router;

