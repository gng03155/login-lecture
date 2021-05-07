"use strict";

const User = require('../../models/User');
const logger = require("../../config/logger");


const output = {
    home: (req, res) => {
        logger.info(`GET / 304 "홈 화면으로 이동"`);
        res.render("home/index");
    },
    login: (req, res) => {
        logger.info(`GET / login 304 "로그인 화면으로 이동"`);
        res.render("home/login");
    },
    register: (req, res) => {
        logger.info(`GET / regiter 304 "회원가입 화면으로 이동"`);
        res.render("home/register");
    }
}

const process = {
    login: async (req, res) => {

        const user = new User(req.body);
        const response = await user.login();

        const url = {
            method: "POST",
            path: "/login",
            //정상응답 200 , 페이지이동 300 , 클라이언트 오류 400 , 서버 오류 500
            status: response.err ? 400 : 201,
        }

        log(response, url);
        return res.json(response);

    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        const url = {
            method: "POST",
            path: "/login",
            status: response.err ? 400 : 200,
        }

        log(response, url);
        return res.json(response);
    },
};

const log = (response, url) => {
    if (response.err) {
        logger.error(`${url.method} ${url.path} ${url.status} Response : ${response.success} , ${response.err}`);
    }
    else {
        logger.info(`${url.method} ${url.path} ${url.status} Response : ${response.success} , ${response.msg || ""}`);
    }
}

module.exports = {
    output,
    process,
}