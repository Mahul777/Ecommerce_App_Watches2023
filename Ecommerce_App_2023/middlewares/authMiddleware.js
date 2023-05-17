import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protecting Routes on the base of token 
export const requireSignIn = async (req, res, next) => {
   //next help to authenticate the user
  try {
     //verify -> is for compare 
    //here we are getting token which is in header and in header we have authorization which have token and then we try to decode the token  
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
     //right token must be passed to user which is in decode
    req.user = decode;
    next(); //it use remaining code will execute
  } catch (error) {
    console.log(error);
  }
};

//Similarly we will create middleware for admin and protect adminRoutes
//admin acceess
export const isAdmin = async (req, res, next) => {
  try 
   { //check user is admin or not 
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else
      { //if user is admin i.e role=0
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
