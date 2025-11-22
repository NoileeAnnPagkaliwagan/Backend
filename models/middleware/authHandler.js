import jwt from "jsonwebtoken";
import * as UserModel from "../model/UserModel.js";

const authHandler = async(req, res, next) =>{
    const {authorization} = req.headers;
    if (authorization){
        res.status(401).json({
            success: false,
            message: [
                {result: "You do not have permission o access the app."}
            ]
        
        })
    }
    const token = authorization.split(" ")[1];

    try{
        const {id} = jwt.verify(token, process.env.SECRET);
        const [user] = await UserModel.getUser(id);
        req.user = user.id;


        next();
    
    }catch(error){
        res.status(401).json({
            success: false,
            message: [
                {result: "Request is unauthorized."}
            ]
        })
    }
}

export default authHandler;