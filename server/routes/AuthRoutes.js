import express from 'express';
import { forgotPasswordController, getAllOrdersController, getOrdersController, loginController,  orderStatusController,  registerController, testController, updateProfileController } from '../controller/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMidleware.js';

const router = express.Router();
// register routing
router.post('/register', registerController)
// login routing
router.post('/login', loginController)

//test routee
router.get('/test', requireSignIn, isAdmin, testController)

// Forgot passwordd

router.post('/forgot-password', forgotPasswordController)

// protected user routee
router.get('/user-auth', requireSignIn , (req,res)=>{
    res.status(200).send({ok: true});
}) 

// protected admin routee
router.get('/admin-auth', requireSignIn, isAdmin , (req,res)=>{
    res.status(200).send({ok: true});
}) 
// update routee
router.put('/profile' , requireSignIn, updateProfileController)
// order routee
router.get('/orders', requireSignIn, getOrdersController)

router.get('/all-orders', requireSignIn, getAllOrdersController)

router.put('/order-status/:orderId', requireSignIn,isAdmin, orderStatusController)




export default router;