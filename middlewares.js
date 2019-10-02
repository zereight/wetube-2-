import routes from "./routes";

export const localMiddleware = (req, res, next)=>{
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    next(); // middle ware는 next 필수 
} ;