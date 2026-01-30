import { Router } from "express";
import firstTestRouter from "./routes/fistTest.js";
import authRouter from "./routes/auth.js";

export default () => {
  const app = Router();

  firstTestRouter(app);
  authRouter(app);

  console.log("[Express] API load");
  return app;
};
