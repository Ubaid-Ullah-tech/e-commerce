import express from "express";

import { isAdmin, requireSignIn } from "../middlewares/authMidleware.js";
import { categoryControlller, createCategoryController, deleteCategoryCOntroller, singleCategoryController, updateCategoryController } from "../controller/categoryController.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// //getALl category
 router.get("/get-category", categoryControlller);

// //single category
 router.get("/get-category:slug", singleCategoryController);

// //delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

export default router;