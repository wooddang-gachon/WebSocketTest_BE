class User {
  constructor({ id, username, password, role }) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role ?? "USER";
  }

  checkPassword(inputPw, passwordUtil) {
    return passwordUtil.compare(inputPw, this.password);
  }

  isAdmin() {
    return this.role === "ADMIN";
  }
}

export default User;
