import { Server } from "socket.io";

export default ({ httpServer }) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*", // 실제 서비스 시에는 보안을 위해 특정 도메인을 지정하세요.
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`[Socket] User Connected: ${socket.id}`);

    // 간단한 테스트 이벤트
    socket.on("message", (data) => {
      console.log("Message received: ", data);
      io.emit("message", data); // 모든 클라이언트에게 전송
    });

    socket.on("disconnect", () => {
      console.log(`[Socket] User Disconnected: ${socket.id}`);
    });
  });

  return io;
};
