const UserModel = require("../Models/users");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req,res)=>{

    try{

        const {name,email,password} = req.body;
        const user = await UserModel.findOne({email});

        if(user){
            return res.status(409)
                      .json({
                         message: "User Already Exist, you can login",
                         success: false
                      })
        }

        //new user
        const newUser = new UserModel({name,email,password});
        
        //encrypt password
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();

        res.status(201)
           .json({
              message: "Signup Successfull !!!",
              success:true
           })

    }catch(error){

        res.status(500)
           .json({
              message: "Internal  Server Failure !!!",
              success:false
         })

    }

}


const login = async (req,res)=>{

    try{

        const {email,password} = req.body;
        const user = await UserModel.findOne({email});

        const errorMessage = "Authenication Failed !!, Invalid Credientials";

        if(!user){
            return res.status(403)
                      .json({
                         message: errorMessage,
                         success: false
                      })
        }

       const isPasswordEqual = await bcrypt.compare(password,user.password);
       
       if(!isPasswordEqual){
             return res.status(403)
                      .json({
                         message: errorMessage,
                         success: false
                      })
       }

       const jwtToken = jwt.sign(
         {email:user.email, _id:user._id},
         process.env.JWT_SECRET,
         {expiresIn:"24h"}
       )

        res.status(200)
           .json({
              message: "Login Successfull !!!",
              success:true,
              jwtToken,
              email,
              name:user.name
           })

    }catch(error){

        res.status(500)
           .json({
              message: "Internal  Server Failure !!!",
              success:false
         })

    }

}

module.exports = {
    signup,
    login
}