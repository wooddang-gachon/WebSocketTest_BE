// src/index.js
// 메인 코드
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Express!!!!!!!");
});
app.get("/contacts", (req, res) => {
  res.json({
    message: "축하드립니다!",
    date: new Date().toString(),
  });
  console.log("wow Attatched!");
});

app.listen(port, () => {
  console.log("Example app listening on port 3000!");
});

