import Video from "../models/Video";
import routes from "../routes";


export const home = async (req, res) => {
    try{
        const videos = await Video.find({}).sort({_id: -1}); // find all the videos.
        res.render("home", {pageTitle: "Home", videos});
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
        title,
        description,
    });//.save();
    // console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));

};

export const videoDetail = async (req, res) => {
    const {params: {id}} = req;
    try{
        const video = await Video.findById(id);
        res.render("videoDetail", {pageTitle: video.title , video});
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
    
};
export const search = async (req, res) => {
    // const searchingBy = req.query.term;
    const { query : { term:searchingBy } } = req; // ES6
    // console.log(term);
    let videos = [];
    try {
        // searchingBy를 정규표현식 사용해서 속한거, 대소문자구별없이 다 찾음.
        // options에 i는 insensitive로써 대소문자를 구별하지 않음을 의미
        videos = await Video.find({title: {$regex: searchingBy, $options: "i"} });
    } catch (error) {
        console.log("error");

    }
    res.render("search", {pageTitle: "Search", searchingBy, videos});
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
        
        await Video.findOneAndUpdate({ _id:id }, {title, description});
        res.redirect(routes.videoDetail(id));
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
    
};

export const deleteVideo = async (req, res) => {
    const {
        params: {id}
    } = req;
    try {
        await Video.findOneAndRemove({_id:id});
    } catch (error) {
        console.log(error);
    }

    res.redirect(routes.home);
};

export const postRegisterView = async (req, res) => {
    const { params: {id} } = req;
    try {
        const video = await Video.findById(id);
        video.views += 1;
        video.save();
        res.status(200);
    } catch (error) {
        console.log(error);
        res.status(400);
    } finally{
        res.end();
    }
}