// src/index.js
import express from "express"; // ⚠️ 수정: .js 제거 (라이브러리니까)
import http from "http";
import loaders from "./loaders/index.js"; // ✅ 내 파일은 .js 필수 + 정적 import로 변경
import config from "./config/index.js";

async function startServer() {
  const app = express();
  const server = http.createServer(app);

  // 1. 위에서 정적으로 import 했으므로 .default를 붙일 필요가 없습니다.
  // loaders 자체가 export default로 내보낸 함수가 됩니다.
  await loaders({ expressApp: app, httpServer: server });

  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}!`);
  });
}

startServer();
