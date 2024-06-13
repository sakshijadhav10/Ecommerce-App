import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjYwYTg3ZDE2YWYzNjFkYWFhNTM0M2QiLCJpYXQiOjE3MTc3NDk1NDcsImV4cCI6MTcxODM1NDM0N30.-0POkHix4USj1MTsdA2VqxXDfYMHw_9iClbIRGFTIBo";
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      token,
       //req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user=decode;
     next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

// export const requireSignIn = async (req, res, next) => {
//   try {
//     const decode = JWT.verify(
//       req.headers.authorization,
//       process.env.JWT_SECRET
//     );
    
//     req.user = ({decode});
//     next();
  
//   } catch (error) {
//     console.log(error);
//   }
// };

export const testController = (req, res) => {
  res.send("Protected Route");
};
//admin access

export const isAdmin = async (req, res,next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
        success:false,
        error,
        message:"error in admin middleware"
    })
  }
};
