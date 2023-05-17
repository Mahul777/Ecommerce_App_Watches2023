//import mongoose
import mongoose from 'mongoose';
//creating schema 
const categorySchema =new mongoose.Schema({
    //creating objects
       name:{
       type:String,
      // required:true,
       //unique:true,
           },
        
       slug:{
         type:String,
          lowercase:true,
      },
 
});
//Category ->collection Name
//categorySchema->fon refence we write schema  
 export default mongoose.model("Category",categorySchema);