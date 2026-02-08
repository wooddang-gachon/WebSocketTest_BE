import ChatroomService from "../services/chatroom.js";
import MessageService from "../services/message.js";
import { Server } from "socket.io";

export default ({ httpServer }) => {
  const io = new Server(httpServer, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    //* ip 정보 얻기
    console.log("[Socket] User Connected: ", socket.id);
    // 간단한 테스트 이벤트
    socket.on("message", async (data) => {
      console.log("Message received: ", data);
      const savedMessage = await MessageService.saveChatMessageService(data);
      // console.log(data);
      socket.to(data.chatroom_num).emit("send-message", data); // 모든 클라이언트에게 전송
    });

    socket.on("join_room", async ({ chatroom_num }) => {
      try {
        // 비즈니스 검증은 서비스에 물어봅니다.
        // 예: "이 유저가 이 방 멤버가 맞나?"
        // await ChatroomService.checkUserAccess({ user_num, chatroom_num });

        // 검증 성공 시 소켓 기능을 사용하여 방에 입장시킵니다.
        socket.join(chatroom_num);
      } catch (e) {
        socket.emit("error", "방 입장 권한이 없습니다.");
      }
    });

    // // 2. 메시지 전송
    // socket.on("send_message", async (data) => {
    //   try {
    //     // 로직은 서비스가 수행하고 결과만 받습니다.
    //     const savedMessage = await ChatroomService.saveChatMessage(data);

    //     // 결과물을 해당 방에 뿌려주는 것은 로더(인터페이스)의 역할입니다.
    //     io.to(data.chatroom_num).emit("receive_message", savedMessage);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // });

    socket.on("disconnect", () => {
      console.log(`[Socket] User Disconnected: ${socket.id}`);
    });
  });
  return io;
};
