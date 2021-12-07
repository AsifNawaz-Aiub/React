import React from 'react';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note =(props)=>{
    const dNote=()=>{
        props.dNote(props.id);
    }

    return(<>
      
        <div className="todo3">
        <h1> {props.title}</h1>
        <p>{props.content} </p>
        <Button  sx={{
          borderRadius: '50%',
          minHeight: '20px',
          width: '10px',
          marginLeft:'230px',
          marginTop:'40px',
        
          color: 'orange',
          ':hover': {
          bgcolor: 'orange', // theme.palette.primary.main
          color: 'black',
    }, }} onClick={dNote}><DeleteOutlineIcon/></Button>
        </div> 
        
    </>);
}

export default Note;