// import pool from "./sql.js";
import expressLoader from "./express.js";

export default async ({ expressApp }) => {
  // express 설정
  await expressLoader({ app: expressApp });
  console.log("Express loaded");
};
