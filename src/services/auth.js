import mysql from "mysql2/promise";
import User from "../models/users.js";
import * as userDB from "../repositories/users.js";

export default {
  // async SignUp({ id, password, name, email, birth, phone }) {
  //   const user = new User({
  //     id: id,
  //     password: password,
  //     name: name,
  //     email: email,
  //     birth: birth,
  //     phone: phone,
  //   });

  //   try {
  //     const [results, fields] = await connection.query("SELECT * FROM `USER`");

  //     console.log(results); // results contains rows returned by server
  //     console.log(fields); // fields contains extra meta data about results, if available
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  async signIn({ id, pw }) {
    try {
      console.log("[router] auth signIn endpoint called");
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
