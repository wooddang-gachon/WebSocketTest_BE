import mysql from "mysql2/promise";
import User from "../models/users.js";
import * as chatroomDB from "../repositories/chatroom.js";
import * as userDB from "../repositories/users.js";
import * as messageDB from "../repositories/message.js";

export default {
  async showChatroomService({ userNum }) {
    console.log("[Service] chatroom showChatroomService called");
    try {
      const result = await chatroomDB.showChatroom({ userNum });
      console.log(userNum, result.length, result);

      return result;
    } catch (e) {}
  },

  async createChatroomService({ chatroom_name, user_num, member_name }) {
    console.log("[Service] chatroom createChatroomService called");
    try {
      await userDB.getUserId(member_name);
      const chatroom_num = await chatroomDB.createChatroomDB({ chatroom_name });
      console.log({ chatroom_name, user_num, member_name, chatroom_num });
      await chatroomDB.createUserChatroomDB({
        user_num,
        member_name,
        chatroom_num,
      });
    } catch (e) {
      console.log(e);
    }
  },
  async saveChatMessage(data) {
    console.log("[Service] chatroom saveChatMessage called");
    try {
      await messageDB.saveMessage(data);
    } catch (e) {}
  },
};
