const express=require("express");
const {run}=require("./conn");

const router=express.Router();
let info={};
router.post("/ins",async(req,res)=>{
    const collection=await run();
    info=req.body;
    await collection.insertMany(info);
    res.json({use:info});

})
module.exports=router;