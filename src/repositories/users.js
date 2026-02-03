// repositories/user.repository.js
import db from "../loaders/mysql.js";
import User from "../models/users.js";

export async function findByUsername(name) {
  const [rows] = await db.query("SELECT * FROM `USER` WHERE `user_name` = ?", [
    name,
  ]);

  if (!rows.length) return null;

  return new User(rows[0]); // 👈 Domain으로 변환
}
export async function checkUser({ id, pw }) {
  const [results, fields] = await db.query(
    "SELECT `user_id`, `user_pw`, `user_num` FROM `USER` WHERE `user_id` = ? AND `user_pw` = ?",
    [id, pw],
  );
  if (results.length > 0) {
    return { message: "Sign-In Successful", id, pw, num: results[0].user_num };
  } else {
    const error = new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
    error.status = 401; // 인증 실패 상태 코드 추가 (선택사항)
    throw error;
  }
}

export async function save(user) {
  console.log("[sql] Saving user to DB: %o", user);
  await db.query(
    "INSERT INTO `USER` (`user_id`, `user_pw`,`user_birth`,`user_phone_int`,`user_name`) VALUES (?, ?, ?, ?, ?)",
    [user.id, user.pw, user.birth, user.phone, user.name],
  );
}
export async function show() {
  const [rows] = await db.query("SELECT * FROM `USER`");
  console.log(rows);
}

export async function getUserId(user_name) {
  const [rows] = await db.query(
    "SELECT user_num FROM USER WHERE user_name = ?",
    [user_name],
  );

  if (!rows.length) {
    throw new Error(`USER NOT FOUND: ${user_name}`);
  }

  return rows[0].user_num;
}
