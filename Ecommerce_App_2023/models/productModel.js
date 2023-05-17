import mongoose from "mongoose";
//creating schema
const productSchema = new mongoose.Schema(
  {
    //product name
    name: {
      type: String,
      required: true,
    },
    //creating seo freindly 
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: 
    {//for category we have another model so we use 
         //mongoose.ObjectId,
      type: mongoose.ObjectId,
      ref: "Category", //IncategoryModel we give name model
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);