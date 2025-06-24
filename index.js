import express from "express";
import router from "./router/router.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./Config/config.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(router);

await connection.sync({ force: false });

app.listen(SERVER_PORT, () => {
  console.log(`🚀 ~ app.listen ~ ${SERVER_PORT}`);
});