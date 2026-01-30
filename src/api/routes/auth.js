import { Router } from "express";
// import config from "../../config/index.js";
import Auth from "#services/auth.js";
import { celebrate, Joi } from "celebrate";
import { Logger } from "winston";

const route = Router();

export default (app) => {
  app.use("/auth", route);

  // test API
  route.post("/signIn", async (req, res) => {
    // const logger = Logger();
    console.log("Calling Sign-In endpoint with body: %o", req.body);
    try {
      const { id, pw } = req.body;
      const signInService = await Auth.signIn({ id, pw });
      res.status(200).json(signInService);
    } catch (e) {
      return e;
    }
  });
};
