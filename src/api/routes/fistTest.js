import { Router } from "express";
// import config from "../../config/index.js";
import FirstTest from "#services/firstTest.js";
import { celebrate, Joi } from "celebrate";
import { Logger } from "winston";

const route = Router();

export default (app) => {
  app.use("/first-test", route);

  // test API
  route.post("/test", async (req, res) => {
    console.log("First Test Service Call Start");

    const { id, pw } = req.body;
    const firstTestService = await FirstTest.testFunction(id, pw);
    res.status(200).json(firstTestService);
  });
};
