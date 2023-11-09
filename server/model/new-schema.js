const mongoose=require("mongoose");
const newsSchema=mongoose.Schema({
    title:{type:String},
    author:{type:String},
    description:{type:String},
    url:{type:String},
    timestamp:{type:String},
    link:{type:String},
    publisher:{type:String}
})

const NewsSchema=mongoose.model("Stories",newsSchema);
module.exports=NewsSchema;