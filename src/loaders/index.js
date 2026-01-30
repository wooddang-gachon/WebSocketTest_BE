// import pool from "./sql.js";
import expressLoader from "./express.js";
import sqlLoader from "./mysql.js";

export default async ({ expressApp }) => {
  // express 설정
  await expressLoader({ app: expressApp });
  console.log("[Express] load");

  await sqlLoader;
  console.log("[SQL] load");
};
