import axios from "axios";
// sam
export const getNews=async()=>{
    const URL="https://inshort-server.onrender.com/News";
    try{
          return await  axios.get(URL)
    }
    catch(err){
        console.log(err);
    }

}