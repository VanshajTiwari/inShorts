const NewsSchema=require("./../model/new-schema");
exports.getNews=async (req,res)=>{
    try{
      let data= await NewsSchema.find({});
      res.status(200).json(data);
    }
    catch(err){
        res.status(200).json({status:"fail",Error:err.message});

    }
}