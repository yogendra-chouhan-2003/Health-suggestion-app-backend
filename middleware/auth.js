import jwt from "jsonwebtoken";

export const auth = async(req,res,next)=>{
    
        let {token} = req.cookies;
        console.log(token);
try{
    if(!token)
        throw new Error("Unauthorized user!");
    let decode = jwt.verify(token,process.env.TOKEN_SECRET);
    req.user = decode;
    //console.log(decode);
    next();

    }catch (err) {
        console.log(err);
        return res.status(500).json({ error: "internal server error!!" });
    }
}