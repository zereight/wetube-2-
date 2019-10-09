import express from "express";
import routes from "../routes";
import { videoDetail, deleteVideo, getUpload, postUpload, postEditVideo, getEditVideo } from "../controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload,onlyPrivate , getUpload);
// multer middleware로 video file link생성.
videoRouter.post(routes.upload ,onlyPrivate, uploadVideo, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail); 
videoRouter.get(routes.editVideo(),onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);


export default videoRouter;