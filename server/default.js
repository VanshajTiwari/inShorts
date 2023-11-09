const data=require('./constants/data');
const NewsSchema=require('./model/new-schema.js');

exports.DefaultData=async()=>{
    try{
           await NewsSchema.deleteMany({});
          //  console.log(data.data);
          const dat  =await NewsSchema.insertMany(data.data);
        //  console.log(dat);
          console.log("Data Imported");
        }
    catch(err){
        console.log("ERROR",err.message);
    }
}