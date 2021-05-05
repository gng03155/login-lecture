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

    static getUsers(...fields) {
        // const users = this.#users;
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

    static save(userInfo) {
        // const users = this.#users;
        return { success: true };
    }
}

module.exports = UserStorage;