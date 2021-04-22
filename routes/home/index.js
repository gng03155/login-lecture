"use strict";

const express = require("express");
const router = express();

const { hello, login } = require("./home.ctrl");

//루트 경로 받아오기
router.get("/", hello);

router.get("/login", login);

module.exports = router;
