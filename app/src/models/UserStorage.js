"use strict";

const db = require("../config/db");
const fs = require("fs").promises;

class UserStorage {

    static async getUserInfo(id) {
        return await new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });

        });
    }

    static async save(userInfo) {
        return await new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id,name,psword) VALUES(?,?,?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.psword],
                (err) => {
                    if (err) reject(`${err}`);
                    resolve({ success: true });
                });
        });
    }
}

module.exports = UserStorage;
