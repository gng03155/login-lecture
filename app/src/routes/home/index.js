"use strict";

const express = require("express");

//이렇게 선언하면 app에서 세팅한 값을 받아올 수 없음
// const router = express();

const router = express.Router();

const { output, process } = require("./home.ctrl");

//루트 경로 받아오기
router.get("/", output.home);
router.get("/login", output.login);
router.get("/register", output.register);

router.post("/login", process.login);
router.post("/register", process.register);


module.exports = router;

