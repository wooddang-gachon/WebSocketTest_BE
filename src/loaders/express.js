import express from "express";
import cors from "cors";
import config from "../config/index.js";
import routes from "../api/index.js";

console.log("[router] first-test loaded");

export default ({ app }) => {
  app.use(cors());
  app.use(express.json());

  // API 라우트 설정
  app.use(config.api.prefix, routes());
};
