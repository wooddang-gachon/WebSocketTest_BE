// models/User.js

class User {
  /**
   * 생성자: 데이터를 받아서 객체(구조체) 모양을 잡음
   * @param {Object} data - DB에서 꺼내온 데이터나 입력받은 데이터
   * @param {string} data.num  DB에서 꺼내온 데이터나 입력받은 데이터
   * @param {date} data.birth - 사용자의 생일
   * @param {string} data.id - 사용자의 비밀번호
   * @param {string} data.password - 사용자의 이름
   * @param {string} data.phone - 사용자의 전화번호
   */
  constructor(data) {
    // 1. 필수값 정의 (SQL 테이블 컬럼과 매칭)
    this.num = data.num; // DB에서 자동생성되면 처음엔 없을 수도 있음
    this.birth = data.birth;
    this.phone = data.phone;
    this.username = data.id;
    this.password = data.password;

    // 2. 기본값 설정 (Default Value)
    // DB에 넣기 전에 JS 레벨에서 기본값을 주고 싶을 때 유용

    // this.isActive = data.isActive !== undefined ? data.isActive : true;
    // this.createdAt = data.createdAt || new Date();
  }

  // (선택사항) DB에 넣기 좋게 데이터를 가공하는 메서드 추가 가능
  toSQL() {
    return [this.email, this.password, this.username, this.isActive];
  }
}

module.exports = User;
