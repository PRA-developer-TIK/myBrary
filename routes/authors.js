/*
Note : While specifying routes for views folder imagine you are in views folder and then specify relative paths 
eg: folderName/file.ejs and not views/folderName/file.ejs 
 */

/*********************************************************IMPORTS *************************************************/
const express=require("express");
const router=express.Router();

/*********************************************************Relative  Imports *************************************************/
const Author=require("../models/author");


/*********************************************************GET ROUTES *************************************************/

// All Authors Route
router.get("/",async (req,res)=>{
   //in order to search for a name we will use req.query and a regular expression
   let searchOptions={};
   if(req.query.name !== null && req.query.name !== "" ){
      //i flag here is for case insensitive
      searchOptions.name= new RegExp(req.query.name,"i");
      // console.log("searchOptions.name",searchOptions.name);

   }
   try {
      const allAuthors= await Author.find(searchOptions);
      res.render("authors/index",{allAuthors:allAuthors,searchOptions:req.query});
      
   } catch {
      res.redirect("/");
   }
   

   

});

//New Author Route
router.get("/new",(req,res)=>{
   res.render("authors/new",{author:new Author()})
});


/*********************************************************POST ROUTES *************************************************/

//Create Author route
router.post("/", async (req,res)=>{
   const author=new Author({
      name:req.body.name,
   });

   try {
      const newAuthor=await author.save();
      // res.redirect(`/authors/${newAuthor.id}`);
      res.redirect("authors");

      
   } catch {
      res.render("authors/new",{
         author:author,
         errorMessage:"Author not created"
      });
   }

   

});

module.exports=router;