const express=require("express");
const {run}=require("./conn");

const router=express.Router();
let info={};
router.post("/view",async(req,res)=>{
    const collection=await run();
    //info=req.body;
    info=await collection.find({}).toArray();
    res.json({use:info});

})
module.exports=router;