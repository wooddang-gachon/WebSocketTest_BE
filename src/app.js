// src/index.js
import express from "express"; // ⚠️ 수정: .js 제거 (라이브러리니까)
import http from "http";
import loaders from "./loaders/index.js"; // ✅ 내 파일은 .js 필수 + 정적 import로 변경
import config from "./config/index.js";

async function startServer() {
  const app = express();
  const server = http.createServer(app);
  
  await loaders({ expressApp: app, httpServer: server });

  server.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}!`);
  });
}

startServer();
