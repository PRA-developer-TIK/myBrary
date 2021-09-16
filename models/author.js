const mongoose=require("mongoose");

const authorSchema={
    name:{
        type:String,
        required:true

    }
}


//so basically model takes two params i.e table name and the schema which defines that table 
module.exports=mongoose.model("Author",authorSchema);
