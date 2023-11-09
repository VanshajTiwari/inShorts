import { AppBar, Box, List, ListItem, ToggleButton, ToggleButtonGroup, Toolbar, styled } from "@mui/material";
import {Menu} from '@mui/icons-material';
import { useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
const StyledHeader=styled(AppBar)`
  background:white;
  box-shadow:0 4px 5px 1px #DCDCDC;
  position:sticky;
  z-index:1;
`
const Image=styled('img')({
  height:"55px",
  margin:"auto",
  
})

const MenuIcon=styled(Menu)`
color:#000`
const Header=({onclick})=>{
  const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
  
    return(
      <StyledHeader>
        <Toolbar>
          <MenuIcon onClick={()=>onclick()}/><span style={{color:"black"}}>Menu</span>
          <Image src={url} alt="logo" />
        </Toolbar>
      </StyledHeader>
    )
}
const SideMenu=({clicked,handleMenu})=>{
  useEffect(()=>{
    const slider=document.querySelector('.mover');
    if(clicked)
    slider.classList.add('slide');
  else
    slider.classList.remove('slide');
  })


  const ListLi=styled(ListItem)`
  padding:0.6rem;
  padding-left:3rem;
  margin:0.1rem;
  margin-left:1rem;
  font-size:0.9rem;
  &:hover{
    background-color:rgba(128,130,144,0.3);
    width:90% !important;
    border-radius: 0.1rem;
  }
  `
 const Toggle=styled(ToggleButtonGroup)`
 border:1px solid #808290;
 color:#fff;
 `
 const ToggleBtn=styled(ToggleButton)`
 color:#fff;
 height:2rem;
  `

   return(

    <Box className="mover">
    <Box><CloseIcon onClick={()=>{handleMenu()}}/></Box>
    <Toggle>
      <ToggleBtn style={{backgroundColor:"#808290"}}>English</ToggleBtn>
      <ToggleBtn style={{width:"5rem"}}>हिन्दी</ToggleBtn>
    </Toggle>
    <List className="Lister">
    <label style={{position:"relative",textAlign:"left",paddingTop:"1rem",left:"0.8rem",fontSize:"0.8rem",color:"#808290",borderTop:"1px solid #808290",width:"90%"}}>Categories</label>
      <ListLi className="active" style={{marginTop:"1rem"}}>All News</ListLi>
      <ListLi>India</ListLi>
      <ListLi>Business</ListLi>
      <ListLi>Sports</ListLi>
      <ListLi>World</ListLi>
      <ListLi>Politics</ListLi>
      <ListLi>Technology</ListLi>
      <ListLi>Startup</ListLi>
      <ListLi>Entertainment</ListLi>
      <ListLi>Miscellaneous</ListLi>
      <ListLi>Hatke</ListLi>
      <ListLi>Science</ListLi>
      <ListLi>Automobile</ListLi>
    </List>
    </Box>
  )
}

export  {Header,SideMenu};