"use strict";
const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const { id, psword } = await UserStorage.getUserInfo(client.id);
        if (id) {
            if (id === client.id && psword === client.psword) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호 틀림" };
        }
        return { success: false, msg: "존재하지 않는 아이디" };

    }

    async register() {
        try {
            const client = this.body;
            //위에서 처럼 return으로 받아오면 err는  response값에 적용이 되기 때문에 catch로 사용 불가하지만 throw로 보내주면 response가 해당 err를 갖고 있는게 아닌 async함수 자체로 보내주기 때문에 catch에서 불러 올 수 있음
            const response = await UserStorage.save(client);
            return response;
        }
        catch (err) {
            return { success: false, msg: err };
        }
    }

}

module.exports = User;