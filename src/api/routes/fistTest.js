import { Router } from "express";
// import config from "../../config/index.js";
import FirstTest from "#services/firstTest.js";

const route = Router();

export default (app) => {
  app.use("/first-test", route);

  route.post("/test", async (req, res) => {
    console.log("First Test Service Call Start");
    const firstTestService = await FirstTest.testFunction();
    res.status(200).json(firstTestService);
  });
};
