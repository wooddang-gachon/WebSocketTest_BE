import * as chatroomDB from "../repositories/chatroom.js";
import * as userDB from "../repositories/users.js";

// src/services/chatroom.js
export default {
  async saveMessageService({ chatroom_num, user_num, message_text }) {
    try {
      // Repository를 호출하여 MESSAGE 테이블에 INSERT 수행
      // (Repository에 insertMessage 함수가 구현되어 있다고 가정)
      const result = await chatroomDB.insertMessage({
        chatroom_num,
        user_num,
        message_text,
      });

      return {
        chatroom_num,
        user_num,
        message_text,
        send_time: new Date(),
      };
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};
