import * as chatroomDB from "../repositories/chatroom.js";
import * as userDB from "../repositories/users.js";
import * as messageDB from "../repositories/message.js";

// src/services/chatroom.js
export default {
  async saveChatMessageService(data) {
    console.log("[Service] message saveChatMessage called");
    try {
      await messageDB.saveMessage(data);
      // console.log(data);
    } catch (e) {}
  },
};
