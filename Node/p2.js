const express=require("express");
const app=express();

app.use(express.json())

app.post("/send-data",(req,res)=>{
    const data=req.body;
    res.json({mess:"data received..",yourdata:data});
})

app.listen(3000,()=>{
    console.log("server is start... at http://localhost:3000");
})