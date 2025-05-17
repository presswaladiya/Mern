const express=require("express");
const {run}=require("./conn");

const router=express.Router();
let info={};
router.post("/del/:id",async(req,res)=>{
    const collection=await run();
    info=req.body;
    await collection.deleteOne({"id":parseInt(req.params.id)});
    res.json(`{User deleted:${req.params.id}}`);

})
module.exports=router;