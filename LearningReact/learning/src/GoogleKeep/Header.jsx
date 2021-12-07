import React from "react";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

const Header=()=>{

return(<>
<div style={{ height:'75px', backgroundColor:'orange', borderRadius:'5px', display:'flex'}}>
<Button><MenuIcon sx={{color:'black'}}/></Button>
 <MenuBookIcon sx={{ fontSize: 70, paddingLeft:'20px' }} />
 <h1 style={{marginLeft:'10px'}}>Google Keep</h1>
 </div>
</>);

}

export default Header;