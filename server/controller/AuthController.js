//contains all the functions that will be implemented through routes
import { PrismaClient } from "@prisma/client"
import { genSalt, hash } from "bcrypt"
const generatePassword=async(password)=>{
    const salt=await genSalt()
    return await hash(password,salt) //hash password w salt
}

export const signUp=async (req,resp)=>{
//api calls
try{

}catch(err){
console.log(err)
}



}