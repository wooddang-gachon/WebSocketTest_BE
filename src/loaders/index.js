// import pool from "./sql.js";
import expressLoader from "./express.js";
import sqlLoader from "./mysql.js";
import socketLoader from "./socket.js";

export default async ({ expressApp, httpServer }) => {
  // express 설정
  await expressLoader({ app: expressApp });
  console.log("[Express] load");

  await sqlLoader;
  console.log("[SQL] load");

  await socketLoader({ httpServer });
  console.log("[Socket] load");
};
