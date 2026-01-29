import { Router } from "express";
import firstTestRouter from "./routes/fistTest.js";

export default () => {
  const app = Router();

  firstTestRouter(app);

  console.log("Express:: API loaded");
  return app;

  // 404 처리 >> 코드 확인 및 처리 필요
  //   app.use((req, res, next) => {
  //     const err = new Error("Not Found");
  //     err["status"] = 404;
  //     next(err);
  //   });
};
