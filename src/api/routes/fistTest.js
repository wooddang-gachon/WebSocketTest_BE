import { Router } from "express";
import config from "../../config/index.js";
import FirstTest from "#services/firstTest.js";

const route = Router();

export default (app) => {
  app.use("/first-test", route);

  route.get("/test", async (req, res) => {
    console.log("First Test GET /test called");
  });
};
