/******************************************HANDLING THE URLS IN PRODUCTION AND DEVELOPMENT******************************* */ 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}



/**************************************************IMPORTS************************************************/
const express=require("express");
const ejs=require("ejs");
const expressLayouts=require("express-ejs-layouts");
const mongoose=require("mongoose");

/**************************************************RELATIVE IMPORTS************************************************/
const indexRouter=require("./routes/index");

/**************************************************APP RELATED MIDDLEWARES************************************************/
const app=express();

//view engines
app.set("view engine","ejs");
app.set("views",__dirname+"/views");
app.set("layout","layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.set("routes",)

/************************************DATABASE CONNECTIONS************************************/
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true});
const db=mongoose.connection;
db.on("error",err=>console.error(err));
db.once("open",()=>console.log("Mongoose Connected MongoDB"))

/*****************************************USING ROUTES ************************************** */ 
app.use("/",indexRouter);

/********************************ASSIGNING PORT *********************************/
app.listen(process.env.port || 3000,()=>{
    console.log(`Server is up and running at ${process.env.port || 3000}`);
});



 