import { Router } from "express";
import firstTestRouter from "./routes/fistTest.js";

export default () => {
  const app = Router();
  console.log("API index.js loaded");
  firstTestRouter(app);

  return app;
};
