import express from "express";
import router from "./router/router.js";
import connection from "./config/connection.js";
import { SERVER_PORT } from "./config/config.js";

import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());
app.use("/", router);

await connection.sync({ force: false });

app.listen(SERVER_PORT, () => {
  console.log(`🚀 ~ app.listen ~ ${SERVER_PORT}`);
});