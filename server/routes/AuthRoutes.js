import express from 'express';
import { forgotPasswordController, getAllOrdersController, getOrdersController, loginController,  orderStatusController,  registerController, testController, updateProfileController } from '../controller/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMidleware.js';

const router = express.Router();
// register routing
router.post('/register', registerController)
// login routing
router.post('/login', loginController)

//test rout
router.get('/test', requireSignIn, isAdmin, testController)

// Forgot password

router.post('/forgot-password', forgotPasswordController)

// protected user route
router.get('/user-auth', requireSignIn , (req,res)=>{
    res.status(200).send({ok: true});
}) 

// protected admin route
router.get('/admin-auth', requireSignIn, isAdmin , (req,res)=>{
    res.status(200).send({ok: true});
}) 
// update route
router.put('/profile' , requireSignIn, updateProfileController)
// order route
router.get('/orders', requireSignIn, getOrdersController)

router.get('/all-orders', requireSignIn, getAllOrdersController)

router.put('/order-status/:orderId', requireSignIn,isAdmin, orderStatusController)




export default router;