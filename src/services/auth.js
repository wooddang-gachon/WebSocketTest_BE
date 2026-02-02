import mysql from "mysql2/promise";
import User from "../models/users.js";
import * as userDB from "../repositories/users.js";

export default {
  async signUp({ id, pw }) {
    try {
      console.log("[Router] auth signUp endpoint called");

      // 1. Domain(User) 생성
      const user = new User({
        name: id + "_user",
        id,
        pw, // 👉 실제로는 해시해서 넣어야 함
      });
      // 2. 아이디 중복 체크
      const existingUser = await userDB.findByUsername(user.name);
      if (existingUser) {
        console.log("[service] Username already exists: %s", user.name);
        throw new Error("Username already exists");
      }
      // 3. 저장
      await userDB.save(user);
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
      console.log("[Service] auth signIn endpoint called");
      const result = await userDB.checkUser({ id, pw });
      return result;
    } catch (e) {
      console.log(e);
    }
  },
};
