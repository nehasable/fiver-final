//contains all the logic related to user.
const express=require("express")

// const app=express()
const router=express.Router()
router.get("/test",(req,resp)=>{
    resp.send("working")
})
module.exports= router;