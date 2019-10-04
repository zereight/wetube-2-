
export const home = (req, res) => {
    res.render("home", {pageTitle: "Home", videos:videos});
};
export const getUpload = (req, res) => {
    res.render("upload", {pageTitle: "Upload"});
};
export const postUpload = (req, res) => {
    const { body: {file, title, description} } = req;



};
export const videoDetail = (req, res) => {
    res.render("videoDetail", {pageTitle: "VideoDetail"});
};
export const search = (req, res) => {
    // const searchingBy = req.query.term;
    const { query : { term:searchingBy } } = req; // ES6
    // console.log(term);
    res.render("search", {pageTitle: "Search", searchingBy: searchingBy, videos});
};
export const editVideo = (req, res) => {
    res.render("editVideo", {pageTitle: "EditVideo"});
};
export const deleteVideo = (req, res) => {
    res.render("deleteVideo", {pageTitle: "DeleteVideo"});
};