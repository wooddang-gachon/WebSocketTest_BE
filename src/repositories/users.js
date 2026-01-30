// repositories/user.repository.js
import db from "../loaders/mysql.js";
import User from "../models/users.js";

export async function findByUsername(username) {
  const [rows] = await db.query("SELECT * FROM users WHERE username = ?", [
    username,
  ]);

  if (!rows.length) return null;

  return new User(rows[0]); // 👈 Domain으로 변환
}

export async function save(user) {
  await db.query(
    "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
    [user.username, user.password, user.role],
  );
}
export async function show() {
  const [rows] = await db.query("SELECT * FROM USER");
  console.log(rows);
}
