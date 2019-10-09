import routes from "../routes";
import User from "../models/User";
import passport from "passport";

export const getJoin = (req, res) => {res.render("join", {pageTitle: "Join"});}

export const postJoin = async (req, res, next) => {
    const {body:{name, email, password, password2}} = req;

    if( password !== password2 ){
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    }  else{
        try {
             // User.create안쓰는 이유는 create는 생성하고 db에 저장까지 함.
             // 그러면 밑 register에서 이미 등록된 사용자라고 에러뜸.
            const user = User({name, email});
            await User.register(user, password); // 
            next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
        
    }

    
};

export const getLogin = (req, res) => {res.render("login", {pageTitle: "Login"});}
export const postLogin = passport.authenticate("local",{
        failureRedirect: routes.login,
        successRedirect: routes.home
    });
export const logout = (req, res) => {
    res.redirect(routes.home);
}
export const userDetail = (req, res) => {res.render("userDetail", {pageTitle: "UserDetail"});}
export const editProfile = (req, res) => {res.render("editProfile", {pageTitle: "EditProfile"});}
export const changePassword = (req, res) => {res.render("changePassword", {pageTitle: "ChangePassword"});}
