import mysql from "mysql2/promise";
import User from "../models/users.js";
import * as chatroomDB from "../repositories/chatroom.js";

export default {
  async showChatroomService({ userNum }) {
    console.log("[Service] chatroom showChatroomService called");
    try {
      const result = await chatroomDB.showChatroom({ userNum });
      console.log(userNum, result);

      return result;
    } catch (e) {}
  },
};
