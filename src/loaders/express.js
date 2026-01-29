import express from "express";
import cors from "cors";
import config from "../config/index.js";
import routes from "../api/index.js";

export default ({ app }) => {
  app.use(cors());
  app.use(express.json());

  // API 라우트 설정
  app.use("/api", routes());
};
