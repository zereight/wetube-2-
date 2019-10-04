import express from "express";
import routes from "../routes";
import { videoDetail, editVideo, deleteVideo, getUpload, postUpload } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload , getUpload);
// multer middleware로 video file link생성.
videoRouter.post(routes.upload , uploadVideo, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail); 
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);


export default videoRouter;