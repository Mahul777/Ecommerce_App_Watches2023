import mongoose from "mongoose";

//creating the schema 
const userSchema = new mongoose.Schema(
  {
    //creating objects
    name: {
      type: String,
      required: true,
      trim: true,  //white space removed
    },
    email: {
      type: String,
      required: true,
      unique: true, //through 1 email id 1 user only login
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    answer:
    {
     type:String,
      default:0,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } //when new user create then its created time will be added 
);

export default mongoose.model("users", userSchema);
