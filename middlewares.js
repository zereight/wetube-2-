import routes from "./routes";
import multer from "multer";

 // multer가 videos/라는 폴더에 바꾼거 기록할 것임.
const multerVideo = multer({dest: "uploads/videos/"});

export const localMiddleware = (req, res, next)=>{
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next(); // middle ware는 next 필수 
} ;

// single은 multer로 1개의 파일만 업로드 가능
// 안에는 hmtl file form의 file input name을 넣기.
export const uploadVideo = multerVideo.single('videoFile'); 