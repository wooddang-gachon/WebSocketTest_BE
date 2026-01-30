class User {
  constructor({ id, name, pw, num }) {
    this.num = num;
    this.id = id;
    this.name = name;
    this.pw = pw;
    this.birth = null;
    this.phone = null;
  }

  checkPassword(inputPw, passwordUtil) {
    return passwordUtil.compare(inputPw, this.pw);
  }

  isAdmin() {
    return this.role === "ADMIN";
  }
}

export default User;
