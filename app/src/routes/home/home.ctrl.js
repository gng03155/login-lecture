"use strict";

const users = {
    id: ["test", "test2", "test3"],
    psword: ["1234", "1234", "4321"],
}

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
}

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                })
            }
        } else {
            return res.json({
                success: false,
                msg: "login fail",
            })
        }


    },
};

module.exports = {
    output,
    process,
}