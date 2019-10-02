export const home = (req, res) => {
    res.render("home", {pageTitle: "Home"});
};
export const upload = (req, res) => {
    res.render("upload", {pageTitle: "Upload"});
};
export const videoDetail = (req, res) => {
    res.send("videoDetail", {pageTitle: "VideoDetail"});
};
export const search = (req, res) => {
    res.render("search", {pageTitle: "Search"});
};
export const editVideo = (req, res) => {
    res.render("editVideo", {pageTitle: "EditVideo"});
};
export const deleteVideo = (req, res) => {
    res.render("deleteVideo", {pageTitle: "DeleteVideo"});
};