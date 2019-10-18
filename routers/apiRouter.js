import express from "express";
import routes from "../routes"
import { postRegisterView } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, postRegisterView); // get으로해서 방문하면 DB조작할것임.

export default apiRouter;