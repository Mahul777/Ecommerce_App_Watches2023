//import express to create route 
import express from "express";
import { registerController,
  loginController,
  testController,
  forgotPasswordController,
   updateProfileController,
   getOrdersController,
   getAllOrdersController,
   orderStatusController,
     } from "../controllers/authController.js";
import {isAdmin, requireSignIn} from "../middlewares/authMiddleware.js"

//if you want to routing in separate file then we need router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
//we create separate controller(registerController)in controllers folder
router.post("/register", registerController);

 //POST for LOGIN
 router.post("/login", loginController);


 //FORGOT Password || POST
router.post('/forgot-password',forgotPasswordController); //here we don't need middleware

//test routes
router.get("/test",requireSignIn,isAdmin,testController);
//creating new route 
//protected User route 
router.get("/user-auth",requireSignIn,(req,res)=>
{
res.status(200).send({ok:true});
});

//protectd Admin route auth
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>
{
  res.status(200).send({ok:true});
})

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get('/orders',requireSignIn,getOrdersController)

//all orders
router.get("/all-orders",requireSignIn,isAdmin,getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);


export default router;
