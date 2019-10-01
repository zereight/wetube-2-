import express from "express";
// const express = require("express");
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./router";

const app = express();

const handleHome = (req, res) => {
    console.log('This is homepage.');
    res.send("This is Homepage.");
};
const handleProfile = (req, res) => {
    console.log('This is profilepage.');
    res.send("This is Profilepage.");
};
const betweenHome = (req, res, next) => { // middleware
    console.log("Between");
    next();
};
const betweenMiddleware = (req, res, next) => { // middleware
    console.log("im mdware");
    next();
};

app.use(helmet());
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(betweenMiddleware);
app.get('/', betweenHome, handleHome);
app.get('/profile', handleProfile);

app.use("/user", userRouter);

export default app;