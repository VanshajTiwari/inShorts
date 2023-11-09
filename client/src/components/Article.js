import { Box, Typography, styled} from "@mui/material";

const NewsBox=styled(Box)`
box-shadow:0 0 10px 0 #DFDFDF;
width:57%;
max-height:250px;
min-height:250px;
display:flex;
padding:0.5rem;
margin:0.4rem;
border-radius:0.3rem;
background-color:rgba(255,255,255,0.6);
transform:translateX(36%);
`
const ImgBOX=styled(Box)`
    width:40%;
    max-height:250px;
    min-height:250px;
    height:100%;
    overflow:hidden;
    
    border-radius:0.5rem;
img{
    width:100%;
    height:250px;
    object-fit:fill;
}
`
const Publish=styled(Box)`
display:flex;
flex-direction:row;
position:absolute;
bottom:1rem;

`
const ContentBox=styled(Box)`
    width:60%;
    text-align:left;
    margin-left:1rem;
`
function Article({author,description,link,publisher,timestamp,title,url}){
    const dat=Date({timestamp}).split(" ");
    //['Mon', 'Jul', '17', '2023', '18:48:56', 'GMT+0530', '(India', 'Standard', 'Time)']
 //   console.log(dat); 
return(<NewsBox>
       
            <ImgBOX><img style={{objectFit:"fill"}} src={url} alt="NEW"/></ImgBOX>
            <ContentBox>
                <Box variant="h4" style={{fontSize:"1.1rem",fontWeight:"bold"}}>{title}</Box>
                <Box variant="h6" style={{fontSize:"0.7em",marginTop:"3px",marginBottom:"3px"}}>
                        <Box 
                         compoent="span" style={{fontWeight:"bold"}}>short
                        </Box>
                        <span style={{color:"#b9b9b9",fontWeight:"700"}}> by {author} /{dat[4]+" on "+dat[2]+" "+dat[1]+" "+dat[3]+", "+dat[1]}</span>
                </Box>
                <Box>
                    <Box>
                    <Typography style={{fontSize:"0.8rem"}}>{description}</Typography>
                    </Box>
                    <Publish>
                        <Typography style={{marginRight:"0.4rem",marginLeft:"0.4rem",fontSize:"0.7rem"}}>read more at</Typography><a href={link} style={{fontSize:"0.7rem",fontWeight:"800",textDecoration:"none",color:"black"}}>{publisher}</a>
                    </Publish>
                </Box>
            </ContentBox>
            
        </NewsBox>)
}
export default Article;