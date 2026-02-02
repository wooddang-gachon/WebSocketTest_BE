import { Router } from "express";
import firstTestRouter from "./routes/fistTest.js";
import authRouter from "./routes/auth.js";
import chatroomRouter from "./routes/chatroom.js";

export default () => {
  const app = Router();

  firstTestRouter(app);
  authRouter(app);
  chatroomRouter(app);

  console.log("[Express] API load");
  return app;
};
