"use strict";

const fs = require("fs").promises;

class UserStorage {
    static #getAccount() {
        return fs.readFile("./src/databases/users.json")
            .then((data) => {
                const users = JSON.parse(data);
                return users;
            })
            .catch(console.error);
    }

    static async getUsers(isAll = false, ...fields) {
        const users = await this.#getAccount();
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    };

    static async getUserInfo(id) {
        const users = await this.#getAccount();
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static async save(userInfo) {
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)) {
            //throw로 err를 보내주면 await에서 catch로 받아 올 수 있음
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true };
    }
}

module.exports = UserStorage;
