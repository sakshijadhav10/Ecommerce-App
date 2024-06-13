import express from "express"
import {registerController,loginController,forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from '../controller/authController.js';
import { testController ,isAdmin,requireSignIn} from "../middlewares/authMiddleware.js";

//router object 
const router=express.Router()
//routing
//REGISTER 
router.post('/register',registerController)

//login || Post
router.post('/login',loginController)

//forgot password || post
router.post('/forgot-password',forgotPasswordController)
//test routes
router.get("/test",requireSignIn,isAdmin,testController)
//protected route auth
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})
router.get('/admin-auth',requireSignIn,isAdmin, (req,res)=>{
    res.status(200).send({ok:true});
})
//update profile
router.put('/profile',requireSignIn,updateProfileController)

//orders
router.get("/orders",requireSignIn,getOrdersController)

//all orders
router.get("/all-orders",requireSignIn,isAdmin,getAllOrdersController)

router.get("/order-status/:orderId",requireSignIn,isAdmin,orderStatusController)
export default router