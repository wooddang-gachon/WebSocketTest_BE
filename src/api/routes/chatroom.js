import { Router } from "express";
import config from "../../config/index.js";
import Chatroom from "#services/chatroom.js";
import { celebrate, Joi } from "celebrate";
import { Logger } from "winston";

const route = Router();

export default (app) => {
  app.use("/chatroom", route);

  // test API
  route.post("/showChatroom", async (req, res) => {
    console.log("[Router]chatroom Service Call Start");

    const { userNum } = req.body;
    const showChatroomService = await Chatroom.showChatroomService({ userNum });
    res.status(200).json(showChatroomService);
  });
};
