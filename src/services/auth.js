import mysql from "mysql2/promise";
import User from "../models/users.js";
import * as userDB from "../repositories/users.js";

export default {
  async signUp({ id, pw }) {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    try {
      console.log("[Router] auth signUp endpoint called");

      // 2. Domain(User) 생성
      const user = new User({
        num: getRandomInt(1000, 9999),
        name: id + "_user",
        id,
        pw, // 👉 실제로는 해시해서 넣어야 함
      });

      // 3. 저장
      await userDB.save(user);
      await userDB.show();
      // 4. 응답용 데이터
      return {
        username: user.username,
        message: "Sign-Up Successful",
      };
    } catch (e) {
      console.log(e);
    }
  },

  async signIn({ id, pw }) {
    try {
      console.log("[Router] auth signIn endpoint called");
      // const [results, fields] = await connection.query("SELECT * FROM `USER`");
      userDB.show();
      if (id === "test" && pw === "test1234") {
        return { message: "Sign-In Successful" };
      } else {
        return { message: "Sign-In Failed" };
      }
    } catch (err) {
      console.log(err);
    }
  },
};
