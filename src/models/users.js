class User {
  constructor({ num, birth, phone, username, password }) {
    this.num = num;
    this.birth = birth;
    this.phone = phone;
    this.username = username;
    this.password = password;
  }

  checkPassword(inputPw) {
    return this.password === inputPw;
  }
}

export { User };