import dotenv from "dotenv";
dotenv.config();

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
import passport from "passport";
import "./passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import apiRouter from "./routers/apiRouter";


const app = express();

const CookieStore = MongoStore(session);

app.set("view engine", "pug");

// 현재 multer로 인해 video가 uploads/video/asdadad12312 이렇게 저장되고있다.
// 그래서 /uploads 로 이동하면 uploads diretory안으로 들어가게 해준다. 
// when the user goes to /uploads/something.mp4 
// try to find something.mp4 inside  the folder named upload
// video 업로드하면, multer가 uploads/videos에 만들고, fileUrl을 uploads/videos로 해서 contoller로 보내고,
// controller는 fileUrl을 uploads/videos어쩌구로 new Video.create하고
// home화면으로 돌아오면, home controller가 Video의 모든 object찾고, home.pug로 보내고,
// home.pug는 video.fileUrl를 video src로 설정하고, 주소로 href uploads/videos/~ 로 가는데,
// express보고 /uploads로 가면 static("uploads")때문에 videos/~로 url이 이동하게됨.
app.use("/uploads", express.static("uploads")); 
app.use("/static", express.static("static")); 

app.use(helmet());
app.use(morgan("dev"));

app.use(bodyParser.json()); // body Parser가 없다면 form에서 post로 전송한 body정보를 볼 수가 없음.
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(session({
//     secret: process.env.COOKIE_SECRET,  // randomekygen.com
//     resave: true,
//     saveUninitialized: false
// }));
app.use(cookieParser());
app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: true,
      saveUninitialized: false,
      store: new CookieStore({mongooseConnection: mongoose.connection})
    })
  );
app.use(passport.initialize());
app.use(passport.session());

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter)

export default app;