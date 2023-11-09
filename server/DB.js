const mongoose=require('mongoose');
const DB=process.env.CONNECTION_STRING;
// mongoose.connect(DB,{
//         useNewUrlParser : true,
//         family:4
//     }).then((res,err)=>console.log("DB is Connected")).catch(err=>console.log("Mongoose Error : "+err));
async function connection(){
    try{
        const res =await mongoose.connect(DB,{useNewUrlParser:true,family:4});
        console.log("DB connected!!");
    }
    catch(err){
        console.log("DATABase Error :" ,err);
    }
}
connection()
module.export=mongoose; 