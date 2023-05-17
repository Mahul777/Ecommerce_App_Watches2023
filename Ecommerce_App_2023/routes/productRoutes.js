import express from "express";
import formidable from "express-formidable";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {  brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController } from "../controllers/productController.js";


//router object 
const router = express.Router();

//routes will be created
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//get products
router.get('/get-product',getProductController);

//get SingleProduct
router.get("/get-product/:slug",getSingleProductController);

//we create new route for photo 
router.get('/product-photo/:pid',productPhotoController);

//delete route 
router.delete('/delete-product/:pid',deleteProductController);

//filter product 
router.post('/product-filters',productFiltersController);

//product count 
router.get('/product-count',productCountController);

//we will get product according to page
router.get('/product-list/:page',productListController);

//search Product
router.get('/search/:keyword',searchProductController);

//similar product
router.get('/related-product/:pid.:cid',realtedProductController);

//Category wise product
router.get('/product-category/:slug',productCategoryController);

//payments routes
//first we get token which come from braintree
router.get('/braintree/token',braintreeTokenController);

//payments
router.post('/braintree/payment',requireSignIn,brainTreePaymentController)




//routes will be created
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
  );

export default router;