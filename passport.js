import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

// serialization은 어떤 정보를 쿠키에게 주느냐, 지금 클라이언트에 대해서 어떤 정보를 가질 수 있느냐를 뜻함
// 쿠기에는 민감한정보없이 최대한 적게 정보를 담아야 안전함! id만넣자
// deserialization은 어느 사용자인지 어떻게 찾는가?
// passport야 userid만 담아서 쿠키만들어~
passport.serializeUser( User.serializeUser() );
// passport야 userid가 담긴 쿠기로 user찾아줘~
passport.deserializeUser( User.deserializeUser() );