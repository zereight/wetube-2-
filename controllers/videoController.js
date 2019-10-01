export const home = (req, res) => {
    res.render("home");
};
export const login = (req, res) => {
    res.render("login");
};
export const logout = (req, res) => {
    res.send("logout");
};
export const search = (req, res) => {
    res.render("search");
};
export const join = (req, res) => {
    res.render("join");
};