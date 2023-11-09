import { Box, styled } from "@mui/material";
const BOX=styled(Box)`
background-color:red;
margin:auto;
width:60%;
height:3rem;
color:white;
border-radius:0rem;
position:relative;
top:2rem;
bottom:1rem;
display:flex;
justify-content:space-between;

`
const IMAGE=styled('img')({
    width:"6rem",
    height:"2rem",
    cursor:'pointer',
    position:'relative',
    right:"1rem",
    top:"0.5rem"
   
})
function InfoHeader(){
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
    return(
        <BOX style={{boxShadow:"0px 0px 5px 0px #DFDFDF"}}>
            <Box style={{position:'relative',left:"1rem",top:"0.9rem",fontSize:"0.8rem"}}>
                For the best experience use <strong>inshorts</strong> app on your smartphone
            </Box>
            <Box>
                <IMAGE src={appleStore} alt="apple"/>
                <IMAGE src={googleStore} alt="googleStore"/>
            </Box>
        </BOX>
    );
}

export default InfoHeader;