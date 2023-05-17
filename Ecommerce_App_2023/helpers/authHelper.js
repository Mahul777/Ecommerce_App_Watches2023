//here we create two function 
//1st func ->hash the password
//2nd func-> iy help to compare and then decrpt

import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try 
   {//await till password is hashed 
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

