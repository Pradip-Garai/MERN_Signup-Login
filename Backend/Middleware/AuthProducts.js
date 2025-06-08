const jwt = require('jsonwebtoken');

const ensureAuth = (req,res,next)=>{
   
    const Auth = req.headers['authorization'];


    // if jwt token not found . Means user not registered 
    if(!Auth){
        return res.status(403)
               .json({message: "Unauthorized , JWT Token is Required"});
    }

    try{
    
        const decodedData = jwt.verify(Auth, process.env.JWT_SECRET);
        req.user = decodedData; // here user email and name can directly access without calling database using JWT
        next();

    }catch(error){
      
        return res.status(403)
               .json({message: "Unauthorized , JWT Token Expired"});
    }

}

module.exports = ensureAuth;