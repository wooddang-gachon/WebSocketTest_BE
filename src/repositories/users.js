// repositories/user.repository.js
import db from "../loaders/mysql.js";
import User from "../models/users.js";

export async function findByUsername(username) {
  const [rows] = await db.query("SELECT * FROM `USER` WHERE `username` = ?", [
    username,
  ]);

  if (!rows.length) return null;

  return new User(rows[0]); // 👈 Domain으로 변환
}

export async function save(user) {
  console.log("[sql] Saving user to DB: %o", user);
  await db.query(
    "INSERT INTO `USER` (`user_num`, `user_id`, `user_pw`,`user_birth`,`user_phone_int`,`user_name`) VALUES (?, ?, ?, ?, ?, ?)",
    [user.num, user.id, user.pw, user.birth, user.phone, user.name],
  );
}
export async function show() {
  const [rows] = await db.query("SELECT * FROM `USER`");
  console.log(rows);
}
