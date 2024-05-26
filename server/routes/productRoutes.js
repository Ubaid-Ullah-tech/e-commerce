import express from "express";

import formidable from "express-formidable";

import { isAdmin, requireSignIn } from "../middlewares/authMidleware.js";
import { createProductController, deleteProductController, getProductController, getSingleProductController, productCountController, productFiltersController, productListController, productPhotoController, searchProductController, updateProductController,
realtedProductController,
productCategoryController,
braintreeTokenController,
brainTreePaymentController
} from '../controller/productController.js'
const router = express.Router();
//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// //get products
router.get("/get-product", getProductController);

// //single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
// router.get("/product-photo/:pid", productPhotoController);
router.get("/product-photo/:pid", productPhotoController);

// //delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

// //filter product
router.post("/product-filters", productFiltersController);

// //product count
router.get("/product-count", productCountController);

// //product per page
router.get("/product-list/:page", productListController);

// //search product
router.get("/search/:keyword", searchProductController);

// //similar product
router.get("/related-product/:pid/:cid", realtedProductController);

// //category wise product
router.get("/product-category/:slug", productCategoryController);

// //payments routes
// //token
router.get("/braintree/token", braintreeTokenController);

// //payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router; 