import './App.css';
import {Header,SideMenu} from './components/Header'
import InfoHeader   from './components/InfoHeader';
import { Box } from '@mui/material';
import Article from './components/Articles';
import { useState } from 'react';

function App() {


  function handleMenu(){
    setClick((click)=>!click);
  }




  const[click,setClick]=useState(false);
  return (
    <Box className="App">
      <Header onclick={handleMenu}/>
      <SideMenu clicked={click} handleMenu={handleMenu}/>
      <Box style={{backgroundColor:"rgba(255,255,255,1)"}}>
        <InfoHeader/>
        <Article/>
      </Box>
      <Box style={{position:"fixed",top:"95vh",right:"10px",fontSize:"1rem",fontWeight:"bold"}}>&copy; Vanshaj Tiwari</Box>
    </Box>
  );
}

export default App;
