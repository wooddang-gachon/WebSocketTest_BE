# 📚 WebSocketTest_BE (Node.js Backend Architecture Study)

Node.js(Express)와 MySQL을 사용하여 **3-Layer Architecture(Controller-Service-Repository)** 를 적용해본 백엔드 학습 프로젝트입니다.
기존의 단순한 MVC 패턴을 넘어, 유지보수와 확장성을 고려한 폴더 구조(Bulletproof Node.js)를 학습하고 적용하는 데 초점을 맞췄습니다.

## 🛠 Tech Stack

| Category        | Technology      |
| --------------- | --------------- |
| **Runtime**     | Node.js         |
| **Framework**   | Express.js (v5) |
| **Database**    | MySQL (mysql2)  |
| **Validation**  | Celebrate, Joi  |
| **Logging**     | Winston         |
| **Environment** | Dotenv          |

## 🏗 Architecture & Design Pattern

이 프로젝트는 **관심사의 분리(Separation of Concerns)** 를 위해 **3-Layer Architecture**를 채택했습니다.

### 아키텍처 도입 배경

> "파일 구조에 대한 기준은 무엇인가?"

첫 실무 프로젝트를 구상하며 가장 큰 고민은 폴더 구조였습니다. 단순한 MVC 패턴은 비즈니스 로직이 컨트롤러에 비대해지는 문제가 있어, [Bulletproof Node.js](https://github.dev/santiq/bulletproof-nodejs) 아키텍처를 참고하여 계층을 명확히 분리했습니다.

### 계층 구조 (Layered Structure)

1. **API (Controller/Routes)**: 클라이언트의 요청을 받고 응답을 보냅니다. 비즈니스 로직을 포함하지 않습니다.
2. **Service**: 핵심 비즈니스 로직을 수행합니다. SQL 쿼리에 의존하지 않습니다.
3. **Repository (Data Access)**: 데이터베이스에 직접 접근하여 CRUD를 수행합니다.
4. **Model**: 데이터베이스 스키마와 도메인 객체의 행위를 정의합니다.

## 📂 Project Structure

````bash
src
├── api            # Route handlers (Controller 역할)
│   ├── middlewares # Express 미들웨어
│   └── routes      # API 라우팅 정의
├── config         # 환경 변수 및 설정 파일 (Dotenv 등)
├── loaders        # App 구동 시 필요한 모듈 초기화 (Express, MySQL 등)
├── models         # DB 모델 및 도메인 로직 (Class 형태)
├── repositories   # SQL 쿼리 및 DB 접근 계층
├── services       # 비즈니스 로직 계층
└── app.js         # App 진입점

## 🚀 Getting Started

### 1. Installation
프로젝트 실행을 위해 의존성 패키지를 설치합니다.

```bash
npm install
````

## 2. Environment Setup (.env)

프로젝트 루트 경로에 .env 파일을 생성하고, 아래 환경 변수들을 본인의 개발 환경에 맞춰 설정해주세요.

(참고: `src/config/index.js` 파일에서 해당 변수들을 로드합니다)

```
# Server Configuration

PORT=3000

# Database Configuration (MySQL)

mysql2_HOST=localhost
mysql2_USER=root
mysql2_PASSWORD=your_password
mysql2_DATABASE=your_database_name

# API Configuration

API_PREFIX=/api
```

## 3. Run

nodemon을 사용하여 개발 모드로 서버를 실행합니다. 코드 변경 시 자동으로 서버가 재시작됩니다.

```bash
npm run start-dev
```

### 📝 Dev Log (Study Notes)

개발 과정에서 학습한 내용과 아키텍처 결정 사항을 기록합니다.

1. Module System: ESM vs CJS

- 결정: CommonJS(CJS) 대신 **ES Modules (ESM)**을 채택했습니다.
- 이유: Node.js의 최신 표준을 따르고, 모듈 간 의존성을 더 명확하게 관리하기 위함입니다. package.json에 "type": "module"을 명시하여 적용했습니다.
- 참고: ESM과 CJS의 차이점

2. Repository Pattern과 모듈화

- 결정: SQL 쿼리를 실행하는 Repository 계층의 함수들은 export default 클래스 방식이 아닌, 개별 export function으로 분리했습니다.
- 이유: 필요한 함수만 가볍게 import 하여 사용할 수 있어 메모리 효율과 코드 가독성 측면에서 이점이 있다고 판단했습니다.

3. 기능 동작 중에더 error throw 할 수 있도록 구조 개선 필요해보임

- 기능 동작 중에 에러(ex 로그인 실패)시에 return false로 구현하려 했는데 그렇게 되면 이후 동작들이나 error 대응이 비효율 적으로 보인다.

### 👊 Goal

- [x] 아키텍처 기획 및 설계(No pasta)
- [x] 아키텍처에 도메인별 분할
- [ ] API 목록 기능구현
  - [x] login,out, signup
  - [ ] 채팅방 조회
  - [ ] 채팅방 생성
  - [ ] 채팅 기능
- [ ] 기능 동작 logging 기능 구현
- [ ] 단위 테스트 기능 구현
- [ ] 동작 중 보안 취약점 해결

### ✅ Todo List

- [ ] Environment: .env 파일의 필수 변수 목록 확정 및 문서화
- [ ] Feature: 로그인/회원가입 로직 검증 (Push 테스트 필요)
- [ ] Future: WebSocket 기능 구현 및 테스트
- [ ] 현재 showChatroom을 post로 구현했는데 이걸 restful 하게 get으로 수정 필요. 차피 url에 id가 떠도 문제될게 없으니까
- [ ] 에러처리는 했지만 에러 발생 시 server가 죽어버린다. 원인은 error만 띄우고 그걸 핸들링 하지 않아서 생긴 문제다. 해당 문제 해결 필요
