import express from "express";
import routes from "../routes";
import { userDetail, editProfile, changePassword } from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();


userRouter.get(routes.editProfile, onlyPrivate , editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail); // :id는 마지막에 해줘야 안겹침.

export default userRouter;