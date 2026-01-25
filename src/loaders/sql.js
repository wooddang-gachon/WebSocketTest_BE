const mysql = require("mysql2/promise"); // promise 버전 사용

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "gusdn414@",
  database: "my_database",
  waitForConnections: true,
  connectionLimit: 10, // 커넥션 풀에서 유지할 최대 연결 수
  queueLimit: 0,
});

module.exports = pool;
