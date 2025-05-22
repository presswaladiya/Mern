const express=require("express");
const {run}=require("./conn");

const app = express();


const router=express.Router();
let info={};
router.get("/view",async(req,res)=>{
    const collection = await run();
   info = await collection.find({}).toArray();
    res.json({user:info});

})
module.exports=router;