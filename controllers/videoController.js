import Video from "../models/Video";
import routes from "../routes";


export const home = async (req, res) => {
    try{
        const videos = await Video.find({}); // find all the videos.
        res.render("home", {pageTitle: "Home", videos:videos});
    }
    catch(error){
        console.log(error);
        res.render("home", {pageTitle: "Home", videos:[] });
    }

};
export const getUpload = (req, res) => {
    res.render("upload", {pageTitle: "Upload"});
};

export const postUpload = async (req, res) => {
    const { body: {title, description},
    file: {path:filePath} } = req;
    
    const newVideo = await Video.create({
        fileUrl: filePath,
        title: title,
        description: description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));

};

export const videoDetail = async (req, res) => {
    const {params: {id}} = req;
    try{
        const video = Video.findById(id);
        res.render("videoDetail", {pageTitle: "VideoDetail", video});
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
    
};
export const search = (req, res) => {
    // const searchingBy = req.query.term;
    const { query : { term:searchingBy } } = req; // ES6
    // console.log(term);
    res.render("search", {pageTitle: "Search", searchingBy: searchingBy, videos});
};

export const getEditVideo = async (req, res) => {
    const {
        params: {id}
    } = req;
    try{
        const video = await Video.findById(id);
        res.render("editVideo", {pageTitle: `Edit ${video.title}`, video});
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
    
};

export const postEditVideo = async (req, res) => {
    const {
        params: {id},
        body: {title, description}
    } = req;
    try{
        
        await Video.findOneAndUpdate({ _id:id }, {title: title, description: description});
        res.redirect(routes.videoDetail(id));
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
    
};

export const deleteVideo = (req, res) => {
    res.render("deleteVideo", {pageTitle: "DeleteVideo"});
};