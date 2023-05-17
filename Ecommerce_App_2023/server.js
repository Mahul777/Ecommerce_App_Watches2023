//import the express
import express from 'express';

//import the colors 
import colors from 'colors';

//import morgan 
import morgan from "morgan";
import connectDB from "./config/db.js"
import dotenv from "dotenv"
import authRoutes from './routes/authRoute.js'
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from "./routes/productRoutes.js";
//configure env 
dotenv.config()

//connect database or database config
connectDB(); //it import connectDB

//create rest object api will be created 
 const app =express();

//configure morgan or we can say middleware
  app.use(cors()); 
  app.use(express.json()); //enable json
  app.use(morgan('dev'));

  //All routes will be there 
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes);

//rest api 
app.get('/',(req,res) =>
{
 res.send({
  message:'Welcome to ecommerce app'
     })
})

//PORT const 
const PORT =process.env.PORT|| 8080;

//run the app 
app.listen(PORT,()=>
{
  console.log(`Server is Running mode on port ${PORT}`.bgCyan.white)
})


