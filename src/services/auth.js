import mysql from "mysql2/promise";
import { User } from "../models/user.js";

export default class AuthService {
  constructor() {
    this.init();
  }

  async SignUp({ id, password, name, email, birth, phone }) {
    const user = new User({
      id: id,
      password: password,
      name: name,
      email: email,
      birth: birth,
      phone: phone,
    });

    try {
      const [results, fields] = await connection.query("SELECT * FROM `USER`");

      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
      console.log(err);
    }
  }
}
