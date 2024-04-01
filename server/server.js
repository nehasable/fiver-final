const UserRouter = require("./routes/user_route.js");
const express=require("express")
const mongoose=require("mongoose")
const app=express()

const port = process.env.PORT 
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl);
  
  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });
app.use("/api/users",UserRouter)  

app.listen(port,()=>{
    console.log("connected")
})
