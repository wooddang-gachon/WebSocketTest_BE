# 처음 FE,BE를 나눈 뒤 테스트 해보는 프로젝트

# 사용스택

- Node
  - express.js

# 디자인 패턴? 아키텍처?

사실 프로그램을 구성하면서(첫 실무 진행?) 들었던 가장 큰 문제는 파일 구조에 대한 기준 확립이었다. MVC와 같은 책에서 나오는 디자인 패턴에 대한
이야기는 많이 있지만 이걸 어떻게 폴더구조를 만들지, 적용시킬지에 대한 고민하게 만들었다. 그래서 아래 조사한 자료를 토대로 진해하려 한다.

## 참고 아키텍처

https://github.dev/santiq/bulletproof-nodejs

## 폴더구조

- config
- loader
  - 서버를 구동할 때 필요한 기본 모듈들 로딩하는 과정
- service
  - 비즈니스 로직이 있는 곳
- model
- routes
- config
  - id, address등 환경설정에 필요한 중요한 자료들을 모아두는 통제소

# Todo list

- [ ] .env 파일 작성 후 뭐가 필요한지 파악하기
- [ ] Push를 이용해 로그인 확인 필요

# 스터디 일지

- esm이랑 cjs 차이 https://doiler.tistory.com/91
  현재는 esm 형식으로 제작하려고 함

- repositories와 같은 sql 함수 기능만 모여져있는 파일은 export function별로 나누는게 이득이다.
