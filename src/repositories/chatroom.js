import db from "../loaders/mysql.js";
import User from "../models/users.js";

export async function showChatroom({ userNum }) {
  const [result] = await db.query(
    "SELECT USER_CHATROOM.user_num, CHATROOM.chatroom_name FROM `USER_CHATROOM` INNER JOIN `CHATROOM` ON USER_CHATROOM.CHATROOM_NUM = CHATROOM.CHATROOM_NUM WHERE `user_num`=? LIMIT 100",
    [userNum],
  );
  console.log(result);
  return result; // 👈 Domain으로 변환
}

export async function user_chatroomShow() {
  const [rows] = await db.query("SELECT * FROM `USER_CHATROOM`");
  console.log(rows);
}
