import express from 'express';
import {isAdmin,requireSignIn} from './../middlewares/authMiddleware.js'
import {categoryControlller, createCategoryController, deleteCategoryCOntroller, singleCategoryController, updateCategoryController} from './../controllers/categoryController.js';
const router = express.Router()

//now we can make routes here 
//create category
router.post('/create-category',
requireSignIn,
 isAdmin, 
 createCategoryController);

 //update Category
 router.put('/update-category/:id',
 requireSignIn,
 isAdmin,
 updateCategoryController);

 //getAll category
router.get('/get-category',categoryControlller)

//single category
router.get('/single-category/:slug', singleCategoryController);

//delete Category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryCOntroller);

export default router;