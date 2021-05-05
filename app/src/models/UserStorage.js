"use strict";

const db = require("../config/db");

class UserStorage {

    static async getUserInfo(id) {
        //mysql자체는 promise로 반환하지 않기 때문에 따로 만들어서 사용해야 됨
        return await new Promise((resolve, reject) => {
            //조건 입력시 해당 조건에 맞는 db만 불러옴 
            //WHERE 뒤에 조건 = ?; 으로 불러오고 db.query(query, [id]를 넣어줘야됨 , callback)
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });

        });
    }

    static async save(userInfo) {
        return await new Promise((resolve, reject) => {
            //db를 추가할 때는 insert를 사용하고 아래처럼 사용하면 됨 딱히 설명할건 없네
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
