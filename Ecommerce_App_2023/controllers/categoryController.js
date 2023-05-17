import categoryModel from "../models/categoryModel.js";
import slugify from 'slugify';
export const createCategoryController = async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(401).send({ message: "Name is required" });
      }
      const existingCategory = await categoryModel.findOne({ name });
      if (existingCategory) {
        return res.status(200).send({
          success: false,
          message: "Category Already Exisits",
        });
      }
      const category = await new categoryModel({
        name,
        slug: slugify(name),
      }).save();
      res.status(201).send({
        success: true,
        message: "new category created",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        errro,
        message: "Errro in Category",
      });
    }
  };

//update category 
export const updateCategoryController = async(req,res) =>
{
    try {
        //destructure id and name 
       const { name } = req.body; //need to modify name 
       const { id } = req.params; //getting from url
       const category = await categoryModel.findByIdAndUpdate(
         id,
         { name, slug: slugify(name) },
         { new: true }
       );
       res.status(200).send({
         success: true,
         messsage: "Category Updated Successfully",
         category,
       });
     } catch (error) {
       console.log(error);
       res.status(500).send({
         success: false,
         error,
         message: "Error while updating category",
       });
     }
}

//get all category
// get all cat
export const categoryControlller = async (req, res) => {
    try {
      //here we hold all category 
      const category = await categoryModel.find({});
      res.status(200).send({
        success: true,
        message: "All Categories List",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all categories",
      });
    }
  };
  
  // single category
export const singleCategoryController = async (req, res) => {
    try {
      //we are finding the user on basis of url so uses slug
      const category = await categoryModel.findOne({ slug: req.params.slug });
      res.status(200).send({
        success: true,
        message: "Get SIngle Category SUccessfully",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting Single Category",
      });
    }
  };
  
  //delete category
export const deleteCategoryCOntroller = async (req, res) => {
    try 
    {//this id comes from params
      const { id } = req.params;
      await categoryModel.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Categry Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting category",
        error,
      });
    }
  };
