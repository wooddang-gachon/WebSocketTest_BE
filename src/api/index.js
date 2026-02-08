import { Router } from "express";
import authRouter from "./routes/auth.js";
import chatroomRouter from "./routes/chatroom.js";

export default () => {
  const app = Router();

  authRouter(app);
  chatroomRouter(app);

  console.log("[Express] API load");
  return app;
};
