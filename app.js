import express from "express";
// const express = require("express");
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localMiddleware } from "./middlewares";

const app = express();

app.set("view engine", "pug");

app.use(helmet());
app.use(morgan("dev"));

app.use(bodyParser.json()); // body Parser가 없다면 form에서 post로 전송한 body정보를 볼 수가 없음.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;