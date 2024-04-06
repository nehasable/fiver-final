
const express=require("express")
const app=express()
require('dotenv').config();

const port = process.env.PORT 
// const dbUrl = process.env.DB_URL;

// mongoose.connect(dbUrl);
  
//   const db = mongoose.connection;
 
//   db.on('error', (error) => {
//     console.error('MongoDB connection error:', error);
//   });
// app.use("/api/users",UserRouter)  

app.listen(port,()=>{
    console.log("connected")
})
