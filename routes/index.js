/*
Note : While specifying routes for views folder imagine you are in views folder and then specify relative paths 
eg: folderName/file.ejs and not views/
 */

const { response } = require("express");
const express=require("express");
const router=express.Router();


/*********************************************************GET ROUTES *************************************************/

// All Authors Route
router.get("/",(req,res)=>{
   res.render("index");

});


/*********************************************************POST ROUTES *************************************************/




module.exports=router;