import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Data,Data2} from '../App.jsx'

const Note =(props)=>{
    const dNote=()=>{
        props.dNote(props.id);
    }

//    const d1= useContext(Data);
//    const d2= useContext(Data2);
//    <Data.Consumer>{(val)=>{ return(<Data2.Consumer>{(val2)=>{return(<h1>{val}{val2}</h1>)}}</Data2.Consumer>)}}</Data.Consumer>   for context consumer
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