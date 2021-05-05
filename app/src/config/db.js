const mysql = require("mysql");

const db = mysql.createConnection({

    host: process.env.DB_HOST, // aws rds 서버 엔드포인트
    user: process.env.DB_USER, // aws rds 서버 계정?이름
    password: process.env.DB_PASSWORD, // 비밀번호
    database: process.env.DB_DATABASES, // 데이터베이스 생성 시 설정했던 이름
});

db.connect();

module.exports = db;

