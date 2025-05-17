const express=require("express");
const {run}=require("./conn");

const router=express.Router();
let info={};
router.post("/upt/:id",async(req,res)=>{
    const collection=await run();
    info=req.body;
    await collection.updateOne({"id":parseInt(req.params.id)},{$set:info});
    res.json(`{User updated:${req.params.id}}`);

})
module.exports=router;