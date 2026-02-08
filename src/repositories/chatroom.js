import db from "../loaders/mysql.js";
import User from "../models/users.js";
import * as userDb from "./users.js";

export async function showChatroom({ userNum }) {
  const [result] = await db.query(
    "SELECT USER_CHATROOM.user_num, CHATROOM.chatroom_num,CHATROOM.chatroom_name FROM `USER_CHATROOM` INNER JOIN `CHATROOM` ON USER_CHATROOM.CHATROOM_NUM = CHATROOM.CHATROOM_NUM WHERE `user_num`=? LIMIT 100",
    [userNum],
  );
  return result;
}

export async function user_chatroomShow() {
  const [rows] = await db.query("SELECT * FROM `USER_CHATROOM`");
  console.log(rows);
}

export async function createChatroomDB({ chatroom_name }) {
  const [result] = await db.query(
    "INSERT INTO `CHATROOM` (`chatroom_name`) VALUES (?)",
    [chatroom_name],
  );
  console.log("[repo] createChatroom Done");
  return result.insertId;
}

export async function createUserChatroomDB({
  user_num,
  member_name,
  chatroom_num,
}) {
  try {
    console.log("[repo] createUserChatroomDB called");
    const member_num = await userDb.getUserId(member_name);
    await db.query(
      "INSERT INTO `USER_CHATROOM` (`user_num`,`chatroom_num`) VALUES (?,?)",
      [user_num, chatroom_num],
    );
    await db.query(
      "INSERT INTO `USER_CHATROOM` (`user_num`,`chatroom_num`) VALUES (?,?)",
      [member_num, chatroom_num],
    );
  } catch (e) {
    console.log(e);
  }
}
