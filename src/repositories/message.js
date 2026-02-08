import db from "../loaders/mysql.js";

export async function listMessagesByChatroomId({ chatroom_num }) {
  const [result] = await db.query(
    "SELECT * FROM `MESSAGE` WHERE chatroom_num = ?",
    [chatroom_num],
  );
  return result;
}

export async function saveMessage({ chatroom_num, user_num, message_text }) {
  const [result] = await db.query(
    "INSERT INTO `MESSAGE` (`message_text`, `chatroom_num`, `user_num`, `send_time`) VALUES (?, ?, ?, NOW())",
    [message_text, chatroom_num, user_num],
  );
  console.log(result);
  return result.insertId;
}
